require 'rtesseract'
require 'mini_magick'

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

  # Improved scan_receipt: preprocess image, try multiple PSMs, and return parsed fields + debug info
  def scan_receipt
    image = params[:receipt_image]
    if image.blank?
      render json: { error: "No image uploaded" }, status: :unprocessable_entity
      return
    end

    # Accept when the uploaded part reports an image MIME type or when
    # the original filename has a common image extension (jpg/jpeg/png/gif).
    valid_mime = image.respond_to?(:content_type) && image.content_type.to_s.start_with?("image/")
    valid_ext = image.respond_to?(:original_filename) && image.original_filename.to_s.downcase.match?(/\.(jpe?g|png|gif)$/)
    unless valid_mime || valid_ext
      render json: { error: "Only image files are allowed" }, status: :unprocessable_entity
      return
    end

    timestamp = Time.now.to_i
    tmp_orig = image.tempfile.path
    processed_path = "/tmp/receipt_processed_#{timestamp}.png"
    header_path = "/tmp/receipt_header_#{timestamp}.png"

    begin
      img = MiniMagick::Image.open(tmp_orig)
      img.auto_orient
      img.combine_options do |c|
        c.resize "300%"
        c.colorspace "Gray"
        c.normalize
        c.unsharp "0x1"
        c.threshold "60%"
        c.strip
      end
      img.write(processed_path)

      # crop top header region for better brand/GST detection
      MiniMagick::Tool::Convert.new do |convert|
        convert << processed_path
        convert << "-crop"
        convert << "100%x25%+0+0"
        convert << header_path
      end
    rescue => e
      Rails.logger.error("Preprocessing failed: #{e.message}")
      processed_path = tmp_orig
    end

    header_text = ""
    if File.exist?(header_path)
      begin
        header_text = RTesseract.new(header_path.to_s, psm: 6, oem: 1).to_s.upcase
      rescue => e
        Rails.logger.error("Header OCR failed: #{e.message}")
      end
    end
    # Try multiple PSMs and pick the best result heuristically
    best_text = ""
    best_score = -1
    best_psm = nil
    [6, 3, 11].each do |psm_val|
      begin
        txt = RTesseract.new(processed_path.to_s, psm: psm_val, oem: 1).to_s.upcase
        t = txt.to_s.gsub(/\s+/, " ").strip
        digit_count = t.scan(/\d/).size
        word_count = t.split.size
        score = digit_count * 5 + word_count
        if score > best_score
          best_score = score
          best_text = t
          best_psm = psm_val
        end
      rescue => e
        Rails.logger.error("OCR psm=#{psm_val} failed: #{e.message}")
      end
    end

    Rails.logger.info "Chosen OCR psm=#{best_psm} score=#{best_score}"

    normalized_text = "#{header_text} #{best_text}".gsub(/\s+/, ' ')

    is_hpcl =
      normalized_text.include?("HPCL") ||
      normalized_text.include?("H.P.C.L") ||
      normalized_text.include?("HINDUSTAN PETROLEUM") ||
      normalized_text.match?(/\bHP\b/) ||
      normalized_text.match?(/POIRC|OMIIE|BHARAT|BPCL|IOCL/i)

    fuel_brand =
      if is_hpcl
        "HP"
      elsif normalized_text.include?("BPCL") || normalized_text.include?("BHARAT")
        "Bharat Petrol"
      elsif normalized_text.include?("IOCL")
        "Indian Oil"
      end

    date_match = normalized_text.match(/DATE.*?(\d{1,2})[\s\/\-]+(\d{1,2})[\s\/\-]+(\d{2,4})/im)
    if date_match
      if date_match.length == 4
        day   = date_match[1].to_i > 31 ? date_match[1].sub(date_match[1][0], "").to_i : date_match[1].to_i
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

    rate = nil
    amount = nil
    begin
      rate_match = normalized_text.match(/RATE\s*[:\-]?\s*RS?\.?\s*([\d\s,._]+\d)/i) || normalized_text.match(/RATE\s*[:\-]?\s*([\d\.,]+)/i)
      rate_str = rate_match && rate_match[1]
      rate = rate_str.to_s.gsub(/[^\d\.]/, '').to_f if rate_str

      amount_match = normalized_text.match(/SALE\s*[:\-]?\s*RS?\.?\s*([\d\s,._]+\d)/i) || normalized_text.match(/AMOUNT\s*[:\-]?\s*RS?\.?\s*([\d\.,]+)/i)
      amount_str = amount_match && amount_match[1]
      amount = amount_str.to_s.gsub(/[^\d\.]/, '').to_f if amount_str
    rescue => e
      Rails.logger.error("Numeric parse failed: #{e.message}")
    end

    gstin = header_text[/GSTNO\.?\s*([0-9]{2}[A-Z0-9]+)/, 1]
    fuel_match = normalized_text.match(/FUEL\s*[:;.!]?\s*([A-Z]+)/i) || normalized_text.match(/PRODUCT\s*[:;.]?\s*([A-Z]+)/i)
    fuel_type = fuel_match && fuel_match[1].to_s.titleize

    gst_states = {
      "36" => "Telangana",
      "29" => "Karnataka",
      "27" => "Maharashtra",
      "33" => "Tamil Nadu"
    }

    state = gstin && gst_states[gstin[0..1]]

    json = {
      fuel_brand: fuel_brand,
      rate_per_litre: (rate && rate > 1000) ? rate/100 : rate,
      amount: amount,
      state: state,
      topup_date: topup_date,
      fuel_type: fuel_type,
      debug: {
        chosen_psm: best_psm,
        processed_path: processed_path,
        header_path: File.exist?(header_path) ? header_path : nil,
        raw_ocr: best_text
      }
    }

    Rails.logger.info "scan_receipt json: #{json.inspect}"

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
