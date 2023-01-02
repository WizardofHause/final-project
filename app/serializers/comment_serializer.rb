class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :user, :memory
  has_one :user
  has_one :memory
end
