class DishesController < ApplicationController
  before_action :set_dish, only: %i[ show update destroy ]

  # GET /dishes
  def index
    @cities = City.all

    if params[:city_id].present?
      @selected_city = City.find(params[:city_id])
      @dishes = Dish.joins(:restaurant).where(restaurants: { city_id: @selected_city.id })
    else
      @dishes = Dish.includes(restaurant: :city)
    end

    if params[:dish_name].present?
        @dishes = @dishes.where("dishes.name ILIKE ?", "%#{params[:dish_name]}%")
    end

    if params[:restaurant_name].present?
        @dishes = @dishes.includes(:restaurant).where("restaurants.name ILIKE ?", "%#{params[:restaurant_name]}%")
    end

    if params[:sort] == "rating"
      direction = params[:direction] == "asc" ? "asc" : "desc"
      @dishes = @dishes.order(rating: direction)
    end

    respond_to do |format|
      format.html # renders views/dishes/index.html.erb
      format.json { render json: @dishes }
    end
  end

  # GET /dishes/1
  def show
    @dish = Dish.find(params[:id])
    respond_to do |format|
      format.json { render json: @dish }
      format.html
    end
  end

  def new
    @dish = Dish.new
    @restaurant_names = Restaurant.distinct.pluck(:name).compact
    @city_names = City.distinct.pluck(:name).compact
  end
  # POST /dishes
  def create
    assign_restaurant
    @dish = @restaurant.dishes.new(dish_params)
    if @dish.save
      redirect_to @dish, notice: "Dish created successfully."
    else
      render :new
    end
  end

  # PATCH/PUT /dishes/1
  def update
    if @dish.update(dish_params)
      render json: @dish
    else
      render json: @dish.errors, status: :unprocessable_entity
    end
  end

  # DELETE /dishes/1
  def destroy
    @dish.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dish
      @dish = Dish.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def dish_params
      params.require(:dish).permit(:name, :rating, :comments)
    end

    def assign_restaurant
      restaurant_name=params[:dish].delete(:restaurant_name)
      city = City.find_by_name(params[:dish].delete(:city_name))
      @restaurant = Restaurant.find_or_initialize_by(name: restaurant_name, city_id: city.id)
      @restaurant.save if @restaurant.new_record?
    end
end
