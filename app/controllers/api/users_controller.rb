class UsersController < ApplicationController
 
    def create
        @user = User.new(user_params)   
        # byebug
        if @user.save
            session[:user_id] = @user.id 
            render json: @user
        else
            # byebug
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        if @user
            render json: @user    
        else
            render json: { error: "Error" }, status: :unauthorized
        end     
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation)
    end
    
end
