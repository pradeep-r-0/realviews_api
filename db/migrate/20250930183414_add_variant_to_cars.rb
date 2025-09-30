class AddVariantToCars < ActiveRecord::Migration[8.0]
  def change
    add_column :cars, :variant, :string
  end
end
