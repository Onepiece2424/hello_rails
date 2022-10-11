Rails.application.routes.draw do
  root to: "users#index"
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  resources :tasks, :cards, :users, :books, :publishers
  resource :profile, only: %i{show edit update}
end
