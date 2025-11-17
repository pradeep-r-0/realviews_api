require "net/http"
require "json"

class FuelPriceFetcher
  BASE_URL = "https://fuel.indianapi.in/live_fuel_price"
  STATES=[ "Andaman And Nicobar", "Andhra Pradesh", "Arunachal Pradesh",  "Assam",  "Bihar", "Chandigarh", "Chhatisgarh", "Dadra And Nagar Haveli", "Daman And Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu And Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Pondicherry", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal" ]
  FUEL_TYPES=[ "petrol", "diesel" ]

  def self.fetch_and_store
    api_key = ENV["INDIAN_API_KEY"]
    raise "Missing IndianAPI key" unless api_key

    uri = URI(BASE_URL)
    FUEL_TYPES.each do |fuel_type|
      params = { location_type: "state", fuel_type: fuel_type }
      uri.query = URI.encode_www_form(params)
      req = Net::HTTP::Get.new(uri)
      req["X-API-Key"] = api_key

      res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) { |http| http.request(req) }
      if res.is_a?(Net::HTTPSuccess)
        data = JSON.parse(res.body)
        save_prices(data, fuel_type)
      else
        Rails.logger.error "FuelPriceFetcher failed: #{res.code} #{res.body}"
      end
      sleep(3)
    end
    delete_older_prices
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
