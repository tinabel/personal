const themeToggle = document.querySelector(
  '[data-target="theme-toggle-button"]',
);
const favicon = document.querySelector("link[rel='icon']");

const currentTheme = localStorage.getItem("theme") ?? "darkMode";
const pageTheme = document.getElementsByTagName("html")[0];
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

let isDarkMode = currentTheme === "darkMode";

favicon.href = preferredTheme ? "/images/favicon-white.ico" : "/images/favicon-black.ico";
if (currentTheme === "darkMode") {
  pageTheme.classList.replace("theme-light", "theme--dark");
  themeToggle.classList.add("to-dark");
} else {
  pageTheme.classList.replace("theme--dark", "theme--light");
  themeToggle.classList.add("to-light");
}

function themeMode() {
  isDarkMode = !isDarkMode;
  const themeClass = isDarkMode ? "theme--dark" : "theme--light";
  const themeToggleClass = isDarkMode ? "to-dark" : "to-light";
  const theme = isDarkMode ? "darkMode" : "lightMode";
  pageTheme.classList.replace(
    isDarkMode ? "theme--light" : "theme--dark",
    themeClass
  );
  themeToggle.classList.replace(
    isDarkMode ? "to-light" : "to-dark",
    themeToggleClass
  );

  localStorage.setItem("theme", theme);
}

themeToggle.addEventListener("click", themeMode);
