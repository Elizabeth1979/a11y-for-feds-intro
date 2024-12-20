export const ERROR_MESSAGES = {
  ARIA_HIDDEN: {
    title: "aria-hidden set to true on the main content of the page",
    description:
      "When aria-hidden is set to true on the body element the entire content not 'visible' to a screen reader user !",
    link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden",
  },
  INCORRECT_LANG: {
    title: "Incorrect language attribute",
    description:
      'The "lang" attribute is not set to "en". If the language is not specified, the screen reader reads the document in the user\'s default language, resulting in a strange accent.',
    link: "https://www.w3.org/International/questions/qa-html-language-declarations",
  },
  MISSING_ALT: {
    title: "Missing Alt Text",
    description:
      "Add descriptive alt text to make the content accessible to screen readers using the alt decision tree.",
    link: "https://www.w3.org/WAI/tutorials/images/decision-tree/",
  },
  MISSING_LABEL: {
    title: "Label-Input Connection Missing",
    description:
      'Input and label must be connected using matching "id" and "for" attributes for proper accessibility.',
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label",
  },
  MISSING_BUTTON_LABEL: {
    title: "Missing Accessible Name on Close Button",
    description:
      "The close modal button must have an accessible name via aria-label to be perceivable by screen readers. The button has been hidden and modal closing has been disabled until an accessible name is provided.",
    link: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html",
  },
  REDUCED_MOTION: {
    title: "Reduced motion preference detected",
    description:
      "The user has a preference for reduced motion. Ensure that all animations are necessary and can be disabled.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
  },
};
