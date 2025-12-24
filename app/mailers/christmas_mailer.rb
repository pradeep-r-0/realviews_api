class ChristmasMailer < ApplicationMailer
  default from: "pradeepr95@gmail.com"

  def send_greetings(user)
    @user = user
    Rails.logger.info "Sending Christmas mail to #{@user.email} (#{@user.name})"
    mail(
      to: @user.email,
      subject: "Merry Christmas from REal VIEWS 🎄"
    )
  end
end
