class AddFuelTypeToCars < ActiveRecord::Migration[8.0]
  def change
    add_column :cars, :fuel_type, :string, default: "Petrol", null: false
  end
end
