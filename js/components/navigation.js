/* ============================================================
   COMPONENT — Navigation
   Sprint 7: UX Enhancements
   ============================================================
   File:    js/components/navigation.js
   Purpose: Navigation controller — mobile toggle, scroll spy,
            active link highlighting, smooth scrolling.
   Deps:    ../core/events.js
   ============================================================ */

"use strict";

import { events } from "../core/events.js";
import { trapFocus, announce } from "../utils/a11y.js";

class Navigation {
  constructor() {
    this.nav = document.getElementById("primary-navigation");
    this.toggle = document.getElementById("nav-toggle");
    this.navList = null;    // set after nav is rendered
    this.navLinks = [];
    this.sections = [];
    this.activeLink = null;
    this.isOpen = false;
    this.observer = null;
    this._unTrapFocus = null;   // focus trap cleanup function
    this.observerOptions = {
      rootMargin: "-80px 0px -60% 0px",
      threshold: 0
    };
  }

  /**
   * Initialize navigation after the header has been rendered.
   * Called by app.js after _renderHeader completes.
   */
  init() {
    this.navList = document.querySelector(".c-nav__list");
    if (!this.navList) return;

    this.navLinks = Array.from(this.navList.querySelectorAll(".c-nav__link"));
    this._collectSections();
    this._setupToggle();
    this._setupSmoothScroll();
    this._setupScrollSpy();
    this._addHamburgerIcon();
  }

  /* ── Collect section targets from nav links ── */
  _collectSections() {
    this.sections = this.navLinks
      .map(link => {
        const href = link.getAttribute("href");
        if (!href || !href.startsWith("#")) return null;
        return document.querySelector(href);
      })
      .filter(Boolean);
  }

  /* ── Mobile menu toggle ── */
  _setupToggle() {
    if (!this.toggle) return;

    this.toggle.addEventListener("click", () => {
      this.isOpen = !this.isOpen;
      this.navList.classList.toggle("is-open", this.isOpen);
      this.toggle.setAttribute("aria-expanded", this.isOpen);
      this.toggle.classList.toggle("is-active", this.isOpen);

      // Prevent body scroll when menu is open
      document.body.style.overflow = this.isOpen ? "hidden" : "";

      // Announce state change to screen readers
      if (this.isOpen) {
        announce("Navigation menu opened. Use Escape to close.", "assertive");
        this._unTrapFocus = trapFocus(this.navList);
      } else {
        announce("Navigation menu closed.");
        if (this._unTrapFocus) {
          this._unTrapFocus();
          this._unTrapFocus = null;
        }
      }

      events.emit("nav:toggle", { isOpen: this.isOpen });
    });

    // Close on Escape
    this._onKeydown = (e) => {
      if (e.key === "Escape" && this.isOpen) {
        this._closeMenu();
      }
    };
    document.addEventListener("keydown", this._onKeydown);

    // Close on nav link click (mobile)
    this.navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (this.isOpen) this._closeMenu();
      });
    });

    // Close on outside click
    this._onOutsideClick = (e) => {
      if (this.isOpen &&
          this.nav &&
          this.toggle &&
          !this.nav.contains(e.target) &&
          !this.toggle.contains(e.target)) {
        this._closeMenu();
      }
    };
    document.addEventListener("click", this._onOutsideClick);
  }

  _closeMenu() {
    this.isOpen = false;
    this.navList.classList.remove("is-open");
    this.toggle.classList.remove("is-active");
    this.toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";

    // Release focus trap
    if (this._unTrapFocus) {
      this._unTrapFocus();
      this._unTrapFocus = null;
    }

    // Return focus to the toggle button
    if (this.toggle) {
      this.toggle.focus();
    }

    events.emit("nav:toggle", { isOpen: false });
  }

  /* ── Smooth scrolling (with offset for sticky header) ── */
  _setupSmoothScroll() {
    this.navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        if (!targetId || !targetId.startsWith("#")) return;

        const target = document.querySelector(targetId);
        if (!target) return;

        const headerHeight = document.getElementById("site-header")?.offsetHeight || 0;
        const offset = headerHeight + 16; // extra breathing room

        const top = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ top, behavior: "smooth" });

        // Update URL hash without jumping
        history.pushState(null, null, targetId);
      });
    });
  }

  /* ── Scroll Spy via IntersectionObserver ── */
  _setupScrollSpy() {
    if (!("IntersectionObserver" in window)) return;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this._setActiveBySection(entry.target);
        }
      });
    }, this.observerOptions);

    this.sections.forEach(section => {
      if (section) this.observer.observe(section);
    });
  }

  _setActiveBySection(section) {
    const targetId = "#" + section.id;
    const link = this.navLinks.find(l => l.getAttribute("href") === targetId);

    if (link && link !== this.activeLink) {
      // Remove previous active
      if (this.activeLink) {
        this.activeLink.classList.remove("is-active");
      }

      // Set new active
      link.classList.add("is-active");
      this.activeLink = link;

      events.emit("nav:activeChange", {
        target: link.dataset.navTarget || section.id,
        sectionId: section.id
      });
    }
  }

  /* ── Animated hamburger icon ── */
  _addHamburgerIcon() {
    if (!this.toggle) return;

    // Create three lines for the hamburger using createElement (no innerHTML)
    ["top", "middle", "bottom"].forEach(pos => {
      const line = document.createElement("span");
      line.className = "c-nav-toggle__line c-nav-toggle__line--" + pos;
      this.toggle.appendChild(line);
    });

    this.toggle.setAttribute("aria-label", "Toggle navigation menu");
    this.toggle.setAttribute("aria-expanded", "false");
    this.toggle.setAttribute("aria-controls", "primary-navigation");
  }

  /**
   * Clean up event listeners and observer.
   */
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }

    // Remove document-level listeners
    if (this._onKeydown) {
      document.removeEventListener("keydown", this._onKeydown);
      this._onKeydown = null;
    }
    if (this._onOutsideClick) {
      document.removeEventListener("click", this._onOutsideClick);
      this._onOutsideClick = null;
    }

    this.navLinks.forEach(link => {
      link.classList.remove("is-active");
    });

    this.activeLink = null;
    this.sections = [];
    this.navLinks = [];
  }
}

const navigation = new Navigation();

export { navigation, Navigation };
