// app/javascript/expenses.js
console.log("\u{1F525} expenses.js loaded");
document.addEventListener("turbo:load", setupAddExpense);
document.addEventListener("DOMContentLoaded", setupAddExpense);
function setupAddExpense() {
  const addBtn = document.getElementById("add-expense-btn");
  const container = document.getElementById("expenses-container");
  const template = document.getElementById("expense-template");
  if (!addBtn || !container || !template) return;
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const html = template.innerHTML.replace(/NEW_RECORD/g, (/* @__PURE__ */ new Date()).getTime());
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    container.appendChild(wrapper.firstElementChild);
  });
  container.addEventListener("click", function(e) {
    if (!e.target.classList.contains("remove-expense")) return;
    e.preventDefault();
    const expenseFields = e.target.closest(".expense-fields");
    const destroyField = expenseFields.querySelector("input[name*='_destroy']");
    if (destroyField) {
      destroyField.value = "1";
      expenseFields.classList.add("marked-for-destroy");
    } else {
      expenseFields.remove();
    }
  });
}
//# sourceMappingURL=/assets/expenses.js.map
