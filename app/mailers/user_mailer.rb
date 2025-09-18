class UserMailer < ApplicationMailer
  default from: "pradeepr95@gmail.com"

  def send_otp(user)
    @user = user
    @otp = user.otp_code
    mail(to: @user.email, subject: "Your REalVIEWS OTP Code")
  end
end
