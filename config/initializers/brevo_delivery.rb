require "sib-api-v3-sdk"

class BrevoDelivery
  def initialize(values); end

  def deliver!(mail)
    api_instance = SibApiV3Sdk::TransactionalEmailsApi.new

    sender_email = Array(mail.from).first
    raise "Mail.from is empty" unless sender_email

    recipients = Array(mail.to).map { |email| { email: email } }
    raise "Mail.to is empty" if recipients.empty?

    subject = mail.subject.to_s
    raise "Mail.subject is empty" if subject.empty?

    html_content = mail.html_part&.body&.decoded || mail.body.decoded
    raise "Mail body is empty" if html_content.to_s.strip.empty?

    send_smtp_email = SibApiV3Sdk::SendSmtpEmail.new({
      sender: { email: sender_email },
      to: recipients,
      subject: subject,
      htmlContent: html_content
      }
    )
    Rails.logger.info "Brevo payload: #{send_smtp_email.inspect}"

    begin
      result = api_instance.send_transac_email(send_smtp_email)
      Rails.logger.info "BREVO RESULT: #{result}"
    rescue SibApiV3Sdk::ApiError => e

      Rails.logger.error "BREVO ERROR: #{e.response_body}"
      raise
    end
  end
end

ActionMailer::Base.add_delivery_method :brevo, BrevoDelivery
