class CarsController < ApplicationController
  before_action :require_login, only: %i[new create]
  before_action :authorize_owner!, only: [:edit, :update]

  def new
    @car = Car.new
    @car.fuel_type = nil
  end

  def edit
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
    one_yr_topups = car.fuel_topups.where.not(odometer_reading: nil).where(topup_date: 1.year.ago..Time.current).order(topup_date: :desc)
    @fuel_topups = one_yr_topups.limit(3)
    @one_yr_driven_kms = one_yr_topups.first&.odometer_reading.to_i - one_yr_topups.last&.odometer_reading.to_i if one_yr_topups.size >= 2

    @e20_topups = car.fuel_topups.where.not(odometer_reading: nil).where("topup_date >= ?", Date.new(2026, 4, 1)).order(topup_date: :desc).select(:id, :odometer_reading, :price, :rate_per_litre, :topup_date)
    @non_e20_topups = car.fuel_topups.where.not(odometer_reading: nil).where("topup_date < ?", Date.new(2026, 4, 1)).order(topup_date: :desc).select(:id, :odometer_reading, :price, :rate_per_litre, :topup_date)
    @latest_topup_id = @fuel_topups.first&.id
    @ownership = car.ownerships.find_by_user_id(current_user.id) if current_user
  end

  def index
    @cars = Car.joins(:car_make).all.order("car_makes.name")
  end

  def update
    if car.update(car_params)
      redirect_to @car, notice: "Car updated successfully."
    else
      render :edit, status: :unprocessable_entity
    end
  end
  private

  def car
    @car ||= Car.find(params[:id])
  end

  def car_params
    params.require(:car).permit(
      :model,:variant, :fuel_type,
      :date_of_purchase, :car_make_id
    )
  end

  def authorize_owner!
    unless owned_by?(current_user.id)
      redirect_to cars_path,
                  alert: "You can edit only your own cars."
    end
  end

  def owned_by?(user_id)
    car.users.exists?(user_id)
  end

end
