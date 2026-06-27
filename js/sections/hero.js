/* ============================================================
   SECTION RENDERER — Hero
   Sprint 10: Optimized
   ============================================================ */

"use strict";

import { createElement } from "../utils/dom.js";
import { sanitizeURL } from "../utils/sanitize.js";
import { createSectionWrapper } from "../utils/renderer-helper.js";
import { createButton } from "../components/button.js";

function renderHero(data, container) {

  const { content } = createSectionWrapper(data, "hero");

  // Text Column
  const textCol = createElement("div", { class: "hero__text" });

  if (data.heading) {
    textCol.appendChild(
      createElement("h1", { class: "hero__heading", id: "hero-heading", text: data.heading })
    );
  }

  if (data.data.role) {
    textCol.appendChild(
      createElement("p", { class: "hero__role", text: data.data.role })
    );
  }

  if (data.data.tagline) {
    textCol.appendChild(
      createElement("p", { class: "hero__tagline", text: data.data.tagline })
    );
  }

  // CTA Actions
  if (data.data.actions?.length) {
    const actions = createElement("div", { class: "hero__actions" });
    data.data.actions.forEach(action => {
      actions.appendChild(createButton({
        label: action.label,
        variant: action.variant,
        href: "#" + action.target,
        size: "lg"
      }));
    });
    textCol.appendChild(actions);
  }

  // Stats
  if (data.data.stats?.length) {
    const stats = createElement("div", { class: "hero__stats" });
    data.data.stats.forEach(stat => {
      stats.appendChild(
        createElement("div", { class: "hero__stat" },
          createElement("span", { class: "hero__stat-value", text: stat.value }),
          createElement("span", { class: "hero__stat-label", text: stat.label })
        )
      );
    });
    textCol.appendChild(stats);
  }

  content.appendChild(textCol);

  // Image Column
  if (data.data.image) {
    const imgCol = createElement("div", { class: "hero__image" });
    imgCol.appendChild(
      createElement("img", {
        src: sanitizeURL(data.data.image),
        alt: data.data.imageAlt || "",
        loading: "eager"
      })
    );
    content.appendChild(imgCol);
  }

  container.appendChild(content);
}

export { renderHero };
