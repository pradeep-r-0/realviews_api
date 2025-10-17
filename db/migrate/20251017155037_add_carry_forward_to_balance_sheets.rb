class AddCarryForwardToBalanceSheets < ActiveRecord::Migration[8.0]
  def change
    add_column :balance_sheets, :carry_forward, :decimal, precision: 12, scale: 2
  end
end
