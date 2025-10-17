class Expense < ApplicationRecord
  belongs_to :balance_sheet

  validates :amount, numericality: { greater_than_or_equal_to: 0 }
  validates :date, presence: true
  validates :description, presence: true
end
