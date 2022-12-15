class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :memory, :user
  has_one :user
  has_one :memory
end
