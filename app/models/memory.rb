class Memory < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  validates_presence_of :title, :category, :status, :date, :main_img, :description
end
