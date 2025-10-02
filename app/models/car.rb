class Car < ApplicationRecord
  belongs_to :car_make
  has_many :ownerships
  has_many :users, through: :ownerships
  has_many :fuel_topups, dependent: :destroy
end
