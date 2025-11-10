module CarsHelper
  def calculate_avg_mileage(fuel_topups)
    return -1 unless fuel_topups.size > 2
    
    now = fuel_topups.first
    previous = fuel_topups.last
    return -1 unless now.odometer_reading || previous.odometer_reading || !previous.price || !previous.rate_per_litre
    
    (((now.odometer_reading.to_i - previous.odometer_reading.to_i)/(fuel_topups.pluck(:price) - [now.price]).sum.to_f)*previous.rate_per_litre.to_f).round(2)
  end
end
