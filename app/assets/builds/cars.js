(() => {
  // app/javascript/cars.js
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
      brands.forEach((brand) => {
        const option = document.createElement("option");
        option.value = brand;
        option.textContent = brand;
        if (savedBrand && brand === savedBrand) {
          option.selected = true;
        }
        brandSelect.appendChild(option);
      });
    };
    if (fuelType) {
      fuelType.addEventListener("change", () => {
        brandSelect.dataset.selected = null;
        updateBrands();
      });
    }
    updateBrands();
  });
})();
//# sourceMappingURL=cars.js.map
