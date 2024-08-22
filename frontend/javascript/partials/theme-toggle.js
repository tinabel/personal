const themeToggle = document.querySelector('[data-target="theme-toggle-button"]');
const favicon = document.querySelector("link[rel='icon']");

const currentTheme = localStorage.getItem("theme") ?? "darkMode";
const pageTheme = document.documentElement;
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

let isDarkMode = currentTheme === "darkMode";

favicon.href = preferredTheme ? "/images/favicon-white.ico" : "/images/favicon-black.ico";

pageTheme.classList.toggle("theme--dark", isDarkMode);
pageTheme.classList.toggle("theme--light", !isDarkMode);
themeToggle.classList.toggle("to-dark", isDarkMode);
themeToggle.classList.toggle("to-light", !isDarkMode);

function toggleTheme() {
  isDarkMode = !isDarkMode;
  pageTheme.classList.toggle("theme--dark");
  pageTheme.classList.toggle("theme--light");
  themeToggle.classList.toggle("to-dark");
  themeToggle.classList.toggle("to-light");
  localStorage.setItem("theme", isDarkMode ? "darkMode" : "lightMode");
}

themeToggle.addEventListener("click", toggleTheme);

