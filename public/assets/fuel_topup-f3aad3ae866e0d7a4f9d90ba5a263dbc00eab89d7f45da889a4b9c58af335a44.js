// app/javascript/fuel_topup.js
console.log("fuel_topup.js loaded");
document.addEventListener("turbo:load", () => {
  const photoInput = document.querySelector("#fuel_topup_odometer_photo");
  const odometerField = document.querySelector("#fuel_topup_odometer_reading");
  console.log("photoInput:", photoInput);
  console.log("odometerField:", odometerField);
  if (!photoInput || !odometerField) return;
  photoInput.addEventListener("change", async () => {
    console.log("Photo selected!");
    const file = photoInput.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);
    odometerField.placeholder = "Reading\u2026 extracting from photo\u2026";
    odometerField.value = "";
    try {
      const response = await fetch("/odometer/read", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      console.log("OCR response:", data);
      if (data.odometer) {
        odometerField.value = data.odometer;
        odometerField.placeholder = "";
      } else {
        odometerField.placeholder = "Could not detect numeric reading";
      }
    } catch (err) {
      console.error("OCR request error:", err);
      odometerField.placeholder = "Error reading photo";
    }
  });
});

