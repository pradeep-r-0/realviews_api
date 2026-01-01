class NewYearMailerJob < ApplicationJob
  queue_as :default

  def perform
    NewYearMailer.new_year_email.deliver_now
  end
end
