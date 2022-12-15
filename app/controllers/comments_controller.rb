class CommentsController < ApplicationController
    before_action :set_comment, only: [:show, :update, :destroy]

    def index
        render json: Comment.all, status: :ok
    end
    
    def show
        render json: @comment, status: :ok
    end

    def create
        @comment = Content.create!(content_params)
        render json: @comment, status: :created
    end

    def update
        @comment.update!(content_params)
        render json: @comment, status: :accepted
    end

    def destroy
        @comment.destroy
        render json: {}
    end

    private

    def comment_params
        params.permit(:user_id, :place_id, :body)
    end

    def set_comment
        @comment = Comment.find(params[:id])
    end
end
