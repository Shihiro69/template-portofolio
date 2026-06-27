/* ============================================================
   APP CONTROLLER
   Sprint 4: Rendering Engine
   ============================================================
   File:    js/core/app.js
   Purpose: Application lifecycle controller. Reads
            portfolioData, iterates over sections, dispatches
            each to the correct renderer via section registry.
   Deps:    events.js, section-registry.js, dom.js
   ============================================================ */

"use strict";

import { events } from "./events.js";
import { sectionRegistry } from "../sections/section-registry.js";
import { createElement, qs, render, batchAppend } from "../utils/dom.js";
import { navigation } from "../components/navigation.js";
import { scrollProgress } from "../components/scroll-progress.js";

class App {
  constructor() {
    this.initialized = false;
  }

  /**
   * Initialize the application.
   */
  init() {

    if (this.initialized) {
      console.warn("[App] Already initialized. Skipping.");
      return;
    }

    if (typeof portfolioData === "undefined") {
      console.error("[App] portfolioData not found. Ensure data.js is loaded before app.js.");
      return;
    }

    events.emit("app:before-init", portfolioData);

    /* Inject design tokens from data.js into CSS */
    this._injectDesignTokens(portfolioData.meta);
    this._injectGoogleFonts(portfolioData.meta);

    this._renderHeader(portfolioData.site);
    this._renderSections(portfolioData.sections);
    this._renderFooter(portfolioData.footer);

    if (portfolioData.meta && portfolioData.meta.title) {
      document.title = portfolioData.meta.title;
    }

    /* Initialize UX components */
    this._initUX();

    this.initialized = true;
    events.emit("app:ready", portfolioData);

    console.log("[App] Initialization complete.");
  }

  /**
   * Destroy — clean up event listeners, observers, and memory.
   */
  destroy() {
    if (!this.initialized) return;

    navigation.destroy();
    scrollProgress.destroy();

    // Clean up header scroll listener
    if (this._scrollHandler) {
      window.removeEventListener("scroll", this._scrollHandler);
      this._scrollHandler = null;
    }

    // Remove header scroll class
    const header = document.getElementById("site-header");
    if (header) header.classList.remove("is-scrolled");

    this.initialized = false;
    events.emit("app:destroyed");
    console.log("[App] Destroyed.");
  }

  /* ── Design Token Injection ───────────── */
  /**
   * Read meta.design from data.js and set CSS custom properties
   * on :root, overriding variables.css defaults.
   */
  _injectDesignTokens(meta) {
    if (!meta?.design) return;

    const d = meta.design;
    const root = document.documentElement;

    if (d.primary) {
      root.style.setProperty("--color-primary-h", d.primary.h);
      root.style.setProperty("--color-primary-s", d.primary.s + "%");
      root.style.setProperty("--color-primary-l", d.primary.l + "%");
    }
    if (d.secondary) {
      root.style.setProperty("--color-secondary-h", d.secondary.h);
      root.style.setProperty("--color-secondary-s", d.secondary.s + "%");
      root.style.setProperty("--color-secondary-l", d.secondary.l + "%");
    }
    if (d.accent) {
      root.style.setProperty("--color-accent-h", d.accent.h);
      root.style.setProperty("--color-accent-s", d.accent.s + "%");
      root.style.setProperty("--color-accent-l", d.accent.l + "%");
    }
    if (d.fontHeading) {
      root.style.setProperty("--font-display", d.fontHeading);
    }
    if (d.fontBody) {
      root.style.setProperty("--font-sans", d.fontBody);
    }
  }

  /**
   * Load Google Fonts from meta.googleFonts URL.
   * Only injects if googleFonts string is non-empty.
   */
  _injectGoogleFonts(meta) {
    if (!meta?.googleFonts) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=" + meta.googleFonts;
    link.setAttribute("media", "print");
    link.onload = function () { this.media = "all"; };

    document.head.appendChild(link);
  }

  /* ── UX Initialization ─────────────────── */
  _initUX() {
    /* Scroll progress bar */
    scrollProgress.init();

    /* Navigation (scroll spy, smooth scroll, mobile menu) */
    navigation.init();

    /* Sticky header shadow on scroll */
    this._setupHeaderScrollEffect();
  }

  _setupHeaderScrollEffect() {
    const header = document.getElementById("site-header");
    if (!header) return;

    let ticking = false;

    this._scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          header.classList.toggle("is-scrolled", window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", this._scrollHandler, { passive: true });
  }

  /* ── Header ──────────────────────────── */
  _renderHeader(siteData) {
    if (!siteData) return;

    /* Logo */
    const logoContainer = qs("#site-logo");
    if (logoContainer) {
      render(logoContainer,
        createElement("a", {
          class: "c-logo__link",
          href: "#",
          "aria-label": "Go to top"
        },
          createElement("span", {
            class: "c-logo__text",
            text: (portfolioData.meta && portfolioData.meta.titleShort) || "AR"
          })
        )
      );
    }

    /* Navigation */
    const navContent = qs("#nav-content");
    if (navContent && siteData.navigation && siteData.navigation.length) {
      const list = createElement("ul", { class: "c-nav__list" });

      siteData.navigation.forEach(link => {
        list.appendChild(
          createElement("li", { class: "c-nav__item" },
            createElement("a", {
              class: "c-nav__link",
              href: "#section-" + link.target,
              text: link.label,
              dataset: { navTarget: link.target }
            })
          )
        );
      });

      render(navContent, list);
    }
  }

  /* ── Sections ────────────────────────── */
  _renderSections(sections) {
    if (!sections || !sections.length) return;

    let visibleIndex = 0;

    sections.forEach(config => {
      if (config.visible === false) return;

      const renderer = sectionRegistry[config.type];

      if (!renderer) {
        console.warn("[App] No renderer for section type: " + config.type);
        return;
      }

      const container = qs("#" + config.id + "-container");

      if (!container) {
        console.warn("[App] Container not found: " + config.id);
        return;
      }

      /* Alternate section backgrounds for visual rhythm */
      if (visibleIndex % 2 === 1) {
        container.classList.add("l-section--alt");
      }

      try {
        renderer(config, container);
      } catch (error) {
        console.error("[App] Error rendering section '" + config.id + "':", error);
      }

      visibleIndex++;
    });
  }

  /* ── Footer ──────────────────────────── */
  _renderFooter(footerData) {
    if (!footerData) return;

    const copyrightEl = qs("#footer-copyright");
    if (copyrightEl && footerData.copyright) {
      copyrightEl.textContent = footerData.copyright.text;
    }

    const linksEl = qs("#footer-links");
    if (linksEl && footerData.links?.length) {
      const linkElements = footerData.links.map(link =>
        createElement("a", {
          class: "c-footer__link",
          href: link.url,
          target: "_blank",
          rel: "noopener noreferrer",
          text: link.label
        })
      );

      // Batch append via DocumentFragment — single reflow
      batchAppend(linksEl, linkElements);
    }
  }
}

const app = new App();

export { app, App };
