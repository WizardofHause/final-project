class UserProfilesController < ApplicationController
    before_action :set_profile, only: [:show, :update, :destroy]

    def index
        render json: UserProfile.all, status: :ok
    end

    def show
        render json: @profile, status: :ok
    end

    def create
        profile = UserProfile.create!(profile_params)
        render json: profile, status: :created
    end

    def update
        @profile.update!(profile_params)
        render json: @profile, status: :accepted
    end

    def destroy
        @profile.destroy
        head :no_content
    end

    private

    def profile_params
        params.permit(:user_id, :first_name, :last_name, :dob, :pob, :current_city, :family, :interests)
    end

    def set_profile
        @profile = UserProfile.find(params[:id])
    end
end
