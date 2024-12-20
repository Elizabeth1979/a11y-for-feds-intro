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

    // Check if button has aria-label
    if (!hasAttribute(closeButton, "aria-label")) {
      // Hide the button if no aria-label
      closeButton.style.display = "none";

      // Remove click event listeners to prevent closing via button
      closeButton.replaceWith(closeButton.cloneNode(true));

      // Prevent closing via Esc key
      modal.addEventListener("cancel", (event) => {
        event.preventDefault();
      });

      // Add issue to the issues list
      issueManager.addIssue(ERROR_MESSAGES.MISSING_BUTTON_LABEL);
    }
  }
}
