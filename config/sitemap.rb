# config/sitemap.rb

SitemapGenerator::Sitemap.default_host = "https://realviews.in"
SitemapGenerator::Sitemap.public_path = 'public/'
SitemapGenerator::Sitemap.create_index = true
SitemapGenerator::Sitemap.compress = true

SitemapGenerator::Sitemap.create do
  # Homepage
  add '/', changefreq: 'daily', priority: 1.0

  # Example static pages
  add '/about', changefreq: 'monthly'
  add '/contact', changefreq: 'monthly'

  # Example dynamic pages
  # Assuming you have a Dish model
  Dish.find_each do |dish|
    add Rails.application.routes.url_helpers.dish_path(dish), lastmod: dish.updated_at
  end
end
