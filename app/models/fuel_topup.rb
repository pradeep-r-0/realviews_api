class FuelTopup < ApplicationRecord
  belongs_to :car

  validates :price, :topup_date, presence: true
end
