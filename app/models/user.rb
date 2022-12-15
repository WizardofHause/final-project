class User < ApplicationRecord
    has_many :memories
    has_many :comments
    # has_many :memories, through: :comments
    
    has_secure_password

    # validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
    # validates :name, presence: true, on: :create
    # validates :name, uniqueness: true, on: :create
    # validates :name, length: { maximum: 30 }, on: :create
    # validates :password, confirmation: true, length: { minimum: 5 }, on: :create
    # validates :password_confirmation, presence: true
end
