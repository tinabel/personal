import "$styles/styles.scss";
import "$styles/syntax-highlighting.css";
import "./partials/_partials.js";
// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}";

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.replace("hidden", "loaded");
});
