class ChangeRatingToDecimalInDishes < ActiveRecord::Migration[8.0]
  def change
    change_column :dishes, :rating, :decimal, precision: 2, scale: 1
  end
end
