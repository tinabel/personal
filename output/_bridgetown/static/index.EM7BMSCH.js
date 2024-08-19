(() => {
  // frontend/javascript/navigation-toggle.js
  var navigationToggle = document.querySelector('[data-target="navigation-toggle-button"]');
  var navigationList = document.querySelector('[data-target="navigation-toggle-list"]');
  var toggleNavigation = () => {
    const isOpen = navigationToggle.classList.contains("is-open");
    navigationToggle.classList.replace(isOpen ? "is-open" : "is-closed", !isOpen ? "is-open" : "is-closed");
    navigationList.classList.replace(isOpen ? "is-open" : "is-closed", !isOpen ? "is-open" : "is-closed");
  };
  navigationToggle.addEventListener("click", toggleNavigation);

  // frontend/javascript/theme-toggle.js
  var themeToggle = document.querySelector('[data-target="theme-toggle-button"]');
  var currentTheme = localStorage.getItem("theme") ?? "darkMode";
  var pageTheme = document.getElementsByTagName("html")[0];
  var darkMode = currentTheme === "darkMode";
  if (currentTheme === "darkMode") {
    pageTheme.classList.replace("theme-light", "theme--dark");
    themeToggle.classList.add("to-dark");
  } else {
    pageTheme.classList.replace("theme--dark", "theme--light");
    themeToggle.classList.add("to-light");
  }
  function themeMode() {
    darkMode = !darkMode;
    darkMode ? themeToggle.classList.replace("to-light", "to-dark") : themeToggle.classList.replace("to-dark", "to-light");
    darkMode ? pageTheme.classList.replace("theme--light", "theme--dark") : pageTheme.classList.replace("theme--dark", "theme--light");
    let theme = darkMode ? "darkMode" : "lightMode";
    localStorage.setItem("theme", theme);
  }
  themeToggle.addEventListener("click", themeMode);

  // frontend/javascript/index.js
  console.info("Bridgetown is loaded!");
})();
//# sourceMappingURL=/_bridgetown/static/index.EM7BMSCH.js.map
