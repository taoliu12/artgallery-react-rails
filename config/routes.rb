Rails.application.routes.draw do
  resources :artworks, except: [:new, :edit]
  resources :events, only: [:index, :show]

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/userInSession", to: "sessions#get_logged_in_user"
end
