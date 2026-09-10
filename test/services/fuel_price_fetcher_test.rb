require "test_helper"

class FuelPriceFetcherTest < ActiveSupport::TestCase
  test "fetch_fuel_data preserves auth and date params while adding fuel filters" do
    original_email = ENV["NIXINFO_EMAIL"]
    original_key = ENV["NIXINFO_API_KEY"]
    original_alternate = ENV["FUEL_PRICE_ALTERNATE_KEY"]

    ENV["NIXINFO_EMAIL"] = "tester@example.com"
    ENV["NIXINFO_API_KEY"] = "test-key"
    ENV["FUEL_PRICE_ALTERNATE_KEY"] = "alternate-token"

    requested = nil
    http = Object.new
    http.define_singleton_method(:request) { |req| requested = req; "ok" }

    Net::HTTP.stub(:start, ->(*_args, &block) { block.call(http) }) do
      response = FuelPriceFetcher.fetch_fuel_data("petrol")
      assert_equal "ok", response
    end

    assert_instance_of Net::HTTP::Get, requested
    assert_equal "Bearer alternate-token", requested["Authorization"]
    assert_includes requested.path, "/api/fuel/petrol-price-state-capital-v7"
    assert_includes requested.path, "email=tester%40example.com"
    assert_includes requested.path, "key=test-key"
    assert_includes requested.path, "days=today"
    assert_includes requested.path, "ob=ASC"
    assert_includes requested.path, "location_type=state"
    assert_includes requested.path, "fuel_type=petrol"
  ensure
    ENV["NIXINFO_EMAIL"] = original_email
    ENV["NIXINFO_API_KEY"] = original_key
    ENV["FUEL_PRICE_ALTERNATE_KEY"] = original_alternate
  end

  test "parse_response ignores inactive account errors from the provider" do
    logger = Object.new
    logger.define_singleton_method(:warn) { |message| @warn_message = message }
    logger.define_singleton_method(:warn_message) { @warn_message }

    Rails.stub(:logger, logger) do
      assert_equal [], FuelPriceFetcher.parse_response('{"error":"Account inactive"}', "petrol")
      assert_includes logger.warn_message, "Account inactive"
    end
  end
end
