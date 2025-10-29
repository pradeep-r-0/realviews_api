class City < ApplicationRecord
  enum :status, {
    pending: 0,
    approved: 1,
    rejected: 2
  }
  has_many :restaurants, dependent: :destroy
end
