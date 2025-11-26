class AddOwnershipIdToFuelTopups < ActiveRecord::Migration[8.0]
  def change
    add_column :fuel_topups, :ownership_id, :integer
    add_index :fuel_topups, :ownership_id
  end
end
