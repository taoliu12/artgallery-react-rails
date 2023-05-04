class SessionsController < ApplicationController
  def create
    @user = User.find_by(username: user_params[:username])     
    if @user && @user.authenticate(user_params[:password])
      session[:user_id] = @user.id       
      render json: @user
    else         
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end   
  end
  
  def get_logged_in_user
    user_already_loggedin = User.find_by( id: session[:user_id] ) 
    render json: UserSerializer.new(user_already_loggedin)
  end

  def destroy
    session.clear     
    render json: { message: "logged out"}
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
