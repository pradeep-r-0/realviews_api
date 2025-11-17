# app/controllers/concerns/location_logger.rb
require "net/http"
require "json"

module LocationLogger
  extend ActiveSupport::Concern

  included do
    before_action :log_user_location
  end

  private

  def log_user_location
    return unless ActiveModel::Type::Boolean.new.cast(ENV["LOG_LOCATION"])

    user_ip = request.headers["X-Forwarded-For"]&.split(",")&.first&.strip || request.remote_ip
    return if user_ip.blank? || user_ip == "127.0.0.1" || user_ip == "::1"

    begin
      uri = URI("https://ipinfo.io/#{user_ip}/json/")
      response = Net::HTTP.get(uri)
      data = JSON.parse(response)

      location_info = [
        data["city"],
        data["region"],
        data["country"]
      ].compact.join(", ")

      user_label = user_logged_in? ? "User #{current_user.id}" : "Guest"
      Rails.logger.info("🌍 #{user_label} accessed from IP #{user_ip} (#{location_info})")

    rescue => e
      Rails.logger.warn("🌍 Location lookup failed for IP #{user_ip}: #{e.message}")
    end
  end
end
