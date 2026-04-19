class E20Mailer < ApplicationMailer
  default from: "pradeepr95@gmail.com"

  def send_mail(user)
    @user = user

    mail(
      to: @user.email,
      subject: "New Feature: Track Your E20 Fuel Stats 🚗⚡"
    )
  end
end
