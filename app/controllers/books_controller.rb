class BooksController < ApplicationController
  def index
  end

  def new
  end

  def show
    @book = Book.find(params[:id])
    respond_to do |format|
      format.html
      format.json
    end
  end

  def edit
  end
end
