class ChristmasGreetingWorker
  include Sidekiq::Worker

  def perform
    users = User.all

    return if users.empty? || Rails.env != "production"
    # Notify admins (example: mailer)
    users.find_each { |user| ChristmasMailer.send_greetings(user).deliver_later }
  end
end
