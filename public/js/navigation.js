export function initializeNavigation() {
  const hamburger = document.getElementById("hamburger-btn");
  const menu = document.getElementById("menu");
  const closeBtn = document.getElementById("close-btn");

  if (hamburger) {
    hamburger.onclick = function () {
      menu.classList.add("active");
    };
  }

  if (closeBtn) {
    closeBtn.onclick = function () {
      menu.classList.remove("active");
    };
  }
}
