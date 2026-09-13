require "test_helper"

class DishesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @dish = dishes(:one)
    @city = cities(:one)
  end

  test "should get index" do
    get dishes_url, as: :json
    assert_response :success
  end

  test "search filters are applied before sorting pagination" do
    41.times do |index|
      Dish.create!(name: "Other Dish #{index}", rating: 5, restaurant: @dish.restaurant)
    end
    matching_dish = Dish.create!(name: "Searched Dish", rating: 1, restaurant: @dish.restaurant)

    get dishes_url, params: {
      dish_name: "Searched",
      sort_column: "rating",
      sort_direction: "desc"
    }, as: :json

    assert_response :success
    assert_equal [ matching_dish.id ], response.parsed_body.map { |dish| dish["id"] }
  end

  test "should create dish" do
    assert_difference("Dish.count") do
      post dishes_url, params: { dish: { comments: @dish.comments, name: @dish.name, rating: @dish.rating, restaurant_id: @dish.restaurant_id, city_name: "Hyderabad" } }, as: :json
    end

    assert_redirected_to dish_url(Dish.last)
  end

  test "should show dish" do
    get dish_url(@dish), as: :json
    assert_response :success
  end

  test "should update dish" do
    patch dish_url(@dish), params: { dish: { comments: @dish.comments, name: @dish.name, rating: @dish.rating, restaurant_id: @dish.restaurant_id } }, as: :json
    assert_response :success
  end

  test "should destroy dish" do
    assert_difference("Dish.count", -1) do
      delete dish_url(@dish), as: :json
    end

    assert_response :no_content
  end
end
