Rails.application.routes.draw do
  root 'pages#index'

  #now react-router has control over routes
  match '*path', to: 'pages#index', via: :all

  namespace :api do
    namespace :v1 do
      resources :news, param: :slug
      resources :reviews, only: [:create, :destroy]
    end
  end  
end
