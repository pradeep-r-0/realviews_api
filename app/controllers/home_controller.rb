class HomeController < ApplicationController
  def index
    render plain: "App is alive"
  end
end
