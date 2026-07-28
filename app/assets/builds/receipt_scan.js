(() => {
  // app/javascript/receipt_scan.js
  document.addEventListener("turbo:load", () => {
    const upload = document.getElementById("receipt_image_upload");
    const status = document.getElementById("receipt_scan_status");
    console.log("scan receipt loaded: ", upload);
    if (!upload) return;
    const setScanningState = (isScanning) => {
      if (!status) return;
      status.style.display = isScanning ? "block" : "none";
      upload.disabled = isScanning;
      upload.style.opacity = isScanning ? "0.7" : "1";
    };
    const setFieldValue = (fieldId, value) => {
      const field = document.getElementById(fieldId);
      if (!field) return;
      const nextValue = value == null ? "" : String(value);
      if (field.tagName === "SELECT") {
        const hasOption = Array.from(field.options).some((option) => option.value === nextValue);
        if (!hasOption && nextValue) {
          field.add(new Option(nextValue, nextValue));
        }
        field.value = nextValue;
      } else {
        field.value = nextValue;
      }
      field.dispatchEvent(new Event("input", { bubbles: true }));
      field.dispatchEvent(new Event("change", { bubbles: true }));
    };
    upload.addEventListener("change", async () => {
      const file = upload.files[0];
      if (!file) return;
      setScanningState(true);
      const formData = new FormData();
      formData.append("receipt_image", file);
      try {
        const response = await fetch("/fuel_topups/scan_receipt", {
          method: "POST",
          headers: {
            "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content
          },
          body: formData
        });
        const data = await response.json();
        if (!response.ok) {
          console.error("Receipt scan failed:", data.error || response.statusText);
          setScanningState(false);
          window.alert(data.error || "Receipt scan failed. Please try again with a JPG or PNG image.");
          return;
        }
        console.log("data from image: ", data);
        setFieldValue("fuel_topup_brand", data.fuel_brand || "");
        setFieldValue("fuel_topup_rate_per_litre", data.rate_per_litre || "");
        setFieldValue("fuel_topup_price", data.amount || "");
        setFieldValue("fuel_topup_state", data.state || "");
        setFieldValue("fuel_topup_topup_date", data.topup_date || "");
        const dateField = document.getElementById("fuel_topup_topup_date");
        if (dateField && dateField._flatpickr) {
          dateField._flatpickr.setDate(data.topup_date || "", true);
        }
      } catch (error) {
        console.error("Receipt scan request failed:", error);
        window.alert("Receipt scan failed. Please try again.");
      } finally {
        setScanningState(false);
      }
    });
  });
})();
//# sourceMappingURL=receipt_scan.js.map
