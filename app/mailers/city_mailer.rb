class CityMailer < ApplicationMailer
  default from: "pradeepr95@gmail.com"

  def pending_cities_notification(cities)
    @cities = cities
    @user = User.find_by_email("pradeepr95@gmail.com")
    mail(to: @user.email, subject: "Cities Need Approval")
  end
end
