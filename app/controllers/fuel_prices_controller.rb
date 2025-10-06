class FuelPricesController < ApplicationController
  def get_todays_price
    state = params[:state]
    date = params[:topup_date]
    type = params[:type]

    price_record = FuelPrice.where(state: state, fuel_type: type)
                            .where("date <= ?", date)
                            .order(date: :desc)
                            .first

    if price_record
      render json: { rate_per_litre: price_record.price }
    else
      render json: { rate_per_litre: nil }, status: :not_found
    end
  end
end
