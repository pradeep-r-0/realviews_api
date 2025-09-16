class ApplicationMailer < ActionMailer::Base
  default from: ENV["GMAIL_USERNAME"] # must match the Gmail you’re authenticating with
  layout "mailer"
end
