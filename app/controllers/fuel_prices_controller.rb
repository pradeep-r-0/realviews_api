class FuelPricesController < ApplicationController
  def get_todays_price
    state = params[:state]
    topup_date = params[:topup_date]
    type = params[:type]

    begin
      # Try multiple date formats
      date = begin
        Date.strptime(topup_date, "%d-%m-%Y")
      rescue Date::Error
        Date.strptime(topup_date, "%Y-%m-%d")
      end

      price_record = FuelPrice.where(state: state, fuel_type: type)
                              .where("date <= ?", date)
                              .order(date: :desc)
                              .first

      if price_record
        render json: { rate_per_litre: price_record.price }
      else
        render json: { rate_per_litre: nil }, status: :not_found
      end
    rescue StandardError => e
      Rails.logger.error "FuelPricesController#get_todays_price error: #{e.class} #{e.message} (state=#{state}, date=#{topup_date}, type=#{type})"
      render json: { error: e.message }, status: :bad_request
    end
  end
end
