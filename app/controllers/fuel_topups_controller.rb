class FuelTopupsController < ApplicationController
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

  private

  def set_car
    @car = Car.find(params[:car_id])
  end

  def fuel_topup_params
    params.require(:fuel_topup).permit(:brand, :quantity, :price, :topup_date)
  end
end
