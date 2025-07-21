class InsertDishes < ActiveRecord::Migration[8.0]
  require 'roo'
  def change
    begin
      file = Roo::Excelx.new("/home/ubuntu/realviews_api/tmp/Hyderabad.xlsx")
      sheet = file.sheet(0)
      total_columns = sheet.row(1).size
      puts "total columns: #{total_columns}"
      (1...total_columns).each do |i|
        #debugger
        restaurant_items = sheet.column(i).compact
        next if restaurant_items.first == "Rating"
        name = restaurant_items.first
        puts "restaurant items: #{restaurant_items}"
        puts "name: #{name}"
        food_ratings = sheet.column(i+1).compact
        puts "food ratings: #{food_ratings}"
        food_ratings.each_with_index do |review,j|
          next if j < 1
          puts "j: #{j}"
          #puts "food rating: #{review.to_s.split('(')}, index: #{i}"
          split_review = review.to_s.split('(')
          puts "split review: #{split_review}"
          rating = split_review.first.to_i
          comment = split_review.size > 1 ? split_review.last[0..-2] : ""
          restaurant = Restaurant.find_by_name(name) || Restaurant.find_by_name(name.titlecase)
          unless restaurant
            puts "No restaurant found: #{restaurant_items.first}"
            restaurant = Restaurant.new(name: name.titlecase, city_id: 1)
            restaurant.save!
            puts "Created restaurant: #{restaurant.inspect}"
          end
          puts "restaurant: #{restaurant_items.inspect}, j: #{j}"
          dish = restaurant_items[1+j]
          puts "dish: #{dish}"
          puts "rating: #{rating}"
          puts "comments: #{comment}" if comment.present?
          next if restaurant.dishes.find_by_name(dish.titlecase)
          puts restaurant.dishes.new(name: dish.titlecase, rating: rating,comments: comment.capitalize).save!
          puts
        end

        puts
      end
    rescue => e
      puts "Exception occurred:: #{e}"
    end
end
end
