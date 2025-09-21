class ApplicationController < ActionController::Base
  helper_method :current_user, :user_logged_in?
  before_action :check_session_timeout

  SESSION_TIMEOUT = 6.hours

  private

  def check_session_timeout
    if session[:last_seen_at] && session[:last_seen_at] < SESSION_TIMEOUT.ago
      reset_session
      redirect_to login_otp_path, alert: "Your session has expired due to inactivity."
    else
      # Refresh last activity timestamp
      session[:last_seen_at] = Time.current
    end
  end

  def load_dishes(scope)
    if params[:sort_column] == "rating"
      sort_column = "rating"
      sort_direction = params[:sort_direction] == "asc" ? "asc" : "desc"
    else
      sort_column = "dishes.created_at"
      sort_direction = "desc"
    end

    @dishes = scope.includes(restaurant: :city).order("#{sort_column} #{sort_direction}")
                  .page(params[:page])
                  .per(40)
  end


  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end

  def user_logged_in?
    current_user.present?
  end

  def require_login
    unless user_logged_in?
      redirect_to login_otp_path, alert: "Please log in first"
    end
  end
end
