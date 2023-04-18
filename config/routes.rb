Rails.application.routes.draw do

  namespace :api do
    resources :artworks, :except => [:new, :edit] 
    
    get '/signup', to: 'users#new'
    post '/signup', to: 'users#create'
    get '/login', to: 'sessions#new'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'  
    get "/userInSession", to:"sessions#get_logged_in_user"
  end

end
