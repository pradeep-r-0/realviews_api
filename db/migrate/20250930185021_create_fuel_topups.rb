class CreateFuelTopups < ActiveRecord::Migration[8.0]
  def change
    create_table :fuel_topups do |t|
      t.references :car, null: false, foreign_key: true
      t.string :brand
      t.decimal :quantity
      t.decimal :price
      t.date :top_up_date

      t.timestamps
    end
  end
end
