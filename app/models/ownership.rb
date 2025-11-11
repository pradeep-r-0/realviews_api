class Ownership < ApplicationRecord
  belongs_to :user
  belongs_to :car
  has_many :fuel_topups, through: :car
end
