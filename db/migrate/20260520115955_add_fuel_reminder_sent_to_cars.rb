class AddFuelReminderSentToCars < ActiveRecord::Migration[8.0]
  def change
    add_column :cars, :fuel_reminder_sent, :boolean
  end
end
