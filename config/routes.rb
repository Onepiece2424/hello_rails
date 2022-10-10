Rails.application.routes.draw do
  get 'profiles/show'
  get 'profiles/edit'
  get 'profiles/update'
  root to: "users#index"
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  resources :tasks, :cards, :users, :books, :publishers
  resource :profile, only: %i{show edit update}
end
