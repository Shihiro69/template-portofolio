/* ============================================================
   COMPONENT FACTORY — Section Title
   Sprint 5: Reusable Components
   ============================================================
   Deps: ../utils/dom.js, ../utils/sanitize.js
   ============================================================ */

"use strict";

import { createElement } from "../utils/dom.js";

/**
 * Create a Section Title component (heading + optional subtitle).
 *
 * @param {object} options
 * @param {string} options.heading — Section heading text
 * @param {string} [options.level=2] — HTML heading level (1-6)
 * @param {string} [options.id] — Element ID (used by aria-labelledby)
 * @param {string} [options.subtitle] — Subtitle text
 * @param {string} [options.align] — "center"
 * @param {string} [options.decoration] — "wide" | "accent" | "" (default)
 * @param {object} [options.attrs] — Extra attributes on the heading
 * @returns {HTMLElement} — The heading group wrapper
 */
function createSectionTitle(options = {}) {
  const {
    heading = "",
    level = 2,
    id = "",
    subtitle = "",
    align = "",
    decoration = "",
    attrs = {}
  } = options;

  const headingClasses = ["section__heading"];
  if (align) headingClasses.push("section__heading--" + align);
  if (decoration) headingClasses.push("section__heading--" + decoration);
  if (subtitle) headingClasses.push("section__heading--with-subtitle");

  const headingTag = "h" + Math.min(Math.max(level, 1), 6);

  const headingAttrs = { ...attrs, class: headingClasses, text: heading };
  if (id) headingAttrs.id = id;

  const headingEl = createElement(headingTag, headingAttrs);

  const group = createElement("div", { class: "section__heading-group" });
  group.appendChild(headingEl);

  if (subtitle) {
    const subtitleClasses = ["section__subtitle"];
    if (align) subtitleClasses.push("section__heading--" + align);
    group.appendChild(
      createElement("p", { class: subtitleClasses, text: subtitle })
    );
  }

  return group;
}

export { createSectionTitle };
