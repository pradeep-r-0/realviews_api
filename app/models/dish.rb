class Dish < ApplicationRecord
  belongs_to :restaurant
  belongs_to :user, optional: true
  before_create :titleize_name

  private

  def titleize_name
    self.name = name.to_s.titleize
  end
end
