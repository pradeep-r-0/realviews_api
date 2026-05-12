document.addEventListener("DOMContentLoaded", () => {
  const upload = document.getElementById("receipt_image_upload");
  console.log("scan receipt loaded: ",upload);

  if (!upload) return;

  upload.addEventListener("change", async () => {
    const file = upload.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("receipt_image", file);

    const response = await fetch("/fuel_topups/scan_receipt", {
      method: "POST",
      headers: {
        "X-CSRF-Token":
          document.querySelector('meta[name="csrf-token"]').content
      },
      body: formData
    });

    const data = await response.json();

    console.log("data from image: ",data);

    document.getElementById("fuel_topup_brand").value =
      data.fuel_brand || "";

    document.getElementById("fuel_topup_rate_per_litre").value =
      data.rate_per_litre || "";

    document.getElementById("fuel_topup_price").value =
      data.amount || "";

    document.getElementById("fuel_topup_state").value =
      data.state || "";
    
    document.getElementById("fuel_topup_topup_date").value =
      data.topup_date || "";
  });
});