class AddUserToDishes < ActiveRecord::Migration[8.0]
  def change
    add_reference :dishes, :user, foreign_key: true

    reversible do |dir|
      dir.up do
        Dish.update_all(user_id: User.find_by_email('pradeepr95@gmail.com').id)
      end
    end
  end
end
