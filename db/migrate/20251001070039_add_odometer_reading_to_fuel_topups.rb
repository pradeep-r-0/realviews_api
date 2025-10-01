class AddOdometerReadingToFuelTopups < ActiveRecord::Migration[8.0]
  def change
    add_column :fuel_topups, :odometer_reading, :decimal
  end
end
