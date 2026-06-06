# app/jobs/feature_announcement_job.rb
class FeatureAnnouncementJob
  include Sidekiq::Job

  def perform(user_id)
    user = User.find_by(id: user_id)

    return unless user&.email.present?

    UserMailer.feature_announcement(user).deliver_now
  end
end
