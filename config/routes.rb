Rails.application.routes.draw do
  resources :users

  # auth routes
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#delete'
  get '/authorized_user', to: 'users#show'

  # counts page visits; incriments with refresh
  get '/visits', to: 'application#page_visits'

  # handle non-existant routes
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
