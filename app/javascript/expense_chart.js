const segmentSelector = "[data-expense-chart-segment]";

function showExpenseDetails(segment) {
  const chart = segment.closest("[data-expense-chart]");
  const tooltip = chart?.querySelector("[data-expense-chart-tooltip]");

  if (!tooltip) return;

  tooltip.textContent = `${segment.dataset.expenseCategory} — ${segment.dataset.expenseAmount} (${segment.dataset.expensePercentage})`;
}

document.addEventListener("pointerover", (event) => {
  if (event.pointerType === "touch" || !(event.target instanceof Element)) return;

  const segment = event.target.closest(segmentSelector);
  if (segment) showExpenseDetails(segment);
});

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;

  const segment = event.target.closest(segmentSelector);
  if (segment) showExpenseDetails(segment);
});

document.addEventListener("focusin", (event) => {
  if (!(event.target instanceof Element)) return;

  const segment = event.target.closest(segmentSelector);
  if (segment) showExpenseDetails(segment);
});

document.addEventListener("keydown", (event) => {
  if (!["Enter", " "].includes(event.key) || !(event.target instanceof Element)) return;

  const segment = event.target.closest(segmentSelector);
  if (!segment) return;

  event.preventDefault();
  showExpenseDetails(segment);
});
