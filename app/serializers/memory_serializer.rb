class MemorySerializer < ActiveModel::Serializer
  attributes :id, :title, :type, :status, :main_img, :description, :likes
  has_one :user
end
