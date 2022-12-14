Rails.application.routes.draw do
  resources :users
  # route that counts page visits and incriments with refresh
  get '/visits', to: 'application#page_visits'

  # handle requests that aren't established routes
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#delete'
  get '/authorized_user', to: 'users#show'

end
