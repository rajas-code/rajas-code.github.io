// Dark/light mode toggle
function toggleTheme() {
  const body = document.body;
  body.dataset.theme = body.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", body.dataset.theme);
}
document.addEventListener("DOMContentLoaded", () => {
  document.body.dataset.theme = localStorage.getItem("theme") || "light";
  const btn = document.getElementById("themeToggle");
  if (btn) btn.addEventListener("click", toggleTheme);
});
