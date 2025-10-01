# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_10_01_174255) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "cars", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "make"
    t.string "model"
    t.date "date_of_purchase"
    t.string "variant"
    t.string "fuel_type", default: "Petrol", null: false
  end

  create_table "cities", force: :cascade do |t|
    t.string "name"
    t.string "state"
    t.string "country"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "status", default: 0, null: false
  end

  create_table "dishes", force: :cascade do |t|
    t.string "name"
    t.integer "restaurant_id"
    t.integer "rating"
    t.string "comments"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_dishes_on_user_id"
  end

  create_table "fuel_topups", force: :cascade do |t|
    t.bigint "car_id", null: false
    t.string "brand"
    t.decimal "rate_per_litre"
    t.decimal "price"
    t.date "topup_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.decimal "odometer_reading"
    t.index ["car_id"], name: "index_fuel_topups_on_car_id"
  end

  create_table "ownerships", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "car_id", null: false
    t.string "ownership_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["car_id"], name: "index_ownerships_on_car_id"
    t.index ["user_id"], name: "index_ownerships_on_user_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "city_id"
    t.index ["city_id"], name: "index_restaurants_on_city_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email", null: false
    t.string "otp_code"
    t.datetime "otp_sent_at", precision: nil
    t.datetime "last_login_at", precision: nil
    t.string "last_login_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "dishes", "users"
  add_foreign_key "fuel_topups", "cars"
  add_foreign_key "ownerships", "cars"
  add_foreign_key "ownerships", "users"
  add_foreign_key "restaurants", "cities"
end
