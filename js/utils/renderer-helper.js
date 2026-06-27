/* ============================================================
   RENDERER HELPER
   Sprint 10: Performance Audit & Refactoring
   ============================================================
   File:    js/utils/renderer-helper.js
   Purpose: Shared boilerplate for section renderers.
            Eliminates duplicated wrapper/heading logic
            across all 10 section renderers.
   Deps:    ../utils/dom.js, ../components/section-title.js
   ============================================================ */

"use strict";

import { createElement } from "./dom.js";
import { createSectionTitle } from "../components/section-title.js";

/**
 * Create a standard section content wrapper with optional heading.
 * Replaces the duplicated pattern found in every section renderer.
 *
 * @param {object} config — Section config from portfolioData.sections[]
 * @param {string} [cssClass] — Section-specific CSS class for the wrapper
 * @returns {{ content: HTMLElement, sectionId: string }}
 */
function createSectionWrapper(config, cssClass = "") {
  const classes = [];
  if (cssClass) classes.push(cssClass);
  classes.push("l-section__content");

  const content = createElement("div", { class: classes });

  if (config.heading) {
    const headingId = config.id + "-heading";
    content.appendChild(createSectionTitle({
      heading: config.heading,
      id: headingId,
      subtitle: config.data?.intro || ""
    }));
  }

  return { content };
}

export { createSectionWrapper };
