class AvatarSerializer < ActiveModel::Serializer
  attributes :id, :image
  has_one :user_profile
end
