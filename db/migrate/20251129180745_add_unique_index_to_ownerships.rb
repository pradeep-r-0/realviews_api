class AddUniqueIndexToOwnerships < ActiveRecord::Migration[8.0]
  def change
    add_index :ownerships, [:user_id, :car_id], unique: true
  end
end
