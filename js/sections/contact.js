/* ============================================================
   SECTION RENDERER — Contact
   Sprint 10: Optimized
   ============================================================ */

"use strict";

import { createElement } from "../utils/dom.js";
import { createSectionWrapper } from "../utils/renderer-helper.js";
import { createCard } from "../components/card.js";
import { createButton } from "../components/button.js";

function renderContact(data, container) {

  const { content } = createSectionWrapper(data, "contact");

  const children = [];

  if (data.data.email) {
    children.push(
      createElement("a", {
        class: "contact__email",
        href: "mailto:" + encodeURIComponent(data.data.email),
        text: data.data.email
      })
    );
  }

  if (data.data.location) {
    children.push(
      createElement("p", { class: "contact__location", text: data.data.location })
    );
  }

  if (data.data.availability) {
    const av = data.data.availability;
    const statusClass = av.status === "available"
      ? "contact__status--available"
      : "contact__status--unavailable";

    children.push(
      createElement("div", { class: ["contact__status", statusClass] },
        createElement("span", { class: "contact__status-dot" }),
        createElement("span", { class: "contact__status-text", text: av.label })
      )
    );

    if (av.description) {
      children.push(
        createElement("p", { class: "contact__availability-text", text: av.description })
      );
    }
  }

  if (data.data.cta) {
    children.push(
      createButton({
        label: data.data.cta.label,
        href: data.data.cta.action,
        variant: "primary",
        size: "lg"
      })
    );
  }

  const card = createCard({
    variant: "elevated",
    children: children
  });

  content.appendChild(card);
  container.appendChild(content);
}

export { renderContact };
