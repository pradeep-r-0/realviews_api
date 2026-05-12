import "@hotwired/turbo-rails";
import "./expenses";
import "./google_places";
import "./share";
import "./cars";
import "./receipt_scan";
import Rails from "@rails/ujs";
Rails.start();

document.addEventListener("turbo:load", () => {});
