module BalanceSheetsHelper
  def month_year_label(sheet)
    "#{Date::MONTHNAMES[sheet.month]} #{sheet.year}"
  end
end
