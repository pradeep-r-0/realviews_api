namespace :restaurants do
  desc "Populate restaurant details from Google Places API, centered around each restaurant's city"
  task populate_from_google: :environment do
    require 'google_places'
    require 'geocoder'

    client = GooglePlaces::Client.new(ENV['GOOGLE_PLACES_API_KEY'])

    Restaurant.includes(:city).find_each do |restaurant|
      city_name = restaurant.city&.name
      puts "📍 Fetching details for: #{restaurant.name} (City: #{city_name})"

      begin
        # Get city coordinates via Geocoder (cached automatically)
        city_coords = Geocoder.search(city_name).first&.coordinates

        if city_coords.nil?
          puts "⚠️ Skipping #{restaurant.name}: couldn't find coordinates for #{city_name}"
          next
        end

        lat, lng = city_coords
        radius = 20000 # 40 km search radius

        # Search restaurant near its city
        results = client.spots(lat, lng, name: restaurant.name, radius: radius, types: ['restaurant'])

        if results.any?
          place = results.select{|x| x[:name]}.first

          name = place.name
          formatted_address = place.formatted_address

          # Parse address components
          parts = formatted_address.split(",").map(&:strip)
          country_name = parts.pop
          state_name   = parts.pop
          city_name    = parts.pop
          restaurant_details = parts.join(", ")

          # Update or create city
          city = City.find_or_initialize_by(name: city_name, state: state_name, country: country_name)
          city.save! if city.new_record?

          # Update restaurant record
          restaurant.update!(
            name: name,
            city_id: city.id
          )

          puts "✅ Updated: #{name} | #{city_name}, #{state_name}, #{country_name}"
        else
          puts "⚠️ No results for: #{restaurant.name}"
        end

        sleep(0.1) # avoid hitting API limits
      rescue => e
        puts "❌ Error for #{restaurant.name}: #{e.message}"
      end
    end
  end
end
