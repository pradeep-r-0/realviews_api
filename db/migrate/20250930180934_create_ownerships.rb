class CreateOwnerships < ActiveRecord::Migration[8.0]
  def change
    create_table :ownerships do |t|
      t.references :user, null: false, foreign_key: true
      t.references :car, null: false, foreign_key: true
      t.string :ownership_date

      t.timestamps
    end
  end
end
