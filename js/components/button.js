/* ============================================================
   COMPONENT FACTORY — Button
   Sprint 5: Reusable Components
   ============================================================
   Deps: ../utils/dom.js, ../utils/sanitize.js
   ============================================================ */

"use strict";

import { createElement } from "../utils/dom.js";
import { sanitizeURL } from "../utils/sanitize.js";

/**
 * Create a Button component.
 *
 * @param {object} options
 * @param {string} options.label — Button text
 * @param {string} [options.tag="a"] — "a", "button", or "span"
 * @param {string} [options.href] — URL (only for tag="a")
 * @param {string} [options.variant="primary"] — "primary" | "secondary" | "accent" | "outline" | "ghost" | "danger"
 * @param {string} [options.size] — "sm" | "lg" | "icon"
 * @param {boolean} [options.block] — Full width
 * @param {boolean} [options.disabled] — Disabled state
 * @param {string} [options.type] — Button type (submit, reset, button). Default "button"
 * @param {Function} [options.onClick] — Click handler
 * @param {object} [options.attrs] — Extra attributes
 * @param {string} [options.icon] — Icon text/emoji
 * @param {boolean} [options.iconAfter] — Place icon after text
 * @returns {HTMLElement}
 */
function createButton(options = {}) {
  const {
    label = "",
    tag = "a",
    href = "#",
    variant = "primary",
    size = "",
    block = false,
    disabled = false,
    type = "button",
    onClick = null,
    attrs = {},
    icon = "",
    iconAfter = false
  } = options;

  const classes = ["c-btn", "c-btn--" + variant];
  if (size) classes.push("c-btn--" + size);
  if (block) classes.push("c-btn--block");
  if (disabled) classes.push("c-btn--disabled");

  const btnAttrs = { ...attrs, class: classes };

  if (tag === "a") {
    btnAttrs.href = sanitizeURL(href);
    if (href.startsWith("http")) {
      btnAttrs.target = attrs.target || "_blank";
      btnAttrs.rel = attrs.rel || "noopener noreferrer";
    }
  }

  if (tag === "button") {
    btnAttrs.type = type;
    if (disabled) btnAttrs.disabled = true;
  }

  if (onClick) {
    btnAttrs.onclick = onClick;
  }

  if (disabled && tag !== "button") {
    btnAttrs["aria-disabled"] = "true";
    btnAttrs.tabindex = "-1";
  }

  const children = [];

  if (icon && !iconAfter) {
    children.push(createElement("span", { class: "c-btn__icon", text: icon }));
  }

  if (label) {
    children.push(createElement("span", { class: "c-btn__label", text: label }));
  }

  if (icon && iconAfter) {
    children.push(createElement("span", { class: "c-btn__icon c-btn__icon--after", text: icon }));
  }

  return createElement(tag, btnAttrs, ...children);
}

export { createButton };
