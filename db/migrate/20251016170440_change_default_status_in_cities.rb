class ChangeDefaultStatusInCities < ActiveRecord::Migration[8.0]
  def change
    change_column_default :cities, :status, from: 0, to: 1
  end
end
