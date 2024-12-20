import { issueManager } from "../../core/issueManager.js";
import { ERROR_MESSAGES } from "../../constants/errorMessages.js";
import { getElement, getAttribute } from "../../utils/domUtils.js";

export class AriaHiddenTest {
  static run() {
    const pageContent = getElement("body");
    if (!pageContent) return;

    const ariaHidden = getAttribute(pageContent, "aria-hidden");

    if (ariaHidden === "true") {
      console.log(ariaHidden);
      issueManager.addIssue(ERROR_MESSAGES.ARIA_HIDDEN);
      pageContent.style.visibility = "hidden";
      return;
    }
  }
}
