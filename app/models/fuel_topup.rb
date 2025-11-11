class FuelTopup < ApplicationRecord
  attr_accessor :fuel_type
  belongs_to :ownership
  has_one :user, through: :ownership
  belongs_to :car

  validates :price, :topup_date, presence: true
end
