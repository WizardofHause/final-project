class MemoriesController < ApplicationController
    before_action :set_memory, only: [:show, :update, :destroy]
    
    def index
        render json: Memory.all, status: :ok
    end

    def show
        render json: @memory, status: :ok
    end

    def create
        memory = Memory.create!(memory_params)
        render json: memory, status: :created
    end

    def update
        @memory.update!(memory_params)
        render json: @memory, status: :accepted
    end

    def destroy
        # @memory.comments.destroy_all
        @memory.destroy
        head :no_content
    end

    private

    def memory_params
        params.permit(:title, :category, :status, :main_img, :description, :likes)
    end

    def set_memory
        @memory = Memory.find(params[:id])
    end
end
