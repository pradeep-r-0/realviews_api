class AddFieldsToCars < ActiveRecord::Migration[8.0]
  def change
    add_column :cars, :make, :string
    add_column :cars, :model, :string
    add_column :cars, :date_of_purchase, :date
  end
end
