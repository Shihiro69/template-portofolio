/* ============================================================
   SECTION RENDERER — Skills
   Sprint 10: Optimized
   ============================================================ */

"use strict";

import { createElement } from "../utils/dom.js";
import { createSectionWrapper } from "../utils/renderer-helper.js";
import { createCard, getCardBody } from "../components/card.js";

function renderSkills(data, container) {

  const { content } = createSectionWrapper(data, "skills");

  const categories = data.data.categories;
  if (!categories?.length) return;

  const grid = createElement("div", { class: "skills__grid" });

  categories.forEach(category => {
    const card = createCard({ variant: "flat" });
    const body = getCardBody(card);  // zero DOM re-query

    body.appendChild(
      createElement("h3", { class: "skills__category-name", text: category.name })
    );

    const list = createElement("ul", { class: "skills__list" });

    category.items.forEach(skill => {
      const item = createElement("li", { class: "skills__item" });

      const info = createElement("div", { class: "skills__item-info" },
        createElement("span", { class: "skills__item-name", text: skill.name }),
        createElement("span", { class: "skills__item-level", text: skill.level + "%" })
      );

      const bar = createElement("div", { class: "skills__bar" });
      bar.appendChild(
        createElement("div", {
          class: "skills__bar-fill",
          style: { width: skill.level + "%" },
          role: "progressbar",
          "aria-valuenow": skill.level,
          "aria-valuemin": "0",
          "aria-valuemax": "100",
          "aria-label": skill.name + " proficiency"
        })
      );

      item.appendChild(info);
      item.appendChild(bar);
      list.appendChild(item);
    });

    body.appendChild(list);
    grid.appendChild(card);
  });

  content.appendChild(grid);
  container.appendChild(content);
}

export { renderSkills };
