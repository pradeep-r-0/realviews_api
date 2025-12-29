class DishesController < ApplicationController
  before_action :require_login, except: %i[index show]
  before_action :set_dish, only: %i[show edit update destroy]
  before_action :check_ownership, only: %i[update destroy edit]
  before_action :set_city_and_restaurants, only: :new

  # GET /dishes
  def index
    load_dishes(Dish.all)
    @cities = City.approved.order(:name)

    if params[:city_id].present?
      @selected_city = @cities.find(params[:city_id])
      @dishes = @dishes.where(restaurants: { city_id: @selected_city.id })
    end

    if params[:dish_name].present?
        @dishes = @dishes.where("dishes.name ILIKE ?", "%#{params[:dish_name]}%")
    end

    if params[:restaurant_name].present?
        @dishes = @dishes.joins(:restaurant).where("restaurants.name ILIKE ?", "%#{params[:restaurant_name]}%")
    end


    respond_to do |format|
      format.html # renders views/dishes/index.html.erb
      format.json { render json: @dishes }
    end
  end

  # GET /dishes/1
  def show
    respond_to do |format|
      format.json { render json: @dish }
      format.html
    end
  end

  def edit
  end

  def new
    @dish = Dish.new
  end
  # POST /dishes
  def create
    assign_restaurant
    @dish = @restaurant.dishes.new(dish_params)
    @dish.user = current_user
    if @dish.save
      redirect_to @dish, notice: "Dish created successfully."
    else
      render :new
    end
  end

  # PATCH/PUT /dishes/1
  def update
    if @dish.update(dish_params)
      flash[:notice] = "Dish review was successfully updated."
      redirect_to @dish
    else
      flash[:alert] = "Failed to update the dish review."
      render :edit, status: :unprocessable_entity
    end
  end

  # DELETE /dishes/1
  def destroy
    @dish.destroy!
  end

  def my_reviews
    load_dishes(current_user.dishes)
    @cities = City.approved
    render "index"
  end

  private
  # Use callbacks to share common setup or constraints between actions.

  def set_dish
    @dish ||= Dish.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def dish_params
    params.require(:dish).permit(:name, :rating, :comments, :restaurant_name)
  end

  def assign_restaurant
    restaurant_details = params[:dish].delete(:restaurant_name)
    parts = restaurant_details.split(",").map(&:strip)
    country_name = parts.pop
    state_name   = parts.pop
    city_name    = parts.pop
    restaurant_name = parts.join(", ").titleize
    city = City.find_or_initialize_by(name: city_name.titleize, state: state_name, country: country_name)
    city.save! if city.new_record?

    Rails.logger.info "🍽️ restaurant_name=#{restaurant_name.inspect}, city_id=#{city.id}"
    @restaurant = Restaurant.find_or_initialize_by(name: restaurant_name, city_id: city.id)
    Rails.logger.info "new_restaurant: #{@restaurant.new_record?}"
    return @restaurant unless @restaurant.new_record?
    @restaurant.save
    # TO_DO
    # CityMailer.send_otp(@restaurant).deliver_now
  end

  def set_city_and_restaurants
    @restaurant_names = Restaurant.distinct.order(:name).pluck(:name).compact
  end

  def check_ownership
    return redirect_to(dishes_path, alert: "You are not authorized to access this dish.") if @dish.user != current_user
  end

end
