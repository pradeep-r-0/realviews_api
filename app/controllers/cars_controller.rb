class CarsController < ApplicationController

  before_action :require_login, only: %i[new create]

  def new
    @car = Car.new
  end

  def create
    @car = Car.new(car_params)
    if @car.save
      redirect_to @car, notice: "Car was successfully created."
    else
      render :new
    end
  end

  def show
    @car = Car.find(params[:id])
  end

  private

  def car_params
    params.require(:car).permit(:make, :model, :variant, :fuel_type, :date_of_purchase)
  end
end
