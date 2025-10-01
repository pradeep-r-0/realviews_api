class InsertFuelTopups < ActiveRecord::Migration[8.0]
  require 'roo'
  def change
    begin
      file = Roo::Excelx.new("tmp/Fuel_Kms.xlsx")
      sheet = file.sheet(5)
      Rails.logger.info "sheet not found: #{sheet.nil?}"
      car = Car.find(1)
      Rails.logger.info "Car present: #{car.present?}"
      (17..90).each do |row_id|
        ft = car.fuel_topups.new
        row_now = sheet.row(row_id)
        Rails.logger.info "row now: #{row_now.inspect}"
        next unless row_now[5]
        ft.price = row_now[5]
        ft.odometer_reading = row_now[6]
        ft.rate_per_litre = row_now[7]
        ft.topup_date = row_now[4]
        ft.brand = row_now[9]
        ft.save!
        Rails.logger.info "Successfully added fuel topup: #{ft.inspect}"
      end
    rescue => e
      Rails.logger.info "Exception occurred: #{e.inspect} : ft errors: #{ft.errors}"
    end
  end
end
