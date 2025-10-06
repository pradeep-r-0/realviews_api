class AddStateToFuelTopups < ActiveRecord::Migration[8.0]
  def change
    add_column :fuel_topups, :state, :string
  end
end
