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
    cars_without_topups.find_each do |car|
      user = car.user
      Rails.logger.info "#{car.make}: #{car.model} L #{car.variant} newly added by user: #{user&.email}"
      next unless user
      UserMailer
        .fuel_topup_reminder(user, car)
        .deliver_now
    end
  end
end
