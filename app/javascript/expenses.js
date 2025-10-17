document.addEventListener("turbo:load", () => {
  const addBtn = document.getElementById("add-expense-btn");
  const container = document.getElementById("expenses-container");
  const templateDiv = document.getElementById("expense-template");

  if (!addBtn || !container || !templateDiv) return;

  const templateHTML = templateDiv.innerHTML;

  function attachRemoveButtons() {
    document.querySelectorAll(".remove-expense-btn").forEach(btn => {
      btn.onclick = function() {
        const wrapper = this.closest(".expense-fields");
        if (wrapper) wrapper.remove();
      }
    });
  }

  attachRemoveButtons(); // attach for existing fields

  addBtn.addEventListener("click", () => {
    const uniqueId = new Date().getTime();
    const newHTML = templateHTML.replace(/NEW_RECORD/g, uniqueId);
    container.insertAdjacentHTML("beforeend", newHTML);
    attachRemoveButtons(); // attach to new field
  });
});
