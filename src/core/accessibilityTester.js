import { issueManager } from "./issueManager.js";
import { runAllTests } from "../tests/index.js";

/**
 * Runs accessibility tests and keeps track of any issues found.
 *
 * This class is used in the main.js script to check for accessibility issues
 * on the page, and in the modal.js script to display any found issues to
 * the user through the UI.
 */
class AccessibilityTester {
  constructor() {
    if (AccessibilityTester.instance) {
      return AccessibilityTester.instance;
    }
    AccessibilityTester.instance = this;
  }

  async runTests() {
    try {
      // Clear any existing issues before running tests
      issueManager.clearIssues();

      // Run all accessibility tests
      await runAllTests();

      const issues = issueManager.getCurrentIssues();
    } catch (error) {
      throw error;
    }
  }

  hasIssues() {
    try {
      const hasIssues = issueManager.hasIssues();
      return hasIssues;
    } catch (error) {
      return false;
    }
  }

  getIssues() {
    try {
      const issues = issueManager.getCurrentIssues();
      return issues;
    } catch (error) {
      return [];
    }
  }
}

// Create a singleton instance
export const accessibilityTester = new AccessibilityTester();
