class NewYearGreetingWorker
  include Sidekiq::Worker

  def perform
    return unless Time.zone.now.year == 2026
    
    users = User.all

    return if users.empty? || Rails.env != "production"
    # Notify admins (example: mailer)
    users.find_each { |user| NewYearMailer.send_greetings(user).deliver_later }
  end
end
