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
        address_parts = place.formatted_address.split(",").map(&:strip)
        city    = address_parts[-3] || nil
        state   = address_parts[-2] || nil
        country = address_parts[-1] || nil
        name    = place.name || restaurant.name

        restaurant.update(
          name: name
        )
        restaurant.city.update(
          name: city,
          state: state,
          country: country
        )

        puts "Updated: #{name} | #{city}, #{state}, #{country}"
      else
        puts "No results for: #{restaurant.name}"
      end

      sleep(0.1) # avoid hitting rate limits
    end
  end
end
