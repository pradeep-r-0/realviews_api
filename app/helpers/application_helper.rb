module ApplicationHelper
  def body_class
    if request.path.start_with?("/cars") || request.path.include?("/fuel_topups")
      "page-cars"
    elsif request.path.include?("/dishes")
      "page-dishes"
    else
      controller_name
    end
  end
end
