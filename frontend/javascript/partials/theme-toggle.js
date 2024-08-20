const themeToggle = document.querySelector(
  '[data-target="theme-toggle-button"]',
);

const currentTheme = localStorage.getItem("theme") ?? "darkMode";
const pageTheme = document.getElementsByTagName("html")[0];

let darkMode = currentTheme === "darkMode";

if (currentTheme === "darkMode") {
  pageTheme.classList.replace("theme-light", "theme--dark");
  themeToggle.classList.add("to-dark");
} else {
  pageTheme.classList.replace("theme--dark", "theme--light");
  themeToggle.classList.add("to-light");
}

function themeMode() {
  darkMode = !darkMode;
  darkMode
    ? themeToggle.classList.replace("to-light", "to-dark")
    : themeToggle.classList.replace("to-dark", "to-light");
  darkMode
    ? pageTheme.classList.replace("theme--light", "theme--dark")
    : pageTheme.classList.replace("theme--dark", "theme--light");

  let theme = darkMode ? "darkMode" : "lightMode";
  localStorage.setItem("theme", theme);
}

themeToggle.addEventListener("click", themeMode);
