Rails.application.routes.draw do
  get 'cards/index'
  get 'cards/new'
  get 'cards/show'
  get 'cards/edit'
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  root to: "tasks#index"
  resources :tasks
end
