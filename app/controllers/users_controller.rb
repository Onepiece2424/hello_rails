class UsersController < ApplicationController
  def index
    @users = User.all
    @cards = Card.all
  end

  def new
  end

  def show
  end

  def edit
  end
end
