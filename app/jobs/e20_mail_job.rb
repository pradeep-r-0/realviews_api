class E20MailJob < ApplicationJob
  queue_as :default

  def perform(*args)
    User.find_each do |user|
      E20Mailer.send_mail(user).deliver_now
    end
  end
end
