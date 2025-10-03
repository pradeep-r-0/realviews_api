class Car < ApplicationRecord
  belongs_to :car_make
  has_many :ownerships
  has_many :users, through: :ownerships
  has_many :fuel_topups, dependent: :destroy

  validates :variant, :fuel_type, presence: true
  # Composite uniqueness validation
  validates :variant, uniqueness: { scope: [:car_make_id, :fuel_type], message: "with this make and fuel type already exists" }
end
