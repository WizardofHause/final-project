Rails.application.routes.draw do
  resources :users
  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  # handle requests that aren't established routes
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#delete'
  get '/authorized_user', to: 'users#show'

end
