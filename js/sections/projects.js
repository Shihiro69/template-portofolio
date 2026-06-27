/* ============================================================
   SECTION RENDERER — Projects
   Sprint 10: Optimized
   ============================================================ */

"use strict";

import { createElement } from "../utils/dom.js";
import { createSectionWrapper } from "../utils/renderer-helper.js";
import { createCard } from "../components/card.js";

function renderProjects(data, container) {

  const { content } = createSectionWrapper(data, "projects");

  const items = data.data.items;
  if (!items?.length) return;

  const grid = createElement("div", { class: "projects__grid" });

  items.forEach(project => {
    const card = createCard({
      variant: project.featured ? "elevated" : "",
      image: project.image ? {
        src: project.image,
        alt: project.imageAlt || project.title,
        ratio: "16-9"
      } : null,
      category: project.category,
      title: project.title,
      text: project.description,
      tags: project.tech || [],
      links: [
        ...(project.liveUrl ? [{ label: "Live Demo", url: project.liveUrl, variant: "primary" }] : []),
        ...(project.url    ? [{ label: "Source Code", url: project.url, variant: "secondary" }] : [])
      ]
    });

    grid.appendChild(card);
  });

  content.appendChild(grid);
  container.appendChild(content);
}

export { renderProjects };
