console.log("🔥 expenses.js loaded");

document.addEventListener("turbo:load", setupAddExpense);
document.addEventListener("DOMContentLoaded", setupAddExpense);

function setupAddExpense() {
  const addBtn = document.getElementById("add-expense-btn");
  const container = document.getElementById("expenses-container");
  const template = document.getElementById("expense-template");

  if (!addBtn || !container || !template) return;

  // Add new expense
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const html = template.innerHTML.replace(/NEW_RECORD/g, new Date().getTime());
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    container.appendChild(wrapper.firstElementChild);
  });

  // Remove expense
  container.addEventListener("click", function(e) {
    if (!e.target.classList.contains("remove-expense")) return;
    e.preventDefault();

    const expenseFields = e.target.closest(".expense-fields");
    const destroyField = expenseFields.querySelector("input[name*='_destroy']");

    if (destroyField) {
      // mark for destruction
      destroyField.value = "1";
      // add class to visually hide, don't remove or set display:none
      expenseFields.classList.add("marked-for-destroy");
    } else {
      expenseFields.remove(); // for new records not in DB
    }
  });

}
