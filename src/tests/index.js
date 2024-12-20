// src/tests/index.js
// Export all accessibility tests
import { AriaHiddenTest } from "./accessibility/ariaHiddenTest.js";
import { AltTextTest } from "./accessibility/altTextTest.js";
import { ButtonLabelTest } from "./accessibility/buttonLabelTest.js";
import { FormLabelTest } from "./accessibility/formLabelTest.js";
import { LangTest } from "./accessibility/langTest.js";
// import { MotionTest } from "./accessibility/motionTest.js";

export const accessibilityTests = {
  AriaHiddenTest,
  LangTest,
  AltTextTest,
  FormLabelTest,
  ButtonLabelTest,
};

export async function runAllTests() {
  const results = [];

  for (const [testName, test] of Object.entries(accessibilityTests)) {
    if (typeof test.run === "function") {
      try {
        const result = await Promise.resolve(test.run());
        results.push({ testName, success: true, result });
      } catch (error) {
        results.push({ testName, success: false, error: error.message });
      }
    } else {
      results.push({ testName, success: false, error: "No run method" });
    }
  }

  return results;
}
