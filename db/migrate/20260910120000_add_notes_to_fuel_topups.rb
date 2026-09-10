class AddNotesToFuelTopups < ActiveRecord::Migration[8.0]
  def change
    add_column :fuel_topups, :notes, :text
  end
end
