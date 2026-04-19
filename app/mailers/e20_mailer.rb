class E20Mailer < ApplicationMailer
  default from: "pradeepr95@gmail.com"

  def send_mail(user)
    @user = user
    file = Rails.root.join("app/assets/images/e20_feature.png")

    attachments.inline['e20_feature.png'] = {
      mime_type: 'image/png',
      content: File.binread(file)
    }
    mail(
      to: @user.email,
      subject: "New Feature: Track Your E20 Fuel Stats 🚗⚡"
    )
  end
end
