console.log("cars.js loaded");
document.addEventListener("turbo:load", () => {

  const brandSelect = document.querySelector("#fuel_topup_brand");
  const fuelType = document.querySelector("#fuel_topup_fuel_type");

  const petrolBrands = [
    "Indian Oil",
    "Indian Oil XP95",
    "Bharat Petrol",
    "Bharat Petrol Speed",
    "HP",
    "HP Power",
    "Shell",
    "Shell V-Power",
    "Nayara",
    "Jio-bp"
  ];

  const otherBrands = [
    "Indian Oil",
    "Bharat Petrol",
    "HP",
    "Shell",
    "Nayara",
    "Jio-bp"
  ];

  const updateBrands = () => {
    if (!brandSelect || !fuelType) return;

    const brands = fuelType.value === "Petrol" ? petrolBrands : otherBrands;
    const savedBrand = brandSelect.dataset.selected;

    brandSelect.innerHTML = "";

    // Add a blank option so the select doesn't auto-select the first brand
    const blankOption = document.createElement("option");
    blankOption.value = "";
    blankOption.textContent = "";
    if (!savedBrand) blankOption.selected = true;
    brandSelect.appendChild(blankOption);

    brands.forEach(brand => {
      const option = document.createElement("option");
      option.value = brand;
      option.textContent = brand;
      // restore selection when a saved brand exists
      if (savedBrand && brand === savedBrand) {
        option.selected = true;
      }
      brandSelect.appendChild(option);
    });
  };

  if (fuelType) {
    fuelType.addEventListener("change", () => {
      // remove saved selection when user changes fuel type
      delete brandSelect.dataset.selected;
      updateBrands();
    });
  }
  updateBrands();
});