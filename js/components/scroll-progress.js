/* ============================================================
   COMPONENT — Scroll Progress
   Sprint 7: UX Enhancements
   ============================================================
   File:    js/components/scroll-progress.js
   Purpose: Thin scroll progress bar at the top of the page.
            Updates on scroll via requestAnimationFrame for
            optimal performance.
   Deps:    None
   ============================================================ */

"use strict";

class ScrollProgress {
  constructor() {
    this.bar = null;
    this.ticking = false;
    this.boundUpdate = this._update.bind(this);
  }

  /**
   * Create and initialize the scroll progress indicator.
   * Should be called once after DOM is ready.
   */
  init() {
    // Create the progress bar element
    this.bar = document.createElement("div");
    this.bar.className = "c-scroll-progress";
    this.bar.setAttribute("role", "progressbar");
    this.bar.setAttribute("aria-valuemin", "0");
    this.bar.setAttribute("aria-valuemax", "100");
    this.bar.setAttribute("aria-valuenow", "0");
    this.bar.setAttribute("aria-label", "Page scroll progress");

    const fill = document.createElement("div");
    fill.className = "c-scroll-progress__fill";
    this.bar.appendChild(fill);

    document.body.prepend(this.bar);

    // Throttled scroll handler using requestAnimationFrame.
    // Save reference for cleanup in destroy().
    this._onScroll = () => {
      if (!this.ticking) {
        requestAnimationFrame(() => {
          this.boundUpdate();
          this.ticking = false;
        });
        this.ticking = true;
      }
    };

    window.addEventListener("scroll", this._onScroll, { passive: true });

    // Initial calculation
    this._update();
  }

  /**
   * Calculate and apply the scroll percentage.
   */
  _update() {
    if (!this.bar) return;

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;

    const fill = this.bar.firstElementChild;
    if (fill) {
      fill.style.transform = `scaleX(${percent / 100})`;
    }

    this.bar.setAttribute("aria-valuenow", Math.round(percent));
  }

  /**
   * Clean up.
   */
  destroy() {
    window.removeEventListener("scroll", this._onScroll);
    this._onScroll = null;

    if (this.bar && this.bar.parentNode) {
      this.bar.parentNode.removeChild(this.bar);
    }

    this.bar = null;
    this.ticking = false;
  }
}

const scrollProgress = new ScrollProgress();

export { scrollProgress, ScrollProgress };
