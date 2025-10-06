class CreateFuelPrices < ActiveRecord::Migration[8.0]
  def change
    create_table :fuel_prices do |t|
      t.string :state
      t.string :fuel_type
      t.decimal :price
      t.date :date

      t.timestamps
      t.index [:state, :fuel_type, :date], unique: true
    end
  end
end
