/* ============================================================
   COMPONENT FACTORY — Tag
   Sprint 5: Reusable Components
   ============================================================
   Deps: ../utils/dom.js, ../utils/sanitize.js
   ============================================================ */

"use strict";

import { createElement } from "../utils/dom.js";

/**
 * Create a Tag component.
 *
 * @param {object} options
 * @param {string} options.label — Tag text
 * @param {string} [options.variant] — "primary" | "secondary" | "accent" | "success" | "warning" | "error" | "info"
 * @param {string} [options.icon] — Icon text/emoji
 * @param {number} [options.count] — Numeric count badge
 * @param {object} [options.attrs] — Extra attributes
 * @returns {HTMLElement}
 */
function createTag(options = {}) {
  const {
    label = "",
    variant = "",
    icon = "",
    count = null,
    attrs = {}
  } = options;

  const classes = ["c-tag"];
  if (variant) classes.push("c-tag--" + variant);

  const children = [];

  if (icon) {
    children.push(
      createElement("span", { class: "c-tag__icon", text: icon })
    );
  }

  children.push(
    createElement("span", { class: "c-tag__label", text: label })
  );

  if (count !== null && count !== undefined) {
    children.push(
      createElement("span", { class: "c-tag__count", text: String(count) })
    );
  }

  return createElement("span", { ...attrs, class: classes }, ...children);
}

/**
 * Create a Tag Group wrapper.
 *
 * @param {Node[]} tags — Array of tag elements
 * @param {object} [attrs] — Extra attributes on the group wrapper
 * @returns {HTMLElement}
 */
function createTagGroup(tags = [], attrs = {}) {
  return createElement("div", { ...attrs, class: ["c-tag-group", attrs.class].filter(Boolean).join(" ") }, ...tags);
}

export { createTag, createTagGroup };
