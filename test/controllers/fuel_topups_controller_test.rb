require "test_helper"

class FuelTopupsControllerTest < ActionDispatch::IntegrationTest
  test "scan_receipt accepts uploaded image and returns a JSON payload" do
    image = Tempfile.new(["receipt", ".jpg"])
    image.binmode
    image.write("fake-jpg-content")
    image.rewind

    post "/fuel_topups/scan_receipt",
         params: { receipt_image: Rack::Test::UploadedFile.new(image.path, "image/jpeg", true) }

    assert_response :success
    json = JSON.parse(response.body)
    assert json.key?("debug")
    assert json["debug"].key?("raw_ocr")
  ensure
    image&.close!
  end
end
