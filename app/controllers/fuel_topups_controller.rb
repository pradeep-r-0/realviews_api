require 'rtesseract'
require 'mini_magick'
require 'open3'
require 'tempfile'
require 'fileutils'
require 'timeout'

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

    content_type = image.respond_to?(:content_type) ? image.content_type.to_s.downcase : ""
    valid_mime = content_type.start_with?("image/")
    valid_ext = image.respond_to?(:original_filename) && image.original_filename.to_s.downcase.match?(/\.(jpe?g|png|gif|webp|heic|heif|tiff|bmp)$/)
    unless valid_mime || valid_ext
      render json: { error: "Only image files are allowed" }, status: :unprocessable_entity
      return
    end

    timestamp = Time.now.to_i
    tmp_orig = image.tempfile.path
    input_path = "/tmp/receipt_input_#{timestamp}#{File.extname(tmp_orig)}"
    begin
      FileUtils.cp(tmp_orig, input_path)
    rescue => cp_err
      Rails.logger.warn("Failed to copy uploaded tempfile to #{input_path}: #{cp_err.message}")
      input_path = tmp_orig
    end
    processed_path = "/tmp/receipt_processed_#{timestamp}.png"
    header_path = "/tmp/receipt_header_#{timestamp}.png"

    begin
      MiniMagick.timeout = 8
      args = [
        input_path,
        "-auto-orient",
        "-resize", "150%",
        "-colorspace", "Gray",
        "-sharpen", "0x1",
        "-threshold", "65%",
        "-strip",
        processed_path
      ]
      Rails.logger.debug("convert args: #{args.inspect}")

      begin
        MiniMagick.convert do |convert|
          args.each { |arg| convert << arg }
        end
      rescue => conv_err
        Rails.logger.warn("Image processing with convert failed: #{conv_err.class}: #{conv_err.message}\n#{conv_err.backtrace.join("\n")}")
        full_cmd = ["convert"] + args
        Rails.logger.debug("Attempting convert CLI: #{full_cmd.join(' ')}")
        begin
          Timeout.timeout(8) do
            stderr_file = Tempfile.new(['convert', 'stderr'])
            begin
              success = system(*full_cmd, out: File::NULL, err: stderr_file.path)
              stderr_file.rewind
              stderr = stderr_file.read
              unless success
                Rails.logger.error("convert CLI failed: #{stderr.to_s.strip.empty? ? '<no stderr>' : stderr}")
                processed_path = tmp_orig
              end
            ensure
              stderr_file.close!
            end
          end
        rescue Timeout::Error => terr
          Rails.logger.error("convert CLI timed out: #{terr.message}")
          processed_path = tmp_orig
        rescue => oerr
          Rails.logger.error("convert CLI fallback failed: #{oerr.class}: #{oerr.message}\n#{oerr.backtrace.join("\n")}")
          processed_path = tmp_orig
        end
      end

      if File.exist?(processed_path) && processed_path != input_path
        begin
          crop_cmd = ["convert", processed_path, "-crop", "100%x25%+0+0", header_path]
          stderr_file = Tempfile.new(['convert-crop', 'stderr'])
          begin
            success = system(*crop_cmd, out: File::NULL, err: stderr_file.path)
            stderr_file.rewind
            stderr = stderr_file.read
            unless success
              Rails.logger.warn("Header crop failed: #{stderr.to_s.strip.empty? ? '<no stderr>' : stderr}")
            end
          ensure
            stderr_file.close!
          end
        rescue => crop_err
          Rails.logger.warn("Header crop failed: #{crop_err.class}: #{crop_err.message}")
        end
      end
    rescue => e
      Rails.logger.error("Preprocessing failed: #{e.message}")
      processed_path = tmp_orig
    ensure
      if defined?(input_path) && input_path != tmp_orig && File.exist?(input_path)
        FileUtils.rm_f(input_path) rescue nil
      end
      MiniMagick.timeout = nil
    end

    header_text = ""
    if File.exist?(header_path)
      begin
        header_text = RTesseract.new(header_path.to_s, psm: 6, oem: 1).to_s.upcase
      rescue => e
        Rails.logger.error("Header OCR failed: #{e.message}")
      end
    end

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

    date_match = normalized_text.match(/\b(\d{1,2})[\s\/\-]+(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)[\s\/\-]+(\d{2,4})\b/i) ||
                 normalized_text.match(/\b(\d{1,2})[\s\/\-]+(\d{1,2})[\s\/\-]+(\d{2,4})\b/)
    if date_match
      if date_match[3]
        day = date_match[1].to_i
        month = date_match[2].to_i
        year = date_match[3].to_i
      elsif date_match[2]
        day = date_match[1].to_i
        month = Date.parse(date_match[2].to_s).month rescue nil
        year = Date.today.year
      end

      if month && day.between?(1, 31)
        year = year.to_i
        year += 2000 if year < 100
        topup_date = Date.new(year, month, day).strftime("%Y-%m-%d")
      end
    end

    if topup_date.nil?
      begin
        month_year_text = normalized_text.match(/\b(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)[\s\-\/\,]*?(\d{2,4})\b/i)
        if month_year_text
          month_name = month_year_text[0].match(/(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)/i)[0]
          month = Date.parse(month_name).month rescue nil
          year = month_year_text[1].to_i
          year += 2000 if year < 100
          if month
            topup_date = Date.new(year, month, 1).strftime("%Y-%m-%d")
          end
        else
          numeric_my = normalized_text.match(/\b(0?[1-9]|1[0-2])[\s\-\/](\d{2,4})\b/)
          if numeric_my
            month = numeric_my[1].to_i
            year = numeric_my[2].to_i
            year += 2000 if year < 100
            topup_date = Date.new(year, month, 1).strftime("%Y-%m-%d")
          end
        end
      rescue => e
        Rails.logger.error("Date fallback parse failed: #{e.message}")
      end
    end

    rate = nil
    amount = nil
    begin
      # Try to find rate near the word RATE or PRICE (handles noisy OCR like RATE(RS/L) : 115.62)
      rate_match = normalized_text.match(/RATE[^\d]{0,20}([\d]{1,6}(?:[\.,]\d{1,2})?)/i) ||
           normalized_text.match(/PRICE[^\d]{0,20}([\d]{1,6}(?:[\.,]\d{1,2})?)/i) ||
           normalized_text.match(/([\d]{1,6}(?:[\.,]\d{1,2})?)\s*(?:RS|INR)\s*\/?\s*(?:L|LTR|LITRE)/i)
      rate_str = rate_match && rate_match[1]
      rate = rate_str.to_s.gsub(/[, ]/, '.').gsub(/[^\d\.]/, '').to_f if rate_str

      # Amount: prefer explicit AMOUNT/TOTAL near the number, fallback to litres*rate or large numbers
      amount_match = normalized_text.match(/(?:AMOUNT|TOTAL|ATOT|T\(RS\)|T\s*RS)\s*[:\-]?\s*(?:RS?\.?\s*)?([\d]{1,9}(?:[\.,]\d{1,2})?)/i)
      amount_str = amount_match && amount_match[1]
      amount = amount_str.to_s.gsub(/[, ]/, '.').gsub(/[^\d\.]/, '').to_f if amount_str

      # If explicit amount not found, try litres * rate
      if (amount.nil? || amount == 0) && rate
        litre_matches = normalized_text.scan(/(\d{1,4}(?:[\.,]\d{1,3})?)\s*(?:L(?:TR|ITRE|ITRES)?\b|L\.)/i)
        if litre_matches && !litre_matches.empty?
          litres_vals = litre_matches.map { |m| m[0].to_s.gsub(/,/, '.').to_f }
          litres = litres_vals.max
          if litres && litres > 0
            amount = (litres * rate).round(2)
          end
        end
      end

      # If still no amount, look for currency-labeled numbers anywhere
      if amount.nil? || amount == 0
        currency_nums = normalized_text.scan(/(?:RS|INR)[^\d]{0,8}([\d]{1,9}(?:[\.,]\d{1,2})?)/i).map { |m| m[0].to_s.gsub(/,/, '.').to_f }
        if currency_nums.any?
          amount = currency_nums.max.round(2)
        end
      end

      # Last resort: pick large numeric candidate but exclude 6-digit PIN codes (likely postal codes)
      if (amount.nil? || amount == 0)
        numeric_candidates = normalized_text.scan(/\b([\d]{2,9}(?:[\.,]\d{1,2})?)\b/).map { |s| s[0].to_s.gsub(/,/, '.').to_f }
        large_vals = numeric_candidates.select { |v| v > 1000 && !(v >= 100000 && v <= 999999) }
        if large_vals.any?
          amount = large_vals.max.round(2)
        end
      end
    rescue => e
      Rails.logger.error("Numeric parse failed: #{e.message}")
    end

    gstin = header_text[/GSTNO\.?\s*([0-9]{2}[A-Z0-9]+)/, 1]
    fuel_match = normalized_text.match(/FUEL\s*[:;.!]?\s*([A-Z]+)/i) || normalized_text.match(/PRODUCT\s*[:;. ]?\s*([A-Z]+)/i)
    fuel_type = fuel_match && fuel_match[1].to_s.titleize

    gst_states = {
      "36" => "Telangana",
      "29" => "Karnataka",
      "27" => "Maharashtra",
      "33" => "Tamil Nadu"
    }

    state = gstin && gst_states[gstin[0..1]]

    # If brand not detected from header, try scanning the whole OCR text for known brands
    if fuel_brand.nil?
      brand_map = {
        /H\.?P\.?C\.?L/i => "HP",
        /HINDUSTAN\s+PETROLEUM/i => "HP",
        /BPCL|BHARAT/i => "Bharat Petrol",
        /IOCL|INDIAN\s+OIL/i => "Indian Oil",
        /SHELL/i => "Shell",
        /NAYARA|RELIANCE/i => "Nayara",
        /JIO\-?BP/i => "Jio-bp"
      }
      brand_map.each do |re, name|
        if normalized_text.match?(re)
          fuel_brand = name
          break
        end
      end

      # Heuristic: if header_text contains a plausible vendor line (avoid very short or punctuation-only lines)
      if fuel_brand.nil? && header_text.present?
        header_line = header_text.lines.map(&:strip).reject(&:blank?).first
        if header_line
          cleaned = header_line.gsub(/[^A-Za-z\s\-&]/, '').squeeze(' ').strip
          alpha_count = cleaned.gsub(/[^A-Za-z]/, '').length
          word_count = cleaned.split.size
          if alpha_count >= 4 && word_count >= 1 && cleaned !~ /(RECEIPT|TAX|GST|MOBILE|VEHICLE|DIST|NO\.|ADDRESS|LINE|SATE)/i
            fuel_brand = cleaned.titleize
          end
        end
      end
    end

    # If state still not detected via GSTIN, try matching any Indian state name in the OCR text
    if state.nil?
      states = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
        "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
        "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
        "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
        "Uttar Pradesh", "Uttarakhand", "West Bengal"
      ]
      states.each do |s|
        if normalized_text.upcase.include?(s.upcase)
          state = s
          break
        end
      end
    end

    # Additional heuristics: map city abbreviations or HYD/HYDERABAD to Telangana
    if state.nil? && normalized_text.match?(/\bHYD\b|HYDERABAD/i)
      state = "Telangana"
    end

    # If parsed topup_date differs significantly from the uploaded file mtime, prefer mtime
    if topup_date && image.respond_to?(:tempfile) && image.tempfile && File.exist?(image.tempfile.path)
      begin
        parsed_date = Date.parse(topup_date) rescue nil
        mtime = File.mtime(image.tempfile.path) rescue nil
        if parsed_date && mtime
          if (mtime.to_date - parsed_date).abs > 10
            topup_date = mtime.to_date.strftime("%Y-%m-%d")
          end
        end
      rescue => e
        Rails.logger.debug("Date sanity check failed: #{e.message}")
      end
    end

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
