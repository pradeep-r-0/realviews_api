class BalanceSheetsController < ApplicationController
  before_action :require_login
  before_action :set_balance_sheet, only: [ :show, :edit, :update, :destroy ]

  # GET /balance_sheets
  def index
    @balance_sheets = current_user.balance_sheets.order(year: :desc, month: :desc)
    @matching_expenses = []
    @matching_expenses_by_sheet = {}

    if params[:q].present?
      query = params[:q].to_s.strip.downcase
      @matching_expenses = Expense.joins(:balance_sheet)
        .where(balance_sheets: { user_id: current_user.id })
        .where(deleted: false)
        .order(date: :desc)
        .select do |expense|
          matches_expense_search?(expense, query)
        end

      @balance_sheets = @matching_expenses.map(&:balance_sheet).uniq.sort_by { |sheet| [sheet.year, sheet.month] }.reverse
      @matching_expenses_by_sheet = @matching_expenses.group_by(&:balance_sheet_id)
    end
  end

  # GET /balance_sheets/:id
  def show
  end

  # GET /balance_sheets/new
  def new
    @balance_sheet = current_user.balance_sheets.new
    # default to current month/year
    @balance_sheet.year = Date.current.year
    @balance_sheet.month = Date.current.month
    @balance_sheet.expenses.build
  end

  # GET /balance_sheets/:id/edit
  def edit
    @balance_sheet = current_user.balance_sheets.find(params[:id])
    @expenses = @balance_sheet.expenses
    # Build an expense if none exist yet
    #@balance_sheet.expenses.build if @expenses.empty?
  end

  # POST /balance_sheets
  def create
    # avoid duplicate for same month/year
    @balance_sheet = current_user.balance_sheets.find_or_initialize_by(
      year: balance_sheet_params[:year],
      month: balance_sheet_params[:month]
    )
    @balance_sheet.assign_attributes(balance_sheet_params)

    if @balance_sheet.save
      flash[:notice] = "Balance sheet saved."
      redirect_to @balance_sheet
    else
      flash.now[:alert] = "Could not save balance sheet."
      render :new, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /balance_sheets/:id
  def update
    begin
      @balance_sheet.update!(balance_sheet_params)
      flash[:notice] = "Balance sheet updated."
      redirect_to balance_sheet_path(@balance_sheet)
    rescue => e
      flash.now[:alert] = "Could not update. Error: #{e.errors.full_messages}"
      render :edit, status: :unprocessable_entity
    end
  end

  # DELETE /balance_sheets/:id
  def destroy
    @balance_sheet.destroy
    flash[:notice] = "Balance sheet deleted."
    redirect_to balance_sheets_path
  end

  # POST /balance_sheets/generate
  # optional utility that creates/updates a month from provided params or current month
  def generate
    year = params[:year].present? ? params[:year].to_i : Date.current.year
    month = params[:month].present? ? params[:month].to_i : Date.current.month

    # You can compute totals from other models here, example placeholders:
    income = params[:income].present? ? params[:income].to_d : 0
    expense = params[:expense].present? ? params[:expense].to_d : 0

    @balance_sheet = BalanceSheet.create_or_update_for_month(
      current_user,
      year: year,
      month: month,
      income: income,
      expense: expense,
      notes: params[:notes]
    )

    redirect_to balance_sheet_path(@balance_sheet), notice: "Balance sheet generated for #{Date.new(year, month, 1).strftime('%B %Y')}."
  rescue ActiveRecord::RecordInvalid => e
    redirect_to balance_sheets_path, alert: "Failed to generate: #{e.record.errors.full_messages.join(', ')}"
  end

  private

  def set_balance_sheet
    @balance_sheet = current_user.balance_sheets.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    redirect_to balance_sheets_path, alert: "Balance sheet not found."
  end


  def balance_sheet_params
    params.require(:balance_sheet).permit(
      :year, :month, :total_income, :carry_forward, :notes,
      expenses_attributes: [ :id, :description, :amount, :date, :_destroy ]
    )
  end

  def matches_expense_search?(expense, query)
    return false if query.blank?

    searchable_values = [
      expense.description.to_s,
      expense.date&.to_s,
      expense.amount.to_s,
      expense.balance_sheet&.year.to_s,
      Date::MONTHNAMES[expense.balance_sheet&.month].to_s
    ]

    searchable_values.any? { |value| value.to_s.downcase.include?(query) }
  end
end
