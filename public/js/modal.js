import { accessibilityTester } from "../../src/core/accessibilityTester.js";

export function showModal(issues = []) {
  const modal = document.getElementById("error-modal");
  const errorMessages = document.getElementById("error-messages");

  if (!errorMessages || !modal) {
    return;
  }

  try {
    // Lock page scroll
    document.body.style.overflow = "hidden";

    // Clear existing content
    errorMessages.innerHTML = "";

    if (issues.length === 0) {
      const clearMessage = `
        <div class="error-card">
          <h3>All Clear! 🎉 ✨</h3>
          <p>No accessibility issues to show! 🎊</p>
        </div>
      `;
      errorMessages.insertAdjacentHTML("beforeend", clearMessage);

      if (typeof confetti === "function") {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"],
        });
      }
    } else {
      issues.forEach((issue, index) => {
        const cardHTML = `
          <div class="error-card">
            <h3>${issue.title || "Issue Found"}</h3>
            <p>${issue.description || ""}</p>
            ${issue.link ? `<a href="${issue.link}" target="_blank">Learn more</a>` : ""}
          </div>
        `;
        errorMessages.insertAdjacentHTML("beforeend", cardHTML);
      });
    }

    // Ensure the modal is a dialog element
    if (!(modal instanceof HTMLDialogElement)) {
      return;
    }

    // Show the modal
    if (!modal.open) {
      modal.showModal();
    }
  } catch (error) {
    console.error("Error showing modal:", error);
    // Or implement some fallback behavior
  }
}

export function initializeModal() {
  const modal = document.getElementById("error-modal");
  const closeModal = document.getElementById("close-modal");

  function closeModalHandler() {
    if (modal) {
      modal.close();
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    }
  }

  if (closeModal) {
    closeModal.onclick = closeModalHandler;
  }

  if (modal) {
    modal.onclick = (e) => {
      if (e.target === modal) {
        closeModalHandler();
      }
    };
  }
}
