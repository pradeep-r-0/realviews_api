module CarsHelper
  def calculate_avg_mileage(fuel_topups, ref_topup)
    if fuel_topups.size == 1
      return "NA" unless ref_topup || fuel_topups.first.id != ref_topup.id
      now = ref_topup
      previous = fuel_topups.first
    elsif ref_topup == "index" # sent explicitly for index
      now = fuel_topups.first
      previous = fuel_topups.last
    else
      now = fuel_topups.first
      previous = fuel_topups.where("topup_date < ?", now.topup_date).first
    end

    return "Not available" unless now&.odometer_reading &&
                                  previous&.odometer_reading &&
                                  previous.price &&
                                  previous.rate_per_litre

    total_litres = fuel_topups.sum do |topup|
      topup.price.to_f / topup.rate_per_litre.to_f
    end

    if now.id == @latest_topup_id && fuel_topups.any? { |topup| topup.id == now.id }
      current_litres = now.price.to_f / now.rate_per_litre.to_f
      total_litres -= current_litres
    end

    return "Not available" if total_litres <= 0

    distance = now.odometer_reading.to_i - previous.odometer_reading.to_i

    (distance / total_litres).round(2)
  end


  def formatted_mileage(mileage:, is_latest:, is_e20:)
    return burning_now_html if is_latest
    return content_tag(:span, "-", class: "mileage-status") if mileage.nil?

    content_tag(:span, class: "mileage-main") do
      concat content_tag(:span, mileage, class: "mileage-value")

      if is_e20
        concat content_tag(:span, "E20", class: "e20-badge"){
          image_tag("e20.png", class: "e20-logo") +
          content_tag(:span, "E20", class: "e20-text")
        }
      end
    end
  end

  private

  def burning_now_html
    content_tag(:span) do
      content_tag(:i, "", class: "fas fa-fire-alt", style: "color:orange") +
      " Burning now"
    end
  end
end
