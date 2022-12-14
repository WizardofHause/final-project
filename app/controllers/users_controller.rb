class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:show, :create]
    
    # '/authorized_user' => confirms login & loads user info 
    def show
		user = User.find(session[:user_id])
		render json: user, status: :ok
    end

    # new user signup
	def create
		user = User.create!(user_params)
		session[:user_id] = user.id
		render json: user, status: :created
	end

	private

	def user_params
        params.permit(:name, :email, :password)
	end
end
