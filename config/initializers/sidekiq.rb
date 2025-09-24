require "sidekiq"
require "sidekiq-cron"

Sidekiq.configure_server do |config|
  config.redis = { url: ENV.fetch("REDIS_URL", "redis://127.0.0.1:6379/0") }

  schedule_file = "config/sidekiq.yml"

  if File.exist?(schedule_file) && Sidekiq.server?
    yaml = YAML.load_file(schedule_file)
    if yaml[:schedule].present?
      Sidekiq::Cron::Job.load_from_hash(yaml[:schedule])
    end
  end
end

Sidekiq.configure_client do |config|
  config.redis = { url: ENV.fetch("REDIS_URL", "redis://127.0.0.1:6379/0") }
end
