class FuelTopup < ApplicationRecord
  attr_accessor :fuel_type
  belongs_to :ownership
  belongs_to :user
  belongs_to :car

  validates :price, :topup_date, presence: true

  def mileage_from(next_topup)
    return nil unless next_topup && odometer_reading && next_topup.odometer_reading
    mileage = calculate_mileage(next_topup)
    (mileage > 30 || mileage < 0) ? nil : mileage
  end

  private
  def calculate_mileage(next_topup)
    (((next_topup.odometer_reading.to_i - odometer_reading.to_i)/price.to_f)*rate_per_litre.to_f).round(2)
  end
end
