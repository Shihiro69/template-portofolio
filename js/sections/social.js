/* ============================================================
   SECTION RENDERER — Social
   Sprint 10: Optimized
   ============================================================ */

"use strict";

import { createElement } from "../utils/dom.js";
import { createSectionWrapper } from "../utils/renderer-helper.js";
import { createCard } from "../components/card.js";

function renderSocial(data, container) {

  const { content } = createSectionWrapper(data, "social");

  const links = data.data.links;
  if (!links?.length) return;

  const grid = createElement("div", { class: "social__grid" });

  links.forEach(link => {
    const card = createCard({
      tag: "a",
      href: link.url,
      variant: "bordered",
      title: link.platform,
      text: link.username
    });

    // Add platform icon class
    card.classList.add("social__link");

    grid.appendChild(card);
  });

  content.appendChild(grid);
  container.appendChild(content);
}

export { renderSocial };
