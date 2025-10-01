class RenameQuantityToRatePerLitreInFuelTopups < ActiveRecord::Migration[8.0]
  def change
    rename_column :fuel_topups, :quantity, :rate_per_litre
  end
end
