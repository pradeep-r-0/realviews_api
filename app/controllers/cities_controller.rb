class CitiesController < ApplicationController
  def request_new
    debugger
    requested_name = ActionController::Base.helpers.sanitize(params[:name])
    city = City.find_or_initialize_by(name: requested_name.titleize)
    # You might save to a table or notify admins
    # For now, just log it
    if city.new_record?
      city.save!
      text = "New city requested: #{requested_name}"
    else
      text = "City: #{city.name} already exists"
    end
    Rails.logger.info text
    flash[:notice] = text
    redirect_to :root

    #render json: { message: "Request received for #{requested_name}" }, status: :ok
  end
end
