class User < ApplicationRecord
    has_many :memories, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_one :user_profile, dependent: :destroy
    has_one :avatar, through: :user_profile, dependent: :destroy
    
    has_secure_password

    validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
    validates :name, presence: true
    validates :name, uniqueness: true, on: :create
    validates :name, length: { maximum: 30 }, on: :create
    validates :password, presence: true, length: { minimum: 5 }

    # validates :password, confirmation: true, length: { minimum: 5 }, on: :create
    # validates :password_confirmation, presence: true
end
