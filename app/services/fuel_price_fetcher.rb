require "net/http"
require "json"

class FuelPriceFetcher
  BASE_URL = "https://fuel.indianapi.in/live_fuel_price"
  FUEL_TYPES=[ "petrol", "diesel" ]

  def self.fetch_and_store
    api_key = ENV["INDIAN_API_KEY"]
    raise "Missing IndianAPI key" unless api_key

    uri = URI(BASE_URL)
    all_success = true
    if Rails.cache.read("fuel_api_blocked_#{Date.today}")
      Rails.logger.warn "Fuel API blocked for today — skipping."
      return
    end
    FUEL_TYPES.each do |fuel_type|
      params = { location_type: "state", fuel_type: fuel_type }
      uri.query = URI.encode_www_form(params)
      req = Net::HTTP::Get.new(uri)
      req["X-API-Key"] = api_key
      Rails.logger.info "Calling IndianAPI for #{fuel_type} at #{Time.now}"

      res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) { |http| http.request(req) }
      
      if res.code == "429"
        Rails.logger.error "Fuel API rate limit exceeded — blocking further calls for the day."
        Rails.cache.write("fuel_api_blocked_#{Date.today}", true, expires_in: 24.hours)
        return
      end

      if res.is_a?(Net::HTTPSuccess)
        data = JSON.parse(res.body)
        save_prices(data, fuel_type)
      else
        all_success = false
        Rails.logger.error "FuelPriceFetcher failed: #{res.code} #{res.body}"
      end
      sleep(60)
    end
    delete_older_prices if all_success
  end

  def self.save_prices(data, fuel_type)
    today = Date.today
    data.each do |entry|
      FuelPrice.find_or_create_by!(
        state: entry["city"],
        fuel_type: fuel_type.titleize,
        date: today
      ) do |fp|
        next unless fp.new_record?
        fp.price = entry["price"].to_f
      end
    end
  end

  def self.delete_older_prices
    older_entries = FuelPrice.where(created_at: ...20.days.ago)
    Rails.logger.info "Deleting older #{older_entries.size} fuel prices"
    older_entries.destroy_all
  end
end
