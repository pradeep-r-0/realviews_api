import "@hotwired/turbo-rails";
import "./expenses";
import Rails from "@rails/ujs";
Rails.start();

document.addEventListener("turbo:load", () => {});
