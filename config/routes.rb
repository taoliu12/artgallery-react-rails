Rails.application.routes.draw do

  namespace :api do
    resources :artworks, :except => [:new, :edit]  
  end
  
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'  
  get "/userInSession", to:"sessions#get_logged_in_user"
end
