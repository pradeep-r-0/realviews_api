Rails.application.config.middleware.use OmniAuth::Builder do
  client_id = ENV.fetch("GOOGLE_CLIENT_ID")
  client_secret = ENV.fetch("GOOGLE_CLIENT_SECRET")

  provider :google_oauth2, client_id, client_secret
end
