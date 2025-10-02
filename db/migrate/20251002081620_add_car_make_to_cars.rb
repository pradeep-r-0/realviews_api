class AddCarMakeToCars < ActiveRecord::Migration[8.0]
  def change
    add_reference :cars, :car_make, foreign_key: true
  end
end
