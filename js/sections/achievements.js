/* ============================================================
   SECTION RENDERER — Achievements
   Sprint 10: Optimized
   ============================================================ */

"use strict";

import { createElement } from "../utils/dom.js";
import { createSectionWrapper } from "../utils/renderer-helper.js";
import { createCard, getCardBody } from "../components/card.js";
import { createBadge } from "../components/badge.js";

function renderAchievements(data, container) {

  const { content } = createSectionWrapper(data, "achievements");

  const items = data.data.items;
  if (!items?.length) return;

  const grid = createElement("div", { class: "achievements__grid" });

  items.forEach(item => {
    const children = [];

    if (item.year) {
      children.push(createBadge({ label: item.year, variant: "accent" }));
    }

    if (item.description) {
      children.push(
        createElement("p", { class: "c-card__text", text: item.description })
      );
    }

    const card = createCard({
      variant: "flat",
      title: item.title,
      children: children,
      links: item.url ? [{ label: item.organization, url: item.url, variant: "secondary" }] : []
    });

    if (!item.url && item.organization) {
      const body = getCardBody(card);
      const meta = createElement("div", { class: "achievements__org", text: item.organization });
      const textEl = body.querySelector(".c-card__text");
      if (textEl) {
        body.insertBefore(meta, textEl);
      } else {
        body.appendChild(meta);
      }
    }

    grid.appendChild(card);
  });

  content.appendChild(grid);
  container.appendChild(content);
}

export { renderAchievements };
