namespace :restaurants do
  desc "Populate restaurant details from Google Places API"
  task populate_from_google: :environment do
    require 'google_places'

    # Initialize client with your API key
    client = GooglePlaces::Client.new(ENV['GOOGLE_PLACES_API_KEY'])

    Restaurant.find_each do |restaurant|
      puts "Fetching details for: #{restaurant.name}"

      # Search by restaurant name
      results = client.spots_by_query(restaurant.name, types: ['restaurant'])

      if results.any?
        place = results.first

        # Parse address components
        parts = place.formatted_address.split(",").map(&:strip)
        country_name = parts.pop
        state_name   = parts.pop
        city_name    = parts.pop 
        restaurant_name = parts.join(", ")

        restaurant.update(
          name: restaurant_name
        )
        restaurant.city.update(
          name: city_name,
          state: state_name,
          country: country_name
        )

        puts "Updated: #{restaurant_name} | #{city_name}, #{state_name}, #{country_name}"
      else
        puts "No results for: #{restaurant.name}"
      end

      sleep(0.1) # avoid hitting rate limits
    end
  end
end
