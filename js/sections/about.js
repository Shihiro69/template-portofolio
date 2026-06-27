/* ============================================================
   SECTION RENDERER — About
   Sprint 10: Optimized
   ============================================================ */

"use strict";

import { createElement } from "../utils/dom.js";
import { sanitizeURL } from "../utils/sanitize.js";
import { createSectionWrapper } from "../utils/renderer-helper.js";

function renderAbout(data, container) {

  const { content } = createSectionWrapper(data, "about");

  // Image
  if (data.data.image) {
    const imgWrap = createElement("div", { class: "about__image" });
    imgWrap.appendChild(
      createElement("img", {
        src: sanitizeURL(data.data.image),
        alt: data.data.imageAlt || "",
        loading: "lazy"
      })
    );
    content.appendChild(imgWrap);
  }

  // Text Column
  const textCol = createElement("div", { class: "about__text" });

  if (data.data.description?.length) {
    data.data.description.forEach(paragraph => {
      textCol.appendChild(
        createElement("p", { class: "about__paragraph", text: paragraph })
      );
    });
  }

  // Highlights
  if (data.data.highlights?.length) {
    const highlightList = createElement("dl", { class: "about__highlights" });
    data.data.highlights.forEach(item => {
      highlightList.appendChild(
        createElement("div", { class: "about__highlight" },
          createElement("dt", { class: "about__highlight-label", text: item.label }),
          createElement("dd", { class: "about__highlight-value", text: item.value })
        )
      );
    });
    textCol.appendChild(highlightList);
  }

  content.appendChild(textCol);
  container.appendChild(content);
}

export { renderAbout };
