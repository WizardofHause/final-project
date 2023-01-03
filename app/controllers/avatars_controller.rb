class AvatarsController < ApplicationController
    # skip_before_action :authorized_user

    before_action :set_avatar, only: [:show, :update, :destroy]

    def index
        render json: Avatar.all, status: :ok
    end

    def show
        render json: @avatar, status: :ok
    end

    def create
        avatar = Avatar.create!(avatar_params)
        render json: avatar, status: :created
    end

    # def update
    #     @avatar.update!(avatar_params)
    #     render json: @avatar, status: :accepted
    # end

    def update
        @avatar.image.attach(params[:image])
        image = url_for(@avatar.image)

        if @avatar.update!(image: image)
            render json: @avatar, status: :ok
        end
    end

    def destroy
        @avatar.destroy
        head :no_content
    end

    private

    def avatar_params
        params.permit(:user_profile_id, :image, :avatar)
    end

    def set_avatar
        @avatar = Avatar.find(params[:id])
    end
end
