class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :user, :memory, :created_at
  has_one :user
  has_one :memory
end
