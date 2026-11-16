class Expense < ApplicationRecord
  CATEGORY_PATTERNS = {
    "Food" => /\b(food|grocer(?:y|ies)|supermarkets?|restaurants?|dining|lunch|dinner|breakfast|snacks?|meals?|cafes?|coffee|tea|milk|bread|fruits?|vegetables?|meat|fish|chicken|eggs?|rice|zomato|swiggy|cake|cakes|mess|bf|biryani|pulusu|soup|vegs|tomato|onion)\b/i,
    "Clothing" => /\b(clothing|clothes|apparel|shirts?|trousers|pants|jeans|dresses|shoes|footwear|sandals|jackets?|sarees?|uniforms?|tailoring)\b/i,
    "Housing" => /\b(rent|mortgage|housing|apartment|home repair|home maintenance|plumbing|property tax|sofa)\b/i,
    "Transportation" => /\b(transport|fuel|petrol|diesel|cab|taxi|uber|ola|auto rickshaw|bus|train|metro|parking|toll|airfare|flight|vehicle|car|scooty|bike|fastag|rogerab|rapido)\b/i,
    "Utilities" => /\b(electricity|electric bill|power bill|water bill|gas bill|cooking gas|lpg|internet|broadband|wi-?fi|phone bill|mobile recharge|phone recharge|utility|cable bill)\b/i,
    "Healthcare" => /\b(healthcare|medical|medicine|medication|pharmacy|doctor|hospital|clinic|dental|dentist|prescription|therapy|tabs|syrup|drops)\b/i,
    "Education" => /\b(education|school|college|tuition|university|course fee|class fee|exam fee|textbooks?)\b/i,
    "Entertainment" => /\b(entertainment|movie|cinema|netflix|spotify|concert|gaming|video game|sports ticket|hobby)\b/i,
    "Personal Care" => /\b(salon|haircut|barber|cosmetics|skincare|toiletries|grooming|beauty)\b/i,
    "Household" => /\b(furniture|appliances?|cleaning|kitchenware|household items|soaps|oil|sofa|maintenance|bill|maid)\b/i,
    "Financial" => /\b(insurance|bank fee|tax|loan|emi|credit card|investment|atm charge|mutual fund|FD|RD|SIP|Gold|Scheme)\b/i
  }.freeze

  belongs_to :balance_sheet
  scope :undeleted, -> { where(deleted: false) }

  validates :amount, numericality: { greater_than_or_equal_to: 0 }
  validates :date, presence: true
  validates :description, presence: true
  after_save :update_parent_totals
  scope :active, -> { where(deleted: false) }

  def destroy
    update(deleted: true)
  end

  def category
    self.class.category_for_description(description)
  end

  def self.category_for_description(description)
    CATEGORY_PATTERNS.find { |_, pattern| pattern.match?(description.to_s) }&.first || "Other"
  end

  private

  def update_parent_totals
    balance_sheet&.touch
  end
end
