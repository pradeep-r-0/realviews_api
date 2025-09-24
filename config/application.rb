# config/application.rb
require_relative "boot"

require "rails"

# Pick only the frameworks you want instead of "rails/all"
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "action_cable/engine"
require "sprockets/railtie"
# require "active_storage/engine"   # uncomment if you use ActiveStorage
# require "solid_queue/engine"      # ❌ comment out if not using
# require "solid_cache/engine"      # ❌ comment out if not using

Bundler.require(*Rails.groups)

module RealviewsApi
  class Application < Rails::Application
    config.api_only = false
    config.load_defaults 8.0
    config.time_zone = "Asia/Kolkata"
  end
end
