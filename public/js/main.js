import { initializeTheme } from "./theme.js";
import { initializeNavigation } from "./navigation.js";
import { initializeModal, showModal } from "./modal.js";
import { accessibilityTester } from "../../src/core/accessibilityTester.js";
import { Rive } from "@rive-app/canvas";

// Initialize all functionality
initializeTheme();
initializeNavigation();
initializeModal();

// Initialize motion preference handling
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const videoBackground = document.querySelector(".video-background");

function handleReducedMotion() {
  if (prefersReducedMotion.matches) {
    videoBackground.removeAttribute("autoplay");
    videoBackground.pause();
  } else {
    videoBackground.setAttribute("autoplay", "");
    videoBackground.play();
  }
}

// Run once on load
handleReducedMotion();

// Listen for changes in motion preference
prefersReducedMotion.addEventListener("change", handleReducedMotion);

// Run accessibility tests immediately
(async () => {
  if (accessibilityTester) {
    await accessibilityTester.runTests();
  }
})();

// Simple navigation setup
const hamburger = document.getElementById("hamburger-btn");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close-btn");

// Set up explain button handler
const explainButton = document.getElementById("explain");
if (explainButton) {
  explainButton.addEventListener("click", () => {
    const issues = accessibilityTester.getIssues();

    showModal(issues);
  });
}

if (hamburger) {
  hamburger.addEventListener("click", () => {
    menu.classList.add("active");
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });
}

// Add layout configuration
const layout = new Rive.Layout({
  fit: Rive.Fit.FitWidth,
  alignment: Rive.Alignment.Center,
});

// Update Rive initialization
try {
  const riveInstance = new Rive({
    src: "/assets/bear.riv",
    canvas: document.getElementById("rive-canvas"),
    layout: layout,
    autoplay: true,
    onLoad: () => {
      // Prevent a blurry canvas by using the device pixel ratio
      riveInstance.resizeDrawingSurfaceToCanvas();
    },
  });

  // Add resize handler
  window.addEventListener(
    "resize",
    () => {
      riveInstance.resizeDrawingSurfaceToCanvas();
    },
    false
  );
} catch (error) {
  console.error("Error loading Rive animation:", error);
}
