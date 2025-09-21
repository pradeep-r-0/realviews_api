class CitiesController < ApplicationController
  before_action :require_login, only: %i[new create]

  def new
    @city = City.new
    @pending_cities = City.pending
  end


  def create
    city = City.find_or_initialize_by(name:city_params)
    # You might save to a table or notify admins
    # For now, just log it
    if city.new_record?
      city.save!
      text = "New city requested: #{city_params}"
    elsif city.status == "pending"
      text = "City: #{city.name} is already in queue"
    else
      text = "City: #{city.name} already exists"
    end
    Rails.logger.info text
    flash[:notice] = text
    redirect_to :root

    # render json: { message: "Request received for #{requested_name}" }, status: :ok
  end

  private

  def city_params
    @name ||= params.require(:city).delete(:name).titleize
  end
end
