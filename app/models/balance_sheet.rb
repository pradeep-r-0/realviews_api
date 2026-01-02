# app/models/balance_sheet.rb
class BalanceSheet < ApplicationRecord
  belongs_to :user
  has_many :expenses, dependent: :destroy
  accepts_nested_attributes_for :expenses, allow_destroy: true

  validates :month, :year, presence: true
  validates :month, inclusion: { in: 1..12, message: "must be between 1 and 12" }
  validates :year, numericality: { greater_than_or_equal_to: 2000 }

  validates :user_id, uniqueness: { scope: [ :month, :year ], message: "already has a balance sheet for this month" }

  before_validation :set_default_carry_forward, on: :create

  after_touch :recalculate_totals

  # === Class Methods ===
  def self.for_month(user, year:, month:)
    find_or_create_by!(user: user, year: year, month: month)
  end

  # Create or update an existing sheet for that month
  # Useful for recalculating totals from transactions, income/expense logs, etc.
  def self.create_or_update_for_month(user, year:, month:, income:, expense:, notes: nil)
    sheet = find_or_initialize_by(user: user, year: year, month: month)
    sheet.total_income  = income
    sheet.total_expense = expense
    sheet.net_balance   = income - expense
    sheet.notes          = notes if notes.present?
    sheet.save!
    sheet
  end

  # === Instance Methods ===
  def period
    Date.new(year, month, 1)
  end

  def recalculate_totals
    expense_sum = expenses.sum(:amount).to_f    
    update_columns(total_expense: expense_sum,
                    net_balance: total_income.to_f + carry_forward.to_f - expense_sum,
                    updated_at: DateTime.now)
  end

  private

  def set_default_carry_forward
    # Only set if user hasn't provided a value
    return if carry_forward.present?

    # Get previous month balance sheet
    prev_month = (month - 1).positive? ? month - 1 : 12
    prev_year = (month - 1).positive? ? year : year - 1

    previous_sheet = user.balance_sheets.find_by(month: prev_month, year: prev_year)
    self.carry_forward = previous_sheet&.net_balance || 0
  end
end
