class Memory < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  # has_many :users, through: :comments

  validates_presence_of :title, :category, :status, :date, :main_img, :description
end
