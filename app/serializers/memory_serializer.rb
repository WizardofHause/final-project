class MemorySerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :status, :main_img, :description, :likes
  has_one :user
  has_many :comments
end
