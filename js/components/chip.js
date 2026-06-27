/* ============================================================
   COMPONENT FACTORY — Chip
   Sprint 5: Reusable Components
   ============================================================
   Deps: ../utils/dom.js, ../utils/sanitize.js
   ============================================================ */

"use strict";

import { createElement } from "../utils/dom.js";

/**
 * Create a Chip component.
 *
 * @param {object} options
 * @param {string} options.label — Chip text
 * @param {boolean} [options.active] — Selected/active state
 * @param {boolean} [options.dismissible] — Show dismiss button
 * @param {Function} [options.onDismiss] — Dismiss callback
 * @param {Function} [options.onClick] — Click handler (makes chip interactive)
 * @param {string} [options.icon] — Icon text/emoji
 * @param {string} [options.avatar] — Avatar image URL
 * @param {object} [options.attrs] — Extra attributes
 * @returns {HTMLElement}
 */
function createChip(options = {}) {
  const {
    label = "",
    active = false,
    dismissible = false,
    onDismiss = null,
    onClick = null,
    icon = "",
    avatar = "",
    attrs = {}
  } = options;

  const classes = ["c-chip"];
  if (active) classes.push("c-chip--active");
  if (dismissible) classes.push("c-chip--dismissible");
  if (onClick) classes.push("c-chip--clickable");

  const chipAttrs = { ...attrs, class: classes };
  if (onClick) chipAttrs.tabindex = "0";
  if (active) chipAttrs["aria-pressed"] = "true";

  const children = [];

  if (avatar) {
    children.push(
      createElement("img", { class: "c-chip__avatar", src: avatar, alt: "" })
    );
  }

  if (icon) {
    children.push(
      createElement("span", { class: "c-chip__icon", text: icon })
    );
  }

  children.push(
    createElement("span", { class: "c-chip__label", text: label })
  );

  if (dismissible) {
    children.push(
      createElement("button", {
        class: "c-chip__dismiss",
        type: "button",
        "aria-label": "Remove " + label,
        onclick: (event) => {
          event.stopPropagation();
          if (onDismiss) onDismiss(label, event);
        },
        text: "×"
      })
    );
  }

  const chip = createElement("span", chipAttrs, ...children);

  if (onClick) {
    chip.addEventListener("click", (event) => onClick(label, event));
    chip.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onClick(label, event);
      }
    });
  }

  return chip;
}

export { createChip };
