(() => {
  // app/javascript/expenses.js
  console.log("\u{1F525} expenses.js loaded");
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-expense")) {
      e.preventDefault();
      const expenseFields = e.target.closest(".expense-fields");
      const destroyField = expenseFields.querySelector("input[name*='_destroy']");
      if (destroyField) {
        destroyField.value = "1";
        expenseFields.style.display = "none";
        console.log("Expense marked for destroy");
      } else {
        expenseFields.remove();
        console.log("New expense removed");
      }
    }
    if (e.target.id === "add-expense-btn") {
      e.preventDefault();
      const template = document.getElementById("expense-template");
      const container = document.getElementById("expenses-container");
      const html = template.innerHTML.replace(/NEW_RECORD/g, Date.now());
      const wrapper = document.createElement("div");
      wrapper.innerHTML = html;
      container.appendChild(wrapper.firstElementChild);
      console.log("New expense added");
    }
  });
})();
//# sourceMappingURL=expenses.js.map
