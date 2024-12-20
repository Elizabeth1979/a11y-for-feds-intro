try {
} catch (error) {
  console.error("Error in theme.js:", error);
}

export function initializeTheme() {
  
  const themeToggle = document.getElementById("theme-toggle");
  const root = document.documentElement;
  const moonIcon = document.getElementById("moon-icon");
  const sunIcon = document.getElementById("sun-icon");

  function setTheme(isDark) {
    if (isDark) {
      root.classList.remove("light-theme");
      root.classList.add("dark-theme");
    } else {
      root.classList.remove("dark-theme");
      root.classList.add("light-theme");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
    moonIcon.style.display = isDark ? "block" : "none";
    sunIcon.style.display = isDark ? "none" : "block";
  }

  // Initialize theme
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme === "dark" || (savedTheme === null && prefersDark);
  setTheme(initialTheme);

  // Theme toggle handler
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = root.classList.contains("dark-theme");
      setTheme(!isDark);
    });
  } else {
    console.error("Theme toggle button not found!");
  }
}
