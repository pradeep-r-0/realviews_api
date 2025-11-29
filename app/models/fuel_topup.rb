class FuelTopup < ApplicationRecord
  attr_accessor :fuel_type
  belongs_to :ownership
  belongs_to :user
  belongs_to :car

  validates :price, :topup_date, presence: true
end
