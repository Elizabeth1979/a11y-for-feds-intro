// src/tests/accessibility/langTest.js

import { issueManager } from "../../core/issueManager";
import { ERROR_MESSAGES } from "../../constants/errorMessages";
import { getAllElements, getAttribute } from "../../utils/domUtils";
import { generateRandomText, shouldProcessElement, processTextNodes } from "../../utils/testUtils";

export class LangTest {
  static run() {
    if (getAttribute(document.documentElement, "lang") !== "en") {
      const elements = getAllElements("*");
      elements.forEach((element) => {
        if (shouldProcessElement(element)) {
          processTextNodes(element, generateRandomText);
        }
      });

      issueManager.addIssue(ERROR_MESSAGES.INCORRECT_LANG);
    }
  }
}
