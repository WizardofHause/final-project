class SessionsController < ApplicationController
    
    skip_before_action :authorized_user, only: [:create]

    # '/login'
	def create
		user = User.find_by(name: params[:name])
		if user&.authenticate(params[:password])
			session[:user_id] = user.id
			render json: user, status: :ok
		else
			render json: { errors: "Username and/or password is incorrect... 🤔" }, status: :unauthorized
		end
	end

	# '/logout'
	def delete
		session.delete :user_id
		head :no_content
	end
end
