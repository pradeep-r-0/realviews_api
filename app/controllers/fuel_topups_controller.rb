class FuelTopupsController < ApplicationController
  before_action :require_login, only: %i[index new create edit update destroy]
  before_action :set_ownership
  before_action :authorize_owner!, only: %i[new create edit update destroy]
  before_action :set_car
  before_action :set_fuel_topup, only: %i[edit update destroy]

  def index
    @fuel_topups = @ownership.fuel_topups.order(topup_date: :desc, odometer_reading: :desc)
  end

  def new
    @fuel_topup = @ownership.fuel_topups.new
  end

  def create
    @fuel_topup = @ownership.fuel_topups.new(fuel_topup_params)
    @fuel_topup.user = current_user
    if @fuel_topup.save
      redirect_to ownership_fuel_topups_path(@ownership),
                  notice: "Fuel top-up added successfully!"
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @readonly = false
  end

  def show
    @ownership = Ownership.find(params[:ownership_id])
    @fuel_topup = @ownership.fuel_topups.find(params[:id])
  end

  def update
    if @fuel_topup.update(fuel_topup_params)
      redirect_to ownership_fuel_topups_path(@ownership),
                  notice: "Fuel top-up updated successfully!"
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @fuel_topup.destroy
    redirect_to ownership_fuel_topups_path(@ownership),
                notice: "Fuel top-up deleted successfully!"
  end

  private

  def set_ownership
    @ownership = Ownership.find(params[:ownership_id])
  end

  def set_car
    @car = @ownership.car
  end

  def set_fuel_topup
    @fuel_topup = @ownership.fuel_topups.find(params[:id])
  end

  def fuel_topup_params
    params.require(:fuel_topup).permit(:brand, :rate_per_litre, :price, :odometer_reading,
                                       :topup_date, :state, :fuel_type)
  end

  def authorize_owner!
    unless @ownership.user == current_user
      redirect_to root_path, alert: "You’re not authorized to modify fuel top-ups for this car."
    end
  end
end
