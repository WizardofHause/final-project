class MemoriesController < ApplicationController
    skip_before_action :authorized_user, only: [:index]

    before_action :set_memory, only: [:show, :update, :destroy]
    
    def index
        render json: Memory.all, status: :ok
    end

    # ------------------- MOVED SORT FUNCTION TO FRONT END FOR NEW MEMORY ADD -----
    # def index
    #     memories = Memory.all.sort_by { |memory| memory.date }
    #     render json: memories.reverse, status: :ok
    # end

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
        @memory.destroy
        head :no_content
    end

    private

    def memory_params
        params.permit(:title, :category, :status, :main_img, :description, :likes, :user_id, :date)
    end

    def set_memory
        @memory = Memory.find(params[:id])
    end
end
