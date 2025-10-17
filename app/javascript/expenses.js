document.addEventListener("turbo:load", setupAddExpense);
document.addEventListener("DOMContentLoaded", setupAddExpense);

function setupAddExpense() {
  const addBtn = document.getElementById("add-expense-btn");
  const container = document.getElementById("expenses-container");
  const template = document.getElementById("expense-template");

  if (!addBtn || !container || !template) return;

  addBtn.onclick = (e) => {
    e.preventDefault();

    const html = template.innerHTML.replace(/NEW_RECORD/g, new Date().getTime());
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    container.appendChild(wrapper.firstElementChild);
  };

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-expense")) {
      e.preventDefault();
      e.target.closest(".expense-fields").remove();
    }
  });
}
