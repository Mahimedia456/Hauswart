export function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.classList.toggle("dark", savedTheme === "dark");
}

export function toggleTheme() {
  const current = localStorage.getItem("theme") || "light";
  const next = current === "light" ? "dark" : "light";

  localStorage.setItem("theme", next);
  document.documentElement.classList.toggle("dark", next === "dark");
}
