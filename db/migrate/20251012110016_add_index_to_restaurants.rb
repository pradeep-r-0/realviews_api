class AddIndexToRestaurants < ActiveRecord::Migration[8.0]
  def change
    # Index on restaurant name for faster lookup
    add_index :restaurants, :name

    # Index on city_id for faster queries by city
    add_index :restaurants, :city_id

    # Optional: Combined index for name + city_id
    add_index :restaurants, [ :name, :city_id ], unique: true
  end
end
