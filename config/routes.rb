Rails.application.routes.draw do
  Rails.application.routes.draw do
    namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :update, :show]
      resources :schedules, only: [:index, :create, :update]
      # resources :drinks, only: [:create, :show, :index, :update, :destroy]
      resource :session, only: [:create, :destroy]
      # resources :ratings, only: [:show, :index, :create, :destroy, :update]
    end
    root to: 'static_pages#root'
  end
end
