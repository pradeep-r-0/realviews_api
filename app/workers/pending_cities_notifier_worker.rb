# app/workers/pending_cities_notifier_worker.rb
class PendingCitiesNotifierWorker
  include Sidekiq::Worker

  def perform
    pending_cities = City.pending

    return if pending_cities.empty?

    # Notify admins (example: mailer)
    CityMailer.pending_cities_notification(pending_cities).deliver_now
  end
end
