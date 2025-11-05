module FuelTopUpsHelper
  def calculate_mileage(now, previous)
    (((now.odometer_reading.to_i - previous.odometer_reading.to_i)/previous.price.to_f)*previous.rate_per_litre.to_f).round(2)
  end
end
