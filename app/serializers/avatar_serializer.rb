class AvatarSerializer < ActiveModel::Serializer
  attributes :id, :image, :image_url
  has_one :user_profile
end
