/* ============================================================
   SECTION RENDERER — Experience
   Sprint 10: Optimized
   ============================================================ */

"use strict";

import { createElement } from "../utils/dom.js";
import { sanitizeURL } from "../utils/sanitize.js";
import { createSectionWrapper } from "../utils/renderer-helper.js";
import { createBadge } from "../components/badge.js";

function renderExperience(data, container) {

  const { content } = createSectionWrapper(data, "experience");

  const items = data.data.items;
  if (!items?.length) return;

  const timeline = createElement("div", { class: "experience__timeline" });

  items.forEach((job) => {
    const entry = createElement("div", { class: "experience__entry" });

    entry.appendChild(
      createElement("div", { class: "experience__marker" },
        createElement("div", { class: "experience__dot" })
      )
    );

    const body = createElement("div", { class: "experience__body" });
    const header = createElement("div", { class: "experience__header" });

    header.appendChild(
      createElement("h3", { class: "experience__role", text: job.role })
    );

    const meta = createElement("div", { class: "experience__meta" });

    const companyEl = job.url
      ? createElement("a", {
          class: "experience__company",
          href: sanitizeURL(job.url),
          target: "_blank",
          rel: "noopener noreferrer",
          text: job.company
        })
      : createElement("span", { class: "experience__company", text: job.company });

    meta.appendChild(companyEl);

    if (job.type) {
      meta.appendChild(createBadge({ label: job.type, mode: "outline" }));
    }

    header.appendChild(meta);

    const details = createElement("div", { class: "experience__details" },
      createElement("span", { class: "experience__period", text: job.period })
    );

    if (job.location) {
      details.appendChild(
        createElement("span", { class: "experience__location", text: job.location })
      );
    }

    header.appendChild(details);
    body.appendChild(header);

    if (job.description) {
      body.appendChild(
        createElement("p", { class: "experience__description", text: job.description })
      );
    }

    if (job.highlights?.length) {
      const hl = createElement("ul", { class: "experience__highlights" });
      job.highlights.forEach(h => {
        hl.appendChild(
          createElement("li", { class: "experience__highlight", text: h })
        );
      });
      body.appendChild(hl);
    }

    if (job.tech?.length) {
      const tags = createElement("div", { class: "experience__tech" });
      job.tech.forEach(t => {
        tags.appendChild(createBadge({ label: t }));
      });
      body.appendChild(tags);
    }

    entry.appendChild(body);
    timeline.appendChild(entry);
  });

  content.appendChild(timeline);
  container.appendChild(content);
}

export { renderExperience };
