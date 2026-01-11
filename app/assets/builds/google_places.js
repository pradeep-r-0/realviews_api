(() => {
  // app/javascript/google_places.js
  console.log("\u2705 google_places.js loaded \u2014 build version", Date.now());
  function initAutocomplete() {
    const input = document.getElementById("restaurant-input");
    if (!input) return;
    if (input.dataset.autocompleteInitialized) return;
    input.dataset.autocompleteInitialized = true;
    const isEditPage = window.location.pathname.match(/\/dishes\/\d+\/edit/);
    if (input.readOnly || input.hasAttribute("readonly") || isEditPage) {
      console.log("\u2733\uFE0F Edit mode detected \u2014 skipping autocomplete setup & validation");
      return;
    }
    const placeIdField = document.getElementById("restaurant_place_id");
    const latField = document.getElementById("restaurant_lat");
    const lngField = document.getElementById("restaurant_lng");
    if (typeof google === "undefined" || !google.maps?.places) {
      setTimeout(initAutocomplete, 500);
      return;
    }
    const autocomplete = new google.maps.places.Autocomplete(input, {
      types: ["establishment"],
      componentRestrictions: { country: "in" }
    });
    let placeSelected = false;
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place.place_id) return;
      placeSelected = true;
      if (placeIdField) placeIdField.value = place.place_id;
      if (latField) latField.value = place.geometry.location.lat();
      if (lngField) lngField.value = place.geometry.location.lng();
    });
    input.addEventListener("input", () => {
      placeSelected = false;
      if (placeIdField) placeIdField.value = "";
      if (latField) latField.value = "";
      if (lngField) lngField.value = "";
    });
    const form = input.closest("form");
    if (form) {
      form.addEventListener("submit", (e) => {
        if (input.readOnly || input.hasAttribute("readonly") || isEditPage) return;
        if (!placeSelected) {
          e.preventDefault();
          alert("Please select a restaurant from the suggestions.");
          input.focus();
        }
      });
    }
  }
  document.addEventListener("turbo:load", initAutocomplete);
})();
//# sourceMappingURL=google_places.js.map
