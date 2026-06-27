/* ============================================================
   COMPONENT FACTORY — Badge
   Sprint 10: Optimized
   ============================================================ */

"use strict";

import { createElement } from "../utils/dom.js";

/**
 * Create a Badge component.
 * @param {object} options
 * @param {string} options.label
 * @param {string} [options.variant] — "primary" | "secondary" | "accent" | "success" | "warning" | "error" | "info"
 * @param {string} [options.mode] — "filled" | "outline" | "subtle"
 * @param {string} [options.size] — "sm" | "lg"
 * @param {boolean} [options.dot] — Dot indicator
 * @param {object} [options.attrs]
 * @returns {HTMLElement}
 */
function createBadge(options = {}) {
  const {
    label = "",
    variant = "primary",
    mode = "filled",
    size = "",
    dot = false,
    attrs = {}
  } = options;

  const classes = ["c-badge", "c-badge--" + variant];
  if (mode !== "filled") classes.push("c-badge--" + mode);
  if (size) classes.push("c-badge--" + size);
  if (dot) classes.push("c-badge--dot");

  const children = [];

  if (dot) {
    children.push(createElement("span", { class: "c-badge__dot" }));
  }

  // textContent is safe — no need for escapeHTML
  children.push(label);

  return createElement("span", { ...attrs, class: classes }, ...children);
}

export { createBadge };
