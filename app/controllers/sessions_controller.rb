# app/controllers/sessions_controller.rb
class SessionsController < ApplicationController
  # skip_before_action :authenticate_user!, only: %i[new send_otp verify confirm]

  def new
    # form where user enters email
  end

  def send_otp
    user = User.find_by(email: params[:email].to_s.downcase.strip)
    if user
      session[:email] = user.email
      # throttle per user or per IP (see security section)
      otp = user.generate_otp!
      # use deliver_later if ActiveJob configured
      UserMailer.send_otp(user).deliver_now
      flash[:notice] = "OTP sent to #{user.email} (check spam too)."
      redirect_to verify_otp_path
    else
      flash.now[:alert] = "No account found with that email."
      render :new, status: :unprocessable_entity
    end
  end

  def verify
    @user = User.find_by(email: params[:email])
  end

  def confirm
    email = params[:email]
    user = User.find_by(email: email)
    if user && user.verify_otp?(params[:otp_code].to_s.strip)
      # log the user in — adapt to your auth system:
      session[:user_id] = user.id
      session[:last_seen_at] = Time.current
      user.clear_otp!
      flash[:success] = "Logged in successfully."
      redirect_to root_path
    else
      flash.now[:alert] = "Invalid or expired OTP."
      render :verify, status: :unprocessable_entity
    end
  end

  def destroy
    reset_session
    session.delete(:user_id)
    redirect_to root_path, notice: "Signed out"
  end
end
