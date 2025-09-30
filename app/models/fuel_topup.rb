class FuelTopup < ApplicationRecord
  belongs_to :car

  validates :brand, :quantity, :price, :topup_date, presence: true
end
