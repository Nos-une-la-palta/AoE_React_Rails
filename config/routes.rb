Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :news, param: :slug
      resources :reviews, only: [:create, :destroy]
    end
  end  
  #now react-router has control over routes
  get '*path', to: 'pages#index', via: :all
end
