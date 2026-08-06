/* ============================================================
   SECTION RENDERER — Hero
   Sprint 13: Premium Hero Redesign
   ============================================================
   DOM Structure:
     .hero-wrapper (flex column, center)
       .hero (2-col grid)
         .hero__text    (greeting, h1 name, role, description)
         .hero__image   (profile card)
       .hero__actions   (CTAs, centered, FULL WIDTH below grid)
       .hero__stats     (stats, centered, FULL WIDTH below CTAs)

   Unlike other sections, Hero does NOT use createSectionWrapper
   to avoid the duplicate <h2> heading. All hero markup is
   self-contained here.
   ============================================================ */

"use strict";

import { createElement } from "../utils/dom.js";
import { sanitizeURL } from "../utils/sanitize.js";
import { createButton } from "../components/button.js";

function renderHero(data, container) {

  /* ── Background orbs (CSS-only animation, always visible) ── */
  const bgOrbs = createElement("div", { class: "hero__bg-orbs" },
    createElement("div", { class: "hero__orb hero__orb--1" }),
    createElement("div", { class: "hero__orb hero__orb--2" }),
    createElement("div", { class: "hero__orb hero__orb--3" })
  );
  container.appendChild(bgOrbs);

  /* ── Subtle dot grid overlay ── */
  const gridDots = createElement("div", { class: "hero__grid-dots" });
  container.appendChild(gridDots);

  /* ── Build outer wrapper ── */
  const wrapper = createElement("div", { class: "hero-wrapper" });

  /* ── Two-column grid: text | image ── */
  const grid = createElement("div", { class: "hero" });

  /* ── LEFT: Text Column ── */

  const textCol = createElement("div", { class: "hero__text" });

  /* Extract greeting + name from the combined heading.
     e.g. "Hi, I'm Yukitsune" → greeting "Hi, I'm" + name "Yukitsune"
     If heading doesn't match the pattern, greeting stays empty. */
  const fullHeading = data.heading || "";
  let greeting = "";
  let name = fullHeading;
  const greetingMatch = fullHeading.match(/^(Hi|Hello|Hey|Greetings),?\s*(I'm|I am)\s*/i);
  if (greetingMatch) {
    greeting = greetingMatch[0].trim();
    name = fullHeading.slice(greetingMatch[0].length).trim();
    if (!name) name = fullHeading; // fallback if nothing after prefix
  }

  /* Greeting line (small, subtle — above the name) */
  if (greeting) {
    textCol.appendChild(
      createElement("span", { class: "hero__greeting", text: greeting })
    );
  }

  /* H1 — Name (large gradient heading) */
  if (name) {
    textCol.appendChild(
      createElement("h1", { class: "hero__heading", id: "hero-heading", text: name })
    );
  }

  /* Role */
  if (data.data.role) {
    textCol.appendChild(
      createElement("p", { class: "hero__role", text: data.data.role })
    );
  }

  /* Description / Tagline */
  if (data.data.tagline) {
    textCol.appendChild(
      createElement("p", { class: "hero__tagline", text: data.data.tagline })
    );
  }

  grid.appendChild(textCol);

  /* ── RIGHT: Image Column ── */

  if (data.data.image) {
    const imgCol = createElement("div", { class: "hero__image" });
    imgCol.appendChild(
      createElement("img", {
        src: sanitizeURL(data.data.image),
        alt: data.data.imageAlt || "",
        loading: "eager"
      })
    );
    grid.appendChild(imgCol);
  }

  wrapper.appendChild(grid);

  /* ── CTA Buttons (below grid, full width, centered) ── */

  if (data.data.actions?.length) {
    const actions = createElement("div", { class: "hero__actions" });
    data.data.actions.forEach(action => {
      actions.appendChild(createButton({
        label: action.label,
        variant: action.variant,
        href: action.target.startsWith("http") ? action.target : "#section-" + action.target,
        size: "lg"
      }));
    });
    wrapper.appendChild(actions);
  }

  /* ── Stats (below CTAs, full width, centered) ── */

  if (data.data.stats?.length) {
    const stats = createElement("div", { class: "hero__stats" });
    data.data.stats.forEach(stat => {
      stats.appendChild(
        createElement("div", { class: "hero__stat" },
          createElement("span", { class: "hero__stat-value", text: stat.value }),
          createElement("span", { class: "hero__stat-label", text: stat.label })
        )
      );
    });
    wrapper.appendChild(stats);
  }

  container.appendChild(wrapper);

  /* ── JS Enhancement: Mouse parallax on orbs ── */
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const heroSection = document.getElementById("section-hero");
    const orbs = container.querySelectorAll(".hero__orb");

    if (heroSection && orbs.length) {
      heroSection.addEventListener("mousemove", (e) => {
        const rect = heroSection.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        orbs.forEach((orb, i) => {
          const factor = (i + 1) * 15;
          orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
        });
      });

      /* Reset on mouse leave */
      heroSection.addEventListener("mouseleave", () => {
        orbs.forEach(orb => {
          orb.style.transform = "translate(0, 0)";
        });
      });
    }
  }
}

export { renderHero };
