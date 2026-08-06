/* ============================================================
   SCROLL REVEAL ENGINE
   Phase 2: Universal Scroll Animations
   ============================================================
   File:    js/utils/animate.js
   Purpose: Single IntersectionObserver that powers all
            scroll-reveal animations across every section.
            Observes elements with .animate-on-scroll class
            (added automatically by renderer-helper.js).

            ZERO changes needed to section renderers.
            ZERO dependencies.

   Behavior:
   - When 15% of .animate-on-scroll is visible, adds .is-visible
   - Direct children stagger via CSS custom property --stagger-index
   - Respects prefers-reduced-motion — skips entirely
   - Unobserves after reveal (frees memory)
   ============================================================ */

"use strict";

let revealObserver = null;
let isReducedMotion = false;

/**
 * Initialize scroll reveal observer.
 * Call once from app.js. All sections automatically observed.
 */
function initScrollReveal() {

  /* Check user prefers reduced motion — skip if true */
  isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (isReducedMotion) return;

  /* Build IntersectionObserver */
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el = entry.target;

        /* Mark as visible */
        el.classList.add("is-visible");

        /* Assign stagger indices to direct children */
        const children = el.children;
        for (let i = 0; i < children.length; i++) {
          children[i].style.setProperty("--stagger-index", i);
        }

        /* Free memory — no longer need to observe */
        revealObserver.unobserve(el);
      });
    },
    {
      root: null,              // viewport
      rootMargin: "0px 0px -40px 0px",  // trigger 40px before element enters
      threshold: 0.1           // 10% visibility threshold
    }
  );

  /* Observe all elements with .animate-on-scroll */
  const targets = document.querySelectorAll(".animate-on-scroll");
  targets.forEach(el => revealObserver.observe(el));

  /* Also observe lazily — MutationObserver for dynamically added sections */
  setupMutationObserver();

  /* Listen for reduced motion changes */
  window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change", (e) => {
    if (e.matches) {
      destroyScrollReveal();
    }
  });
}

/**
 * Observe DOM changes — newly added .animate-on-scroll elements
 * get observed automatically. Handles dynamically rendered sections.
 */
function setupMutationObserver() {
  if (!revealObserver) return;

  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType !== Node.ELEMENT_NODE) return;

        /* Check the added node itself */
        if (node.classList && node.classList.contains("animate-on-scroll")) {
          revealObserver.observe(node);
        }

        /* Check descendants */
        if (node.querySelectorAll) {
          const nested = node.querySelectorAll(".animate-on-scroll");
          nested.forEach(el => revealObserver.observe(el));
        }
      });
    });
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
  });

  /* Store for cleanup */
  if (!initScrollReveal._mutationObserver) {
    initScrollReveal._mutationObserver = mutationObserver;
  }
}

/**
 * Destroy the observer and clean up.
 */
function destroyScrollReveal() {
  if (revealObserver) {
    revealObserver.disconnect();
    revealObserver = null;
  }

  if (initScrollReveal._mutationObserver) {
    initScrollReveal._mutationObserver.disconnect();
    initScrollReveal._mutationObserver = null;
  }

  /* Remove is-visible from all elements — show everything */
  document.querySelectorAll(".animate-on-scroll").forEach(el => {
    el.classList.add("is-visible");
  });
}

export { initScrollReveal, destroyScrollReveal };
