class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create]

	# UNUSED
	def index
		render json: User.all, status: :ok
	end
    
    # '/authorized_user' => confirms user login & loads user info 
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

	# edit user details - UNUSED
	def update
		user = User.find(session[:user_id])
		user.update!(user_params)
		render json: user, status: :accepted
	end

	# delete user & associated data - UNUSED
	def destroy
		user = User.find(session[:user_id])
		user.destroy
		head :no_content
	end

	private

	def user_params
        params.permit(:name, :email, :password)
	end
end
