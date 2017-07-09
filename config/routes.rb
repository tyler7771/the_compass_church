Rails.application.routes.draw do
  namespace :api do
    resources :sermons
  end
  Rails.application.routes.draw do
    namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :update, :show]
      resources :schedules, only: [:index, :create, :update]
      resources :speakers, only: [:create, :index]
      resources :seriess, only: [:create, :index]
      resources :sermons, only: [:index, :show, :create, :destroy, :update]
      resource :session, only: [:create, :destroy]
    end
    root to: 'static_pages#root'
  end
end
