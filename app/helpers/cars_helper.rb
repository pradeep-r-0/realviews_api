module CarsHelper
  def calculate_avg_mileage(fuel_topups, original_topups:)
    return -1 unless fuel_topups.size > 1

    now = fuel_topups.first
    previous = fuel_topups.last

    return "Not available" unless now.odometer_reading &&
                                  previous.odometer_reading &&
                                  previous.price &&
                                  previous.rate_per_litre

    total_price = fuel_topups.pluck(:price).sum

    # 🔥 subtract only if this is the "latest dataset"
    if fuel_topups.first == original_topups.first
      total_price -= now.price
    end

    distance = now.odometer_reading.to_i - previous.odometer_reading.to_i

    ((distance / total_price.to_f) * previous.rate_per_litre.to_f).round(2)
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
