class UserProfileSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :dob, :pob, :current_city, :family, :interests, :user_id, :avatar
  has_one :user
  has_one :avatar
end
