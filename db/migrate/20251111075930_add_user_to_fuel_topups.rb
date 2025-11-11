class AddUserToFuelTopups < ActiveRecord::Migration[8.0]
  def change
    add_reference :fuel_topups, :user, null: true, foreign_key: true
  end
end
