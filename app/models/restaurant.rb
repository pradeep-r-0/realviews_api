class Restaurant < ApplicationRecord
  belongs_to :city
  has_many :dishes, dependent: :destroy
  before_create :safe_titleize_name

  private
  
  def safe_titleize_name
    self.name = self.name.split(/(\s*-\s*)/).map { |part|
      part.match?(/-\s*/) ? part : part.titleize
    }.join
  end
end
