require 'rtesseract'

class FuelTopupsController < ApplicationController
  before_action :require_login, only: %i[index new create edit update destroy]
  before_action :set_ownership, except: %i[scan_receipt]
  before_action :authorize_owner!, only: %i[new create edit update destroy]
  before_action :set_car, except: %i[scan_receipt]
  before_action :set_fuel_topup, only: %i[edit update destroy]

  def index
    @fuel_topups = @ownership.fuel_topups.order(topup_date: :desc, odometer_reading: :desc).page(params[:page]).per(10)
    @latest_topup_id ||= @ownership.fuel_topups.order(topup_date: :desc, odometer_reading: :desc).first.id
    @page_previous_topup = params[:page].to_i == 1 ? nil : current_user.fuel_topups.order(:id).where("id > #{@fuel_topups.first.id}").limit(1).first
  end

  def new
    @fuel_topup = @ownership.fuel_topups.new
  end

  def create
    @fuel_topup = @ownership.fuel_topups.new(fuel_topup_params.merge(user: current_user, car: @ownership.car))
    if @fuel_topup.save
      redirect_to ownership_fuel_topups_path(@ownership),
                  notice: "Fuel top-up added successfully!"
    else
      flash.now[:alert] = @fuel_topup.errors.full_messages.join(",")
      render :new, status: :unprocessable_content
    end
  end

  def edit
    @readonly = false
  end

  def show
    @ownership = Ownership.find(params[:ownership_id])
    @fuel_topup = @ownership.fuel_topups.find(params[:id])
  end

  def update
    if @fuel_topup.update(fuel_topup_params)
      redirect_to ownership_fuel_topups_path(@ownership),
                  notice: "Fuel top-up updated successfully!"
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @fuel_topup.destroy
    redirect_to ownership_fuel_topups_path(@ownership),
                notice: "Fuel top-up deleted successfully!"
  end

  def scan_receipt
    image = params[:receipt_image]
    Rails.logger.info "Receipt content type: #{image.content_type}"
    Rails.logger.info "Receipt filename: #{image.original_filename}"

    if image.blank?
      render json: { error: "No image uploaded" }, status: :unprocessable_entity
      return
    end

    unless image.content_type.start_with?("image/")
      render json: { error: "Only image files are allowed" }, status: :unprocessable_entity
      return
    end

    processed_path = "/tmp/processed.png"

    success = system("convert #{image.tempfile.path} -resize 200% -contrast -threshold 60% #{processed_path}")
    if success && File.exist?(processed_path)
      extracted_text = RTesseract.new(
        processed_path.to_s,
        psm: 6,
        oem: 1
      ).to_s.upcase
    else
      Rails.logger.error("Image preprocessing failed")
      extracted_text = RTesseract.new(image.tempfile.path).to_s.upcase
    end

    header_path = "/tmp/header.png"
    cmd = %Q(convert "#{image.tempfile.path}" -crop 100%x25%+0+0 "#{header_path}")

    success = system(cmd)

    if success && File.exist?(header_path)
      header_text = RTesseract.new(header_path.to_s).to_s.upcase
    else
      Rails.logger.error("Header crop failed")
    end

    normalized_text = "#{header_text} #{extracted_text.upcase.gsub(/\s+/, ' ').gsub(/(\d+)\.\s+(\d+)/, '\1.\2')}"
    is_hpcl =
      normalized_text.include?("HPCL") ||
      normalized_text.include?("H.P.C.L") ||
      normalized_text.include?("HINDUSTAN PETROLEUM") ||
      normalized_text.match?(/POIRC|OMIIE/i) ||
      normalized_text.match?(/\bH[A-Z]\b/i)

    fuel_brand =
      if is_hpcl
        "HP"
      elsif extracted_text.include?("BPCL") || extracted_text.include?("BHARAT")
        "Bharat Petrol"
      elsif extracted_text.include?("IOCL")
        "Indian Oil"
      end
    date_match = normalized_text.match(/DATE.*?(\d{1,2})[\s\/\-]+(\d{1,2})[\s\/\-]+(\d{2,4})/im)

    if date_match
      if date_match.length == 4
        day   = date_match[1].to_i > 31 ? (date_match[1].sub(date_match[1][0],"")).to_i : date_match[1].to_i
        month = date_match[2].to_i
        year  = date_match[3].to_i
      else
        dates = date_match[1].split("/")
        day = dates[0].to_i
        month = dates[1].to_i
        year = dates[2].to_i
      end

      year += 2000 if year < 100

      topup_date = Date.new(year, month, day).strftime("%d/%m/%Y")
    end
    
    numbers = normalized_text.split
              .map { |x| x.gsub(/[^\d\.]/, '') }
              .select { |x| x.match?(/^\d+\.\d{1,2}$/) }
              .map(&:to_f)
    rate_match = normalized_text.match(/RATE.*?(\d+\.*.\d{1,2})/i)


    rate = rate_match[1].gsub(" ","").to_f if rate_match
    amount_match = normalized_text.match(/SALE.*?RS[^\d]*([\d\s_,.]+)(?=\s*VOLUME|\n|$)/im) ||
                    normalized_text.match(/AMOUNT.*?(\d+\.\d{1,2})/i)

    if amount_match
      amount = amount_match[1].gsub(/[^\d_.,]/, '')   # keep digits + separators
                            .gsub('_', '.')         # OCR fix
                            .gsub(',', '.')         # fallback decimal fix
                            .gsub(/\s+/, '')        # remove spaces
                            .to_f
    end

    gstin = header_text[/GSTNO\.?\s*([0-9]{2}[A-Z0-9]+)/, 1]
    fuel_match =   normalized_text.match(/FUEL\s*[:;.!]?\s*([A-Z]+)/i) ||
                    normalized_text.match(/PRODUCT\s*[:;.]?\s*([A-Z]+)/i)

    fuel_type = fuel_match[1].titleize if fuel_match

    gst_states = {
      "36" => "Telangana",
      "29" => "Karnataka",
      "27" => "Maharashtra",
      "33" => "Tamil Nadu"
    }

    state = gst_states[gstin&.first(2)]

    json = {
      fuel_brand: fuel_brand,
      rate_per_litre: (rate > 1000) ? rate/100 : rate,
      amount: amount,
      state: state,
      topup_date: topup_date,
      fuel_type: fuel_type
    }

    Rails.logger.info "json:: #{json.inspect}"

    render json: json
  end

  private

  def set_ownership
    @ownership = Ownership.find(params[:ownership_id])
  end

  def set_car
    @car = @ownership.car
  end

  def set_fuel_topup
    @fuel_topup = @ownership.fuel_topups.find(params[:id])
  end

  def fuel_topup_params
    params.require(:fuel_topup).permit(:brand, :rate_per_litre, :price, :odometer_reading,
                                       :topup_date, :state, :fuel_type)
  end

  def authorize_owner!
    unless @ownership.user == current_user
      redirect_to root_path, alert: "You’re not authorized to modify fuel top-ups for this car."
    end
  end
end
