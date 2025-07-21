class PopulateCities < ActiveRecord::Migration[8.0]
  def change
    state_country={state: 'Telangana', country: 'India'}
    hyderabad = City.new({name: 'Hyderabad'}.merge(state_country))
    hyderabad.save!

    City.new({name: 'Khammam'}.merge(state_country)).save!

    Restaurant.update_all(city_id: hyderabad.id)
  end
end
