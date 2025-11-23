import "@hotwired/turbo-rails";
import "./expenses";
import "./google_places";
import "./share";
import Rails from "@rails/ujs";
Rails.start();

document.addEventListener("turbo:load", () => {});
