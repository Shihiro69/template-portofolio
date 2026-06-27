/* ============================================================
   SECTION RENDERER — Certificates
   Sprint 10: Optimized
   ============================================================ */

"use strict";

import { createElement } from "../utils/dom.js";
import { createSectionWrapper } from "../utils/renderer-helper.js";
import { createCard } from "../components/card.js";

function renderCertificates(data, container) {

  const { content } = createSectionWrapper(data, "certificates");

  const items = data.data.items;
  if (!items?.length) return;

  const grid = createElement("div", { class: "certificates__grid" });

  items.forEach(item => {
    const children = [];

    if (item.credentialId) {
      children.push(
        createElement("p", { class: "certificates__credential", text: "Credential ID: " + item.credentialId })
      );
    }

    const card = createCard({
      variant: "bordered",
      title: item.title,
      text: item.issuer,
      tags: [item.date],
      links: item.url ? [{ label: "View Credential", url: item.url, variant: "secondary" }] : [],
      children: children
    });

    grid.appendChild(card);
  });

  content.appendChild(grid);
  container.appendChild(content);
}

export { renderCertificates };
