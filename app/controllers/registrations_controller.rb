class RegistrationsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      @user.generate_otp!
      UserMailer.send_otp(@user).deliver_now
      redirect_to verify_otp_path(email: @user.email), notice: "OTP sent to your email."
    else
      flash.now[:alert] = @user.errors.full_messages.to_sentence
      render :new, status: :unprocessable_content
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
