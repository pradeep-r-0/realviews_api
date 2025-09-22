class ChangeCityStatusToEnum < ActiveRecord::Migration[8.0]
  def up
    add_column :cities, :status_tmp, :integer, default: 0, null: false
    City.reset_column_information
    City.find_each do |city|
      mapping = { "pending" => 0, "approved" => 1, "rejected" => 2 }
      city.update_column(:status_tmp, mapping[city[:status]] || 0)
    end
    remove_column :cities, :status
    rename_column :cities, :status_tmp, :status
  end

  def down
    # Recreate the old string column
    add_column :cities, :status_old, :string

    # Backfill data
    City.reset_column_information
    City.find_each do |city|
      mapping = { 0 => "pending", 1 => "active", 2 => "archived" }
      city.update_column(:status_old, mapping[city[:status]] || "pending")
    end

    # Replace back
    remove_column :cities, :status
    rename_column :cities, :status_old, :status
  end
end
