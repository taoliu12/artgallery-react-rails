Rails.application.routes.draw do

  namespace :api do
    resources :artworks, :except => [:new, :edit] #no need for new and edit routes, because react renders the respective forms
  end

end
