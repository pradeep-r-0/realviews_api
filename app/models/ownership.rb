class Ownership < ApplicationRecord
  belongs_to :user
  belongs_to :car
  has_many :fuel_topups
  
  validates :user_id, uniqueness: { scope: :car_id }
end
