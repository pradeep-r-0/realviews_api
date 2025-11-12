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
    @fuel_topups = car.fuel_topups.where.not(odometer_reading: nil).order(topup_date: :desc, odometer_reading: :desc).limit(5)
    @ownership = car.ownerships.find_by_user_id(current_user.id) if current_user
  end

  def index
    @cars = Car.joins(:car_make).all.order("car_makes.name")
  end

  private

  def car
    @car ||= Car.find(params[:id])
  end

  def car_params
    params.require(:car).permit(:model, :variant, :fuel_type, :date_of_purchase, :car_make_id)
  end
end
