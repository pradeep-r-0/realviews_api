# app/jobs/send_feature_announcements_job.rb
class SendFeatureAnnouncementsJob
  include Sidekiq::Job

  def perform
    User.find_each do |user|
      FeatureAnnouncementJob.perform_async(user.id)
    end
  end
end
