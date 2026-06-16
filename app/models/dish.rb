class Dish < ApplicationRecord
  belongs_to :restaurant
  belongs_to :user, optional: true
  before_validation :normalize_name

  attr_accessor :restaurant_name

  def restaurant_name
    @restaurant_name || restaurant&.name
  end

  private

  def normalize_name
    self.name = name.to_s.squish.titleize
  end
end
