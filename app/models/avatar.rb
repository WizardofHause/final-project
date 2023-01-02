class Avatar < ApplicationRecord
  belongs_to :user_profile
  # belongs_to :user
  has_one_attached :image, dependent: :destroy
end
