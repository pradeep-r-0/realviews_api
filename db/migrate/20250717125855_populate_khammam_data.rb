class PopulateKhammamData < ActiveRecord::Migration[8.0]
  def change
    require 'roo'
    begin
      file = Roo::Excelx.new("/home/ubuntu/realviews_api/tmp/Khammam.xlsx")
      sheet = file.sheet(3)
      total_rows = sheet.column(1).size
      puts "total rows: #{total_rows}"
      rest_name = sheet.row(2).first
      (2..total_rows).each do |i|
        # debugger
        puts "existing name: #{rest_name}"
        restaurant_items = sheet.row(i)
        puts "restaurant items: #{restaurant_items.inspect}"
        rest_name = restaurant_items.first || rest_name
        puts "restaurant name: #{rest_name}"
        puts "name: #{rest_name}"
        dish = restaurant_items[1]
        rating = restaurant_items[2]
        comment = restaurant_items[3] || ""
        restaurant = Restaurant.find_by_name(rest_name) || Restaurant.find_by_name(rest_name.titlecase)
        unless restaurant
          puts "No restaurant found: #{rest_name}"
          restaurant = Restaurant.new(name: rest_name.titlecase, city_id: 2)
          restaurant.save!
          puts "Created restaurant: #{restaurant.inspect}"
        end

        puts "dish: #{dish}"
        puts "rating: #{rating}"
        puts "comments: #{comment}" if comment.present?
        next if restaurant.dishes.find_by_name(dish.titlecase)
        puts restaurant.dishes.new(name: dish.titlecase, rating: rating, comments: comment.capitalize).save!
        puts
      end

    puts
    rescue => e
      puts "Exception occurred:: #{e}"
    end
  end
end
