class Car < ApplicationRecord
  belongs_to :car_make
  has_many :ownerships
  has_many :users, through: :ownerships
  has_many :fuel_topups, dependent: :destroy

  validates :variant, :fuel_type, presence: true
  # Composite uniqueness validation
  validates :variant, uniqueness: { scope: [ :car_make_id, :fuel_type ], message: "with this make and fuel type already exists" }

  after_create :send_welcome_mail

  private

  def send_welcome_mail
    user = self.user
    car_string = "#{car.car_make&.name}: #{self.model} L #{self.variant}"
    Rails.logger.info "#{car_string} newly added by user: #{user&.email}"
    next unless user

    CarMailer
      .fuel_topup_reminder(user, car_string)
      .deliver_now
  end
end
