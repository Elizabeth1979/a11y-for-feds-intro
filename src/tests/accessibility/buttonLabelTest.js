import { issueManager } from "../../core/issueManager.js";
import { ERROR_MESSAGES } from "../../constants/errorMessages.js";
import { getElement, hasAttribute } from "../../utils/domUtils.js";

export class ButtonLabelTest {
  static run() {
    const modal = getElement("#error-modal");
    const closeButton = getElement("#close-modal");

    if (!closeButton || !modal) {
      console.error("Modal elements not found");
      return;
    }

    // Check if button has aria-label and it's not empty
    const ariaLabel = closeButton.getAttribute("aria-label");

    if (!ariaLabel || ariaLabel.trim() === "") {
      // Change button text to "button" and hide it if no aria-label
      closeButton.textContent = "button";
      // Prevent closing via Esc key
      modal.addEventListener("cancel", (event) => {
        event.preventDefault();
      });

      // Add issue to the issues list
      issueManager.addIssue(ERROR_MESSAGES.MISSING_BUTTON_LABEL);
    }
  }
}
