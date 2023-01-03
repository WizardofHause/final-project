class Avatar < ApplicationRecord
  belongs_to :user_profile
  has_one_attached :image
end
