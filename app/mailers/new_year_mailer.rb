class NewYearMailer < ApplicationMailer
  default from: "pradeepr95@gmail.com"

  def send_greetings(user)
    @user = user
    Rails.logger.info "Sending New Year greetings mail to #{@user.email} (#{@user.name})"
    mail(
      to: @user.email,
      subject: "Hello 2026! 🥳"
    )
  end
end
