# app/controllers/sessions_controller.rb
class SessionsController < ApplicationController
  # skip_before_action :authenticate_user!, only: %i[new send_otp verify confirm]

  def new
    # form where user enters email
  end

  def send_otp
    #debugger
    user = User.find_or_initialize_by(email: params[:email].to_s.downcase.strip)
    if user
      session[:email] = user.email
      # throttle per user or per IP (see security section)
      otp = user.generate_otp!
      # use deliver_later if ActiveJob configured
      #debugger
      UserMailer.send_otp(user).deliver_now
      #debugger
      flash[:notice] = "OTP sent to #{user.email} (check spam too)."
      redirect_to login_otp_verify_path
    else
      flash.now[:alert] = "No account found with that email."
      render :new, status: :unprocessable_entity
    end
  end

  def verify
    # form where user enters otp
  end

  def confirm
    #debugger
    email = session[:email]
    user = User.find_by(email: email)
    if user && user.verify_otp?(params[:otp_code].to_s.strip)
      # log the user in — adapt to your auth system:
      session[:user_id] = user.id
      session[:last_seen_at] = Time.current
      user.clear_otp!
      flash[:success] = "Signed in successfully."
      redirect_to root_path
    else
      flash.now[:alert] = "Invalid or expired code."
      render :verify, status: :unprocessable_entity
    end
  end

  def destroy
    reset_session
    session.delete(:user_id)
    redirect_to root_path, notice: "Signed out"
  end
end
