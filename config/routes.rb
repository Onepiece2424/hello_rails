Rails.application.routes.draw do
  get 'books/index'
  get 'books/new'
  get 'books/show'
  get 'books/edit'
  root to: "users#index"
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  resources :tasks, :cards, :users, :books
end
