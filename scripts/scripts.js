const STORAGE_KEY = "preferred-theme";

function setTheme(theme) {
  const isDark = theme === "dark";
  const button = document.getElementById("theme-toggle");
  const logo = document.getElementById("logo");

  document.body.classList.toggle("dark-mode", isDark);
  localStorage.setItem(STORAGE_KEY, theme);

  if (button) {
    button.textContent = isDark ? "Desactivar modo oscuro" : "Activar modo oscuro";
    button.setAttribute("aria-pressed", String(isDark));
  }

  if (logo?.dataset.light && logo?.dataset.dark) {
    logo.src = isDark ? logo.dataset.dark : logo.dataset.light;
  }
}

function getInitialTheme() {
  const storedTheme = localStorage.getItem(STORAGE_KEY);

  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

document.addEventListener("DOMContentLoaded", () => {
  setTheme(getInitialTheme());

  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
    setTheme(nextTheme);
  });

  const year = document.getElementById("current-year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
