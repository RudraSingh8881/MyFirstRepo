// Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
}

// Smooth Scroll to Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Apply Selected Color Theme
function applyColor(color) {
  document.documentElement.style.setProperty("--main-bg", color);
  localStorage.setItem("selectedColor", color);
}

// Load Saved Theme on Every Page
window.addEventListener("DOMContentLoaded", () => {
  const savedColor = localStorage.getItem("selectedColor");
  if (savedColor) applyColor(savedColor);

  document.querySelectorAll(".color-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedColor = btn.getAttribute("data-color");
      applyColor(selectedColor);
    });
  });
});
