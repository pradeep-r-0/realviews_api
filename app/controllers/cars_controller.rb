class CarsController < ApplicationController

  before_action :require_login, only: %i[new create]

  def new
    @car = Car.new
    @car.fuel_type = nil
  end

  def create
    @car = Car.new(car_params)
    @car.users << current_user unless @car.users.include?(current_user)
    if @car.save
      redirect_to @car, notice: "Car successfully created."
    else
      render :new
    end
  end

  def show
    @fuel_topups = car.fuel_topups.order(:topup_date).last(5)
  end

  def index
    @cars = Car.includes(:fuel_topups).where.not(fuel_topups: {rate_per_litre: nil}).where.not(fuel_topups: { odometer_reading: nil }).distinct.order(fuel_topups: { topup_date: :asc })
  end

  private

  def car
    @car ||= Car.find(params[:id])
  end

  def car_params
    params.require(:car).permit(:model, :variant, :fuel_type, :date_of_purchase, :car_make_id)
  end
end
