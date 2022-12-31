class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :memory

  validates :body, presence: true
end
