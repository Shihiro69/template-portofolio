/* ============================================================
   ACCESSIBILITY UTILITY
   Sprint 9: Accessibility & SEO Optimization
   ============================================================
   File:    js/utils/a11y.js
   Purpose: Focus management, keyboard trap, focus-ring
            helpers, and screen reader announcements.
   Deps:    None (zero dependencies)
   ============================================================ */

"use strict";

/**
 * Get all focusable elements within a container.
 */
function getFocusableElements(container) {
  const selector = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled]):not([type=hidden])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "[tabindex]:not([tabindex='-1'])",
    "details summary",
    "audio[controls]",
    "video[controls]",
    "[contenteditable]:not([contenteditable=false])"
  ].join(",");

  return Array.from(container.querySelectorAll(selector));
}

/**
 * Trap focus within a container (for modals, mobile nav, etc.).
 * @param {Element} container
 * @returns {Function} — Cleanup function (restores previous focus)
 */
function trapFocus(container) {
  const focusable = getFocusableElements(container);
  if (focusable.length === 0) return () => {};

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  // Remember previously focused element
  const previousFocus = document.activeElement;

  // Focus first element immediately
  first.focus();

  const handler = (event) => {
    if (event.key !== "Tab") return;

    /* Shift+Tab on first → wrap to last */
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    /* Tab on last → wrap to first */
    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  document.addEventListener("keydown", handler);

  // Return cleanup function
  return () => {
    document.removeEventListener("keydown", handler);
    if (previousFocus && typeof previousFocus.focus === "function") {
      previousFocus.focus();
    }
  };
}

/**
 * Announce a message to screen readers via an aria-live region.
 * Creates the region if it doesn't exist.
 * @param {string} message
 * @param {string} [priority="polite"] — "polite" or "assertive"
 */
function announce(message, priority = "polite") {
  let region = document.getElementById("a11y-announcer");

  if (!region) {
    region = document.createElement("div");
    region.id = "a11y-announcer";
    region.setAttribute("aria-live", priority);
    region.setAttribute("aria-atomic", "true");
    region.className = "u-sr-only";
    document.body.appendChild(region);
  }

  // Clear first, then set (triggers re-announcement)
  region.textContent = "";
  requestAnimationFrame(() => {
    region.textContent = message;
  });
}

/**
 * Move focus to an element safely.
 * Falls back to the document body.
 * @param {string|Element} target — Selector or element
 */
function focusElement(target) {
  const el = typeof target === "string" ? document.querySelector(target) : target;
  if (el && typeof el.focus === "function") {
    el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: false });
  }
}

export { getFocusableElements, trapFocus, announce, focusElement };
