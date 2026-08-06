/* ============================================================
   SECTION RENDERER — Projects
   Phase 4: Enhanced with bento grid & glass
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
    /* Determine variants */
    const variants = ["glass"];
    if (project.featured) variants.push("elevated");

    const card = createCard({
      variant: variants.join(" "),
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

    /* Wrap featured cards for bento grid span */
    if (project.featured) {
      const wrapper = createElement("div", { class: "projects__item--featured" });
      wrapper.appendChild(card);
      grid.appendChild(wrapper);
    } else {
      grid.appendChild(card);
    }
  });

  content.appendChild(grid);
  container.appendChild(content);
}

export { renderProjects };
