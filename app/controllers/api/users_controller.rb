class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render :show
    else
      render :json => { :errors => @user.errors.full_messages }, :status => 422
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(user_params)
      @stats = Rating.statistics({id: @user.id, type: "user"}, current_user, "update")
      render :show
    else
      render :json => { :errors => @user.errors.full_messages }, :status => 422
    end
  end

  def show
    @user = User.find(params[:id])
    @stats = Rating.statistics(params[:params], @user, "get")
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
