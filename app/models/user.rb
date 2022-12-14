class User < ApplicationRecord
    has_many :memories
    has_many :comments
    has_many :memories, through: :comments
    
    has_secure_password
end
