require "test_helper"

class ExpenseTest < ActiveSupport::TestCase
  test "classifies common expense descriptions" do
    assert_equal "Food", Expense.category_for_description("Restaurant dinner")
    assert_equal "Clothing", Expense.category_for_description("Winter jacket")
    assert_equal "Transportation", Expense.category_for_description("Uber ride")
  end

  test "uses Other when no category keyword matches" do
    assert_equal "Other", Expense.category_for_description("Unrecognized purchase")
  end
end
