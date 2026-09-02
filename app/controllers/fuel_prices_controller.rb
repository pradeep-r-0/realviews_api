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

      # Match fuel_type case-insensitively (records use lowercase 'petrol' etc.)
      # Diagnostic logging: show counts and date range for this state/fuel_type
      matching_scope = FuelPrice.where(state: state).where("fuel_type = ?", type.to_s.camelcase)
      Rails.logger.info "FuelPrices lookup diagnostic: matching_count=#{matching_scope.count} for state='#{state}' fuel_type='#{type}'"
      if matching_scope.exists?
        Rails.logger.info "FuelPrices latest date for this scope: #{matching_scope.order(date: :desc).limit(1).pluck(:date).first}"
      else
        Rails.logger.info "FuelPrices diagnostic: no rows for state='#{state}' and fuel_type='#{type}'"
      end
q
      price_record = matching_scope.where("date <= ?", date).order(date: :desc).first

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
