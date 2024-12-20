// src/tests/accessibility/motionTest.js

import { issueManager } from "../../core/issueManager";
import { ERROR_MESSAGES } from "../../constants/errorMessages";
import { prefersReducedMotion } from "../../utils/testUtils";
import { getAllElements, addClass } from "../../utils/domUtils";

export class MotionTest {
  static run() {
    if (prefersReducedMotion()) {
      // Check for elements with animations or transitions
      this.disableAnimations();
      issueManager.addIssue(ERROR_MESSAGES.REDUCED_MOTION);
    }
  }

  static disableAnimations() {
    // Add a class to disable animations globally
    addClass(document.documentElement, "reduce-motion");

    // Find all animated elements
    const animatedElements = getAllElements(
      [".card", ".menu", "[transition]", "[animation]"].join(",")
    );

    // Disable animations on these elements
    animatedElements.forEach((element) => {
      element.style.transition = "none";
      element.style.animation = "none";
    });
  }
}
