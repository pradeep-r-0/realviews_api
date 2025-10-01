class RenameTopUpDateToTopupDateInFuelTopUps < ActiveRecord::Migration[8.0]
  def change
    rename_column :fuel_topups, :top_up_date, :topup_date
  end
end
