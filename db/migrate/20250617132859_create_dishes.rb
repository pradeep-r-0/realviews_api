class CreateDishes < ActiveRecord::Migration[8.0]
  def change
    create_table :dishes do |t|
      t.string :name
      t.integer :restaurant_id
      t.integer :rating
      t.string :comments

      t.timestamps
    end
  end
end
