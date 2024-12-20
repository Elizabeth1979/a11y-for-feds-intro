// src/utils/testUtils.js

/**
 * Generate random text for language test
 */
export const generateRandomText = (text) => {
  return text
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map(() => String.fromCharCode(33 + Math.floor(Math.random() * 94)))
        .join("")
    )
    .join(" ");
};

/**
 * Check if element should be processed for text scrambling
 */
export const shouldProcessElement = (element) => {
  return (
    element.tagName !== "BUTTON" &&
    element.tagName !== "INPUT" &&
    element.tagName !== "SVG" &&
    element.tagName !== "SCRIPT" &&
    element.id !== "error-modal" &&
    !element.closest("#error-modal")
  );
};

/**
 * Process text nodes for scrambling
 */
export const processTextNodes = (element, processor) => {
  element.childNodes.forEach((child) => {
    if (child.nodeType === Node.TEXT_NODE && child.textContent.trim().length > 0) {
      child.textContent = processor(child.textContent);
    }
  });
};

/**
 * Create error card element
 */
export const createErrorCard = (issue) => {
  const card = document.createElement("div");
  card.className = "error-card";
  card.innerHTML = `
      <h3>${issue.title}</h3>
      <p>${issue.description}</p>
      <a href="${issue.link}" target="_blank">Learn more</a>
    `;
  return card;
};

/**
 * Check if reduced motion is preferred
 */
export const prefersReducedMotion = () => {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Create placeholder text element for missing images
 */
export const createImagePlaceholder = (imageSrc) => {
  const placeholder = document.createElement("img");
  placeholder.src = "http://missing-alt-text-error.invalid";
  placeholder.width = 484;
  placeholder.height = 531;
  placeholder.style.border = "1px solid red";
  placeholder.style.margin = "1em 0";
  placeholder.appendChild(document.createTextNode(imageSrc));
  return placeholder;
};
