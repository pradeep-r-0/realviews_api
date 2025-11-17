class CreateBalanceSheets < ActiveRecord::Migration[8.0]
  def change
    create_table :balance_sheets do |t|
      t.references :user, null: false, foreign_key: true

      # month and year fields to identify the period
      t.integer :month, null: false   # 1..12
      t.integer :year, null: false

      # optional totals and notes
      t.decimal :total_income, precision: 12, scale: 2, default: 0.0, null: false
      t.decimal :total_expense, precision: 12, scale: 2, default: 0.0, null: false
      t.decimal :net_balance, precision: 12, scale: 2, default: 0.0, null: false

      t.text :notes

      t.timestamps
    end

    # Ensure one balance sheet per user per month/year
    add_index :balance_sheets, [ :user_id, :year, :month ], unique: true
  end
end
