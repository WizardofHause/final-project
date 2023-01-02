class UserProfile < ApplicationRecord
  belongs_to :user
  has_one :avatar, dependent: :destroy
end
