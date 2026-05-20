class CarMailer < ApplicationMailer
  default from: "pradeepr95@gmail.com"

  def fuel_topup_reminder(user, car)
    @user = user
    @car = car

    mail(
      to: @user.email,
      car: "#{@car.make} #{@car.model} #{@car.variant}"
      subject: "Track Mileage for Your Car on REalVIEWS"
    )
  end
end
