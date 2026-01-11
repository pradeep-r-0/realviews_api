class AddDeletedToExpenses < ActiveRecord::Migration[8.0]
  def change
    add_column :expenses, :deleted, :boolean, default: false, null: false
    add_index  :expenses, :deleted
  end
end
