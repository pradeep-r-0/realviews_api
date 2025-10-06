class FetchFuelPricesJob < ApplicationJob
  queue_as :default

  def perform(*args)
    # Do something later
    FuelPriceFetcher.fetch_and_store
  end
end
