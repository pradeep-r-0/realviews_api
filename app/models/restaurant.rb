class Restaurant < ApplicationRecord
    belongs_to :city
    has_many :dishes
end
