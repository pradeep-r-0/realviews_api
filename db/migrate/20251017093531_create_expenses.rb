class CreateExpenses < ActiveRecord::Migration[8.0]
  def change
    create_table :expenses do |t|
      t.references :balance_sheet, null: false, foreign_key: true
      t.string :description
      t.decimal :amount
      t.date :date

      t.timestamps
    end
  end
end
