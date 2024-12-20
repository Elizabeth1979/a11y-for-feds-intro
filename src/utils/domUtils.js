// src/utils/domUtils.js

/**
 * Get a single element by selector
 */
export function getElement(selector) {
  try {
    const element = document.querySelector(selector);
    return element;
  } catch (error) {
    console.error(`domUtils: Error getting element with selector ${selector}:`, error);
    return null;
  }
}

/**
 * Get multiple elements by selector
 */
export function getAllElements(selector) {
  try {
    const elements = Array.from(document.querySelectorAll(selector));
    return elements;
  } catch (error) {
    console.error(`domUtils: Error getting elements with selector ${selector}:`, error);
    return [];
  }
}

/**
 * Check if element has attribute
 */
export function hasAttribute(element, attribute) {
  if (!element) {
    console.warn('domUtils: Element is null or undefined');
    return false;
  }
  const has = element.hasAttribute(attribute);
  return has;
}

/**
 * Get attribute value
 */
export function getAttribute(element, attribute) {
  if (!element) {
    console.warn('domUtils: Element is null or undefined');
    return null;
  }
  const value = element.getAttribute(attribute);
  return value;
}

/**
 * Set attribute value
 */
export function setAttribute(element, attribute, value) {
  if (!element) {
    console.warn('domUtils: Element is null or undefined');
    return;
  }
  element.setAttribute(attribute, value);
}

/**
 * Remove attribute
 */
export function removeAttribute(element, attribute) {
  if (!element) {
    console.warn('domUtils: Element is null or undefined');
    return;
  }
  element.removeAttribute(attribute);
}

/**
 * Add class to element
 */
export function addClass(element, className) {
  if (!element) {
    console.warn('domUtils: Element is null or undefined');
    return;
  }
  element.classList.add(className);
}

/**
 * Remove class from element
 */
export function removeClass(element, className) {
  if (!element) {
    console.warn('domUtils: Element is null or undefined');
    return;
  }
  element.classList.remove(className);
}

/**
 * Toggle class on element
 */
export function toggleClass(element, className) {
  if (!element) {
    console.warn('domUtils: Element is null or undefined');
    return;
  }
  element.classList.toggle(className);
}

/**
 * Check if element has class
 */
export function hasClass(element, className) {
  if (!element) {
    console.warn('domUtils: Element is null or undefined');
    return false;
  }
  const has = element.classList.contains(className);
  return has;
}

/**
 * Create element with class name
 */
export function createElement(tag, className = "") {
  const element = document.createElement(tag);
  if (className) {
    addClass(element, className);
  }
  return element;
}

/**
 * Create a placeholder for an image
 * @param {string} src - Original image source
 * @returns {Element} - Placeholder element
 */
export function createImagePlaceholder(src) {
  const placeholder = document.createElement('div');
  placeholder.className = 'image-placeholder';
  placeholder.textContent = src;
  return placeholder;
}
