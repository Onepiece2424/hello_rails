Rails.application.routes.draw do
  root to: "tasks#index"
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  resources :tasks, :cards
end
