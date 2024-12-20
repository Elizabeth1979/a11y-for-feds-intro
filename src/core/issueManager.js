/**
 * A singleton class that acts as a central store for accessibility issues.
 *
 * This class maintains a shared list of accessibility issues that can be:
 * - Updated by accessibility tests when issues are found
 * - Retrieved by the UI components to display issues to the user
 */
class IssueManager {
  constructor() {
    if (IssueManager.instance) {
      return IssueManager.instance;
    }
    this.issues = [];
    IssueManager.instance = this;
  }

  addIssue(issue) {
    this.issues.push(issue);
  }

  clearIssues() {
    this.issues = [];
  }

  getCurrentIssues() {
    return this.issues;
  }

  hasIssues() {
    return this.issues.length > 0;
  }
}

// Create a singleton instance
export const issueManager = new IssueManager();
