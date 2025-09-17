class UserMailer < ApplicationMailer
  def send_otp(user)
    @user = user
    @otp = user.otp_code
    mail(to: @user.email, subject: "Your REalVIEWS login code")
  end
end
