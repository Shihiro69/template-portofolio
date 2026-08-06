/* ============================================================
   THEME TOGGLE
   Phase 6: Light/Dark Theme Toggle
   ============================================================
   File:    js/components/theme-toggle.js
   Purpose: Handles theme switching between dark and light.
            Persists preference in localStorage.
            Respects system prefers-color-scheme on first visit.
            Falls back to meta.theme from data.js.
   ============================================================ */

"use strict";

const THEME_KEY = "portfolio-theme";
const DARK = "dark";
const LIGHT = "light";

/**
 * Initialize theme management.
 * Call once from app.js init().
 * @param {string} defaultTheme — from portfolioData.meta.theme
 */
function initTheme(defaultTheme = "dark") {
  const resolved = resolveTheme(defaultTheme);
  applyTheme(resolved);
  setupToggleButton();
  setupSystemListener();
}

/**
 * Resolve theme: localStorage > system preference > default.
 */
function resolveTheme(defaultTheme) {
  /* 1. User explicitly set preference */
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === LIGHT || stored === DARK) return stored;

  /* 2. System preference */
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return DARK;
  if (window.matchMedia("(prefers-color-scheme: light)").matches) return LIGHT;

  /* 3. Default from data.js */
  return defaultTheme === LIGHT ? LIGHT : DARK;
}

/**
 * Apply theme to document.
 */
function applyTheme(theme) {
  const html = document.documentElement;

  /* Add transition class */
  html.classList.add("theme-transitioning");

  /* Set attribute */
  html.setAttribute("data-theme", theme);

  /* Remove transition class after animation completes */
  setTimeout(() => {
    html.classList.remove("theme-transitioning");
  }, 350);
}

/**
 * Toggle between dark and light.
 */
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === LIGHT ? DARK : LIGHT;

  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
  updateToggleButton(next);
}

/**
 * Setup the toggle button in the header.
 */
function setupToggleButton() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const current = document.documentElement.getAttribute("data-theme") || DARK;
  updateToggleButton(current);

  btn.addEventListener("click", toggleTheme);

  /* Keyboard support */
  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleTheme();
    }
  });
}

/**
 * Update button ARIA state and icon.
 */
function updateToggleButton(theme) {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const isDark = theme === DARK;
  btn.setAttribute("aria-pressed", String(!isDark));
  btn.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");

  /* SVG icons for sun/moon */
  btn.innerHTML = isDark
    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
         <circle cx="12" cy="12" r="5"/>
         <line x1="12" y1="1" x2="12" y2="3"/>
         <line x1="12" y1="21" x2="12" y2="23"/>
         <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
         <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
         <line x1="1" y1="12" x2="3" y2="12"/>
         <line x1="21" y1="12" x2="23" y2="12"/>
         <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
         <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
       </svg>`
    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
         <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
       </svg>`;
}

/**
 * Listen for system theme changes.
 */
function setupSystemListener() {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    /* Only auto-switch if user hasn't set a preference */
    if (!localStorage.getItem(THEME_KEY)) {
      applyTheme(e.matches ? DARK : LIGHT);
      updateToggleButton(e.matches ? DARK : LIGHT);
    }
  });
}

export { initTheme };
