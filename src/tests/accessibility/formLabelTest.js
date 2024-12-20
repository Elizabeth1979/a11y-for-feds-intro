import { issueManager } from "../../core/issueManager";
import { ERROR_MESSAGES } from "../../constants/errorMessages";
import { getElement } from "../../utils/domUtils";

export class FormLabelTest {
  static run() {
    const emailLabel = getElement("#email-label");

    if (!emailLabel) {
      return;
    }

    if (emailLabel.getAttribute("for") !== "email") {
      emailLabel.style.display = "none";
      issueManager.addIssue(ERROR_MESSAGES.MISSING_FORM_LABEL);
    }
  }
}
