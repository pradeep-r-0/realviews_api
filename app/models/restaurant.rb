class Restaurant < ApplicationRecord
  belongs_to :city
  has_many :dishes, dependent: :destroy
  before_create :titleize_name

  private
  
  def titleize_name
    self.name = name.to_s.titleize
  end
end
