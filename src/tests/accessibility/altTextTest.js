import { issueManager } from "../../core/issueManager";
import { ERROR_MESSAGES } from "../../constants/errorMessages";
import { hasAttribute } from "../../utils/domUtils";
import { createImagePlaceholder } from "../../utils/testUtils";

export class AltTextTest {
  static run() {
    const image = document.querySelector("#image");

    if (!image) {
      return;
    }

    if (!hasAttribute(image, "alt") || image.alt.trim() === "") {
      const placeholder = createImagePlaceholder(image.src);
      image.parentNode.replaceChild(placeholder, image);
      issueManager.addIssue(ERROR_MESSAGES.MISSING_ALT);
    }
  }
}
