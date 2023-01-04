class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest, :memories, :comments, :user_profile
  has_many :memories
  has_many :comments
  has_one :user_profile
  has_one :avatar, through: :user_profile
end
