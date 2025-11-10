class FuelTopupsController < ApplicationController
  before_action :require_login, only: %i[index new]
  before_action :set_car

  def new
    @fuel_topup = @car.fuel_topups.new
  end

  def create
    @fuel_topup = @car.fuel_topups.new(fuel_topup_params)
    if @fuel_topup.save
      redirect_to @car, notice: "Fuel topup added successfully!"
    else
      render :new
    end
  end

  def index
    @fuel_topups = @car.fuel_topups.order(odometer_reading: :desc)
  end


  private

  def set_car
    @car = Car.find(params[:car_id])
  end

  def fuel_topup_params
    params.require(:fuel_topup).permit(:brand, :rate_per_litre, :price, :odometer_reading,
                                       :topup_date, :state, :fuel_type)
  end

end
