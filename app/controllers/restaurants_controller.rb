class RestaurantsController < ApplicationController
  before_action :set_restaurant, only: %i[ show update destroy dishes ]

  # GET /restaurants
  def index
    @restaurants = Restaurant.includes(:city)

    render json: @restaurants
  end

  # GET /restaurants/1
  def show
    render json: @restaurant
  end

  # POST /restaurants
  def create
    @restaurant = Restaurant.new(restaurant_params)

    if @restaurant.save
      render json: @restaurant, status: :created, location: @restaurant
    else
      render json: @restaurant.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /restaurants/1
  def update
    if @restaurant.update(restaurant_params)
      render json: @restaurant
    else
      render json: @restaurant.errors, status: :unprocessable_entity
    end
  end

  # DELETE /restaurants/1
  def destroy
    @restaurant.destroy!
  end

  def dishes
    @dishes = @restaurant.dishes.page(params[:page]).per(10)
    @cities = City.all
    render 'dishes/index'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_restaurant
      @restaurant = Restaurant.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def restaurant_params
      params.expect(restaurant: [ :name, :city_id ])
    end
end
