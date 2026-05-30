class Car < ApplicationRecord
  belongs_to :car_make
  has_many :ownerships, dependent: :destroy
  has_many :users, through: :ownerships
  has_many :fuel_topups, dependent: :destroy

  validates :variant, :fuel_type, presence: true
  # Composite uniqueness validation
  validates :variant, uniqueness: { scope: [ :car_make_id, :fuel_type ], message: "with this make and fuel type already exists" }

  after_create :send_welcome_mail

  private

  def send_welcome_mail
    user = self.ownerships.find_by(user_id: current_user.id).user
    car_string = "#{sel.car_make&.name} #{sel.model}  #{self.variant}"
    Rails.logger.info "#{car_string} newly added by user: #{user&.email}"
    return unless user

    CarMailer
      .fuel_topup_reminder(user, car_string)
      .deliver_now
    
    self.update_column(:fuel_reminder_sent, true)
  end
end
