class MemorySerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :status, :main_img, :description, :likes, :comments, :date, :created_at
  has_one :user
  has_many :comments
end
