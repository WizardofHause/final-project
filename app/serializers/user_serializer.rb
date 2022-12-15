class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest, :memories, :comments
  has_many :memories
  has_many :comments
end
