class Car < ApplicationRecord
  has_many :ownerships
  has_many :users, through: :ownerships
  has_many :fuel_topups, dependent: :destroy
end
