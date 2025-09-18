Rails.application.routes.draw do
  get "home/index"
  resources :dishes
  resources :restaurants
  resources :cities do
    collection do
      post :request_new
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  root "dishes#index"

  # OTP login
  get  "login/otp",          to: "sessions#new"      # form to enter email
  post "login/otp/send",     to: "sessions#send_otp" # triggers email
  get  "login/otp/verify",   to: "sessions#verify", as: :verify_otp   # form to enter otp
  post "login/otp/confirm",  to: "sessions#confirm",  as: :validate_otp# checks otp and signs in
  delete "logout",           to: "sessions#destroy"

  get  "/signup",  to: "registrations#new", as: :signup
  post "/signup",  to: "registrations#create"
end
