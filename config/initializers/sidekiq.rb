require "sidekiq"
require "sidekiq-cron"

Sidekiq.configure_server do |config|
  config.redis = { url: ENV.fetch("REDIS_URL") }

  schedule_file = Rails.root.join("config/sidekiq.yml")

  if File.exist?(schedule_file)
    yaml = YAML.load_file(schedule_file)
    schedule = yaml["schedule"] || yaml[:schedule]

    if schedule.present? && schedule.is_a?(Hash)
      # Optional: remove old jobs with the same names
      schedule.keys.each { |name| Sidekiq::Cron::Job.destroy(name) }

      Sidekiq::Cron::Job.load_from_hash!(schedule)
      Rails.logger.info "✅ Sidekiq-cron jobs loaded: #{schedule.keys}"
    else
      Rails.logger.warn "⚠️ No schedule found in sidekiq.yml"
    end
  else
    Rails.logger.warn "⚠️ No config/sidekiq.yml found"
  end
end

# config/initializers/sidekiq.rb

# Skip Redis connection during asset precompile or predeploy
if defined?(Sidekiq) && !(File.basename($PROGRAM_NAME) == "rake" && ARGV.include?("assets:precompile"))
  Sidekiq.configure_server do |config|
    config.redis = { url: ENV.fetch("REDIS_URL", "redis://localhost:6379/0") }
  end

  Sidekiq.configure_client do |config|
    config.redis = { url: ENV.fetch("REDIS_URL", "redis://localhost:6379/0") }
  end
end

