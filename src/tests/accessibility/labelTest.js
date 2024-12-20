import { issueManager } from "../../core/issueManager";
import { ERROR_MESSAGES } from "../../constants/errorMessages";
import { getAllElements, getElement, getAttribute } from "../../utils/domUtils";

export class LabelTest {
  static run() {
    const inputs = getAllElements('input:not([type="hidden"])');
    let hasIssues = false;

    inputs.forEach((input) => {
      const inputId = getAttribute(input, "id");
      const associatedLabel = getElement(`label[for="${inputId}"]`);

      if (!inputId || !associatedLabel) {
        hasIssues = true;
        // Remove placeholder when label connection is missing
        input.placeholder = "";
      }
    });

    if (hasIssues) {
      issueManager.addIssue(ERROR_MESSAGES.MISSING_LABEL);
    }
  }
}
