/* ============================================================
   COMPONENT FACTORY — Card
   Sprint 5: Reusable Components
   ============================================================
   Deps: ../utils/dom.js, ../utils/sanitize.js
   ============================================================ */

"use strict";

import { createElement } from "../utils/dom.js";
import { sanitizeURL } from "../utils/sanitize.js";

/**
 * Create a Card component.
 *
 * @param {object} options
 * @param {string} [options.tag="div"] — Wrapper tag (use "a" or "button" for interactive cards)
 * @param {string} [options.variant] — "flat" | "elevated" | "bordered" | "compact"
 * @param {object} [options.image] — { src, alt, ratio }
 * @param {string} [options.category] — Category badge text
 * @param {string} [options.title] — Card title
 * @param {string} [options.text] — Body text
 * @param {string[]} [options.tags] — Tag strings
 * @param {object[]} [options.links] — [{ label, url, variant }]
 * @param {string} [options.href] — If tag is "a"
 * @param {Node[]} [options.children] — Custom body children
 * @param {object} [options.attrs] — Extra attributes
 * @returns {HTMLElement}
 */
function createCard(options = {}) {
  const {
    tag = "div",
    variant = "",
    image = null,
    category = "",
    title = "",
    text = "",
    tags = [],
    links = [],
    href = "",
    children = [],
    attrs = {}
  } = options;

  const classes = ["c-card"];
  if (variant) classes.push("c-card--" + variant);

  const cardAttrs = { ...attrs, class: classes };
  if (tag === "a" && href) {
    cardAttrs.href = sanitizeURL(href);
    cardAttrs.target = attrs.target || "_blank";
    cardAttrs.rel = attrs.rel || "noopener noreferrer";
  }

  const card = createElement(tag, cardAttrs);

  // Image
  if (image) {
    const imgWrapClasses = ["c-card__image"];
    if (image.ratio) imgWrapClasses.push("c-card__image--ratio-" + image.ratio);

    card.appendChild(createElement("div", { class: imgWrapClasses },
      createElement("img", {
        src: sanitizeURL(image.src),
        alt: image.alt || title,
        loading: "lazy"
      })
    ));
  }

  // Body (built via createElement nesting — no innerHTML, no re-query)
  const body = createElement("div", { class: "c-card__body" });

  if (category) {
    body.appendChild(createElement("span", { class: ["c-badge", "c-badge--accent"], text: category }));
  }

  if (title) {
    body.appendChild(createElement("h3", { class: "c-card__title", text: title }));
  }

  if (text) {
    body.appendChild(createElement("p", { class: "c-card__text", text: text }));
  }

  // Tags (batch append for single reflow)
  if (tags.length) {
    const tagContainer = createElement("div", { class: "c-card__tags" });
    tags.forEach(t => {
      tagContainer.appendChild(createElement("span", { class: ["c-badge", "c-badge--sm"], text: t }));
    });
    body.appendChild(tagContainer);
  }

  // Links
  if (links.length) {
    const linkContainer = createElement("div", { class: "c-card__links" });
    links.forEach(link => {
      linkContainer.appendChild(createElement("a", {
        class: ["c-btn", "c-btn--sm", link.variant === "primary" ? "c-btn--primary" : "c-btn--secondary"],
        href: sanitizeURL(link.url),
        target: link.target || "_blank",
        rel: "noopener noreferrer",
        text: link.label
      }));
    });
    body.appendChild(linkContainer);
  }

  // Custom children
  if (children.length) {
    children.forEach(child => {
      if (child) body.appendChild(child);
    });
  }

  card.appendChild(body);

  // Expose body element to avoid DOM re-querying
  card._bodyEl = body;
  return card;
}

/**
 * Get the card body element (zero DOM re-query).
 * @param {HTMLElement} card — Element returned by createCard()
 * @returns {HTMLElement}
 */
function getCardBody(card) {
  return card._bodyEl || card.querySelector(".c-card__body");
}

export { createCard, getCardBody };
