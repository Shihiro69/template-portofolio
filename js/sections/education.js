/* ============================================================
   SECTION RENDERER — Education
   Sprint 10: Optimized
   ============================================================ */

"use strict";

import { createElement } from "../utils/dom.js";
import { createSectionWrapper } from "../utils/renderer-helper.js";
import { createCard } from "../components/card.js";
import { createBadge } from "../components/badge.js";

function renderEducation(data, container) {

  const { content } = createSectionWrapper(data, "education");

  const items = data.data.items;
  if (!items?.length) return;

  items.forEach(item => {
    const children = [];

    if (item.period || item.gpa) {
      const details = createElement("div", { class: "education__details" });
      if (item.period) {
        details.appendChild(createBadge({ label: item.period, mode: "outline" }));
      }
      if (item.gpa) {
        details.appendChild(createBadge({ label: "GPA: " + item.gpa, variant: "accent" }));
      }
      children.push(details);
    }

    if (item.description) {
      children.push(
        createElement("p", { class: "c-card__text", text: item.description })
      );
    }

    if (item.achievements?.length) {
      const list = createElement("ul", { class: "education__achievements" });
      item.achievements.forEach(a => {
        list.appendChild(
          createElement("li", { class: "education__achievement", text: a })
        );
      });
      children.push(list);
    }

    const subtitle = item.location
      ? item.institution + " — " + item.location
      : item.institution;

    const card = createCard({
      title: item.degree,
      text: subtitle,
      children: children
    });

    content.appendChild(card);
  });

  container.appendChild(content);
}

export { renderEducation };
