class City < ApplicationRecord
  enum :status, {
    pending: "pending",
    approved: "approved",
    rejected: "rejected"
  }, default: "pending"
  has_many :restaurants, dependent: :destroy
end
