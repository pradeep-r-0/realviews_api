console.log("🔥 expenses.js loaded");

// Use document delegation for Turbo support
document.addEventListener("click", (e) => {
  // Remove button
  if (e.target.classList.contains("remove-expense")) {
    e.preventDefault();
    const expenseFields = e.target.closest(".expense-fields");
    const destroyField = expenseFields.querySelector("input[name*='_destroy']");
    if (destroyField) {
      destroyField.value = "1"; // mark for destruction
      expenseFields.style.display = "none";
      console.log("Expense marked for destroy");
    } else {
      expenseFields.remove(); // new record
      console.log("New expense removed");
    }
  }

  // Add button
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
