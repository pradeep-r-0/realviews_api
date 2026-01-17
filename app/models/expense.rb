class Expense < ApplicationRecord
  belongs_to :balance_sheet
  scope :undeleted, -> { where(deleted: false) }

  validates :amount, numericality: { greater_than_or_equal_to: 0 }
  validates :date, presence: true
  validates :description, presence: true
  before_save :update_parent_totals
  scope :active, -> { where(deleted: false) }

  def destroy
    update(deleted: true)
  end

  private
  def update_parent_totals
    balance_sheet&.touch
  end
end
