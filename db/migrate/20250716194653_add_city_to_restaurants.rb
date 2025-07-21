class AddCityToRestaurants < ActiveRecord::Migration[8.0]
  def change
    add_reference :restaurants, :city, foreign_key: true
  end
end
