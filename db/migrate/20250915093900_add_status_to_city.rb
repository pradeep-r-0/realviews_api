class AddStatusToCity < ActiveRecord::Migration[8.0]
  def change
    add_column :cities, :status, :string, default: "pending", null: false

    [ "Hyderabad", "Khammam" ].each do |name|
      City.find_by(name: name).update(status: "approved")
    end
  end
end
