require "net/http"
require "json"

class FuelPriceFetcher
  PRIMARY_BASE_URL = "https://fuel.indianapi.in/live_fuel_price"
  FUEL_TYPES = %w[petrol diesel]

  def self.fetch_and_store
    all_success = true
    FUEL_TYPES.each do |fuel_type|
      data = fetch_fuel_data(fuel_type)

      if data.present?
        save_prices(data, fuel_type)
      elsif duplicate_last_known_prices(fuel_type)
        Rails.logger.info "Using cached fuel prices for #{fuel_type} as fallback."
      else
        all_success = false
      end

      sleep(5)
    end

    delete_older_prices if all_success
  end

  def self.fetch_fuel_data(fuel_type)
    # Check if prices already exist for today
    return  if check_if_already_fetched(fuel_type)

    # response = request_primary(fuel_type)

    # return parse_response(response.body, fuel_type) if response.is_a?(Net::HTTPSuccess)

    # if response.code == "429"
    #   Rails.logger.error "Primary fuel API rate limit exceeded for #{fuel_type}."
    #   Rails.cache.write(block_cache_key(Date.today), true, expires_in: 24.hours)
    # else
    #   Rails.logger.error "Primary fuel API error: #{response.code} #{response.body}"
    # end

    attempt_fallback(fuel_type)
  rescue StandardError => e
    Rails.logger.error "FuelPriceFetcher failed for #{fuel_type}: #{e.class} #{e.message}"
    nil
  end

  def self.attempt_fallback(fuel_type)
    if Rails.cache.read(fallback_block_cache_key(Date.today))
      Rails.logger.warn "Nixinfo fuel API blocked for today — skipping."
      return nil
    end

    return unless fallback_configured?

    response = request_fallback(fuel_type)
    if response.is_a?(Net::HTTPSuccess)
      Rails.logger.info "Fallback fuel API succeeded for #{fuel_type}."
      return parse_response(response.body, fuel_type)
    end

    if response.code == "429"
      Rails.logger.error "Fallback fuel API rate limit exceeded for #{fuel_type}."
      Rails.cache.write(fallback_block_cache_key(Date.today), true, expires_in: 24.hours)
    else
      Rails.logger.error "Fallback fuel API failed for #{fuel_type}: #{response.code} #{response.body}"
    end

    nil
  rescue StandardError => e
    Rails.logger.error "FuelPriceFetcher  failed from nixinfo: #{e.class} #{e.message}"
    nil
  end

  def self.request_primary(fuel_type)
    api_key = ENV["INDIAN_API_KEY"]
    raise "Missing INDIAN_API_KEY" unless api_key.present?

    uri = URI(PRIMARY_BASE_URL)
    uri.query = URI.encode_www_form(location_type: "state", fuel_type: fuel_type)

    request = Net::HTTP::Get.new(uri)
    request["X-API-Key"] = api_key

    Rails.logger.info "Calling IndianAPI for #{fuel_type} at #{Time.now}"
    Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) { |http| http.request(request) }
  end

  def self.request_fallback(fuel_type)
    url = "https://nixinfo.in/api/fuel/petrol-price-state-capital-v7?email=#{ENV['NIXINFO_EMAIL']}&key=#{ENV['NIXINFO_API_KEY']}&days=today&ob=ASC"
    raise "Missing fallback fuel API URL" unless url.present?

    uri = URI(url)
    uri.query = URI.encode_www_form(location_type: "state", fuel_type: fuel_type)

    request = Net::HTTP::Get.new(uri)
    if ENV["FUEL_PRICE_ALTERNATE_KEY"].present?
      request["Authorization"] = "Bearer #{ENV["FUEL_PRICE_ALTERNATE_KEY"]}"
    end

    Rails.logger.info "Calling fallback fuel price API for #{fuel_type} at #{Time.now}"
    Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == "https") { |http| http.request(request) }
  end

  def self.parse_response(body, fuel_type)
    payload = JSON.parse(body)
    data = if payload.is_a?(Hash)
      payload["data"] || payload["records"] || payload["prices"] || payload
    else
      payload
    end

    Array(data).map do |entry|
      next unless entry.is_a?(Hash)

      city = entry["city"] || entry["state"] || entry["region"]
      price = entry["price"] || entry["rate"] || entry["value"] || entry["amount"] || entry["#{fuel_type}_price"]
      next unless city && price

      { "city" => city, "price" => price }
    end.compact
  rescue JSON::ParserError => e
    Rails.logger.error "FuelPriceFetcher JSON parse error: #{e.message}"
    []
  end

  def self.duplicate_last_known_prices(fuel_type)
    today = Date.today
    normalized_fuel_type = fuel_type.titleize
    return false if FuelPrice.exists?(date: today, fuel_type: normalized_fuel_type)

    last_date = FuelPrice.where(fuel_type: normalized_fuel_type).order(date: :desc).limit(1).pick(:date)
    return false unless last_date && last_date < today

    FuelPrice.where(fuel_type: normalized_fuel_type, date: last_date).find_each do |record|
      FuelPrice.find_or_create_by!(state: record.state, fuel_type: record.fuel_type, date: today) do |fp|
        fp.price = record.price
      end
    end

    true
  end

  def self.save_prices(data, fuel_type)
    today = Date.today
    normalized_fuel_type = fuel_type.titleize

    data.each do |entry|
      FuelPrice.find_or_create_by!(state: entry["city"], fuel_type: normalized_fuel_type, date: today) do |fp|
        fp.price = entry["price"].to_f
      end
    end
  end

  def self.delete_older_prices
    older_entries = FuelPrice.where(created_at: ...20.days.ago)
    Rails.logger.info "Deleting older #{older_entries.size} fuel prices"
    older_entries.destroy_all
  end

  def self.fallback_block_cache_key(date)
    "fallback_fuel_api_blocked_#{date}"
  end

  def self.fallback_configured?
    ENV["NIXINFO_EMAIL"].present? && ENV["NIXINFO_API_KEY"].present?
  end

  def self.check_if_already_fetched(fuel_type)
    today = Date.today
    normalized_fuel_type = fuel_type.titleize
    if FuelPrice.exists?(date: today, fuel_type: normalized_fuel_type)
      Rails.logger.info "Fuel prices for #{fuel_type} already fetched today — skipping API call."
      return true
    end

    nil
  end

  def self.fallback_blocked_today?
    Rails.cache.read(fallback_block_cache_key(Date.today)).present?
  end
end
