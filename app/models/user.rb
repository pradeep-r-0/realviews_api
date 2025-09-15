# app/models/user.rb
class User < ApplicationRecord
  # Validations
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }

  OTP_EXPIRY = 10.minutes

  def generate_otp!
    code = rand.to_s[2..7] # 6-digit numeric code
    update!(otp_code: code, otp_sent_at: Time.current)
    code
  end

  def verify_otp?(submitted_code)
    return false if otp_code.blank? || otp_sent_at.blank?
    return false if otp_expired?

    ActiveSupport::SecurityUtils.secure_compare(otp_code.to_s, submitted_code.to_s)
  end

  def clear_otp!
    update!(otp_code: nil, otp_sent_at: nil)
  end

  def otp_expired?
    otp_sent_at < OTP_EXPIRY.ago
  end
end
