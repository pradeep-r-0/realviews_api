class RemoveCityIdIndexFromRestaurants < ActiveRecord::Migration[7.0]
  def change
    # Remove the index on city_id
    remove_index :restaurants, column: :city_id, if_exists: true
  end
end
