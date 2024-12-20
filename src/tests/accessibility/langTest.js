// src/tests/accessibility/langTest.js

import { issueManager } from "../../core/issueManager";
import { ERROR_MESSAGES } from "../../constants/errorMessages";
import { getAllElements, getAttribute } from "../../utils/domUtils";
import { generateRandomText, shouldProcessElement, processTextNodes } from "../../utils/testUtils";

export class LangTest {
  static originalElements = new Map();

  static run() {
    if (getAttribute(document.documentElement, "lang") !== "en") {
      const elements = getAllElements("*");
      elements.forEach((element) => {
        if (shouldProcessElement(element)) {
          // Store a clone of the element before scrambling
          this.originalElements.set(element, element.cloneNode(true));
          processTextNodes(element, generateRandomText);
        }
      });

      issueManager.addIssue(ERROR_MESSAGES.INCORRECT_LANG);
    }
  }
}
