Rails.application.config.session_store :cookie_store,
  key: '_realviews_session',
  expire_after: 7.days,
  secure: Rails.env.production?,
  same_site: :lax
