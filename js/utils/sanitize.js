/* ============================================================
   SANITIZE UTILITY
   Sprint 4: Rendering Engine
   ============================================================
   File:    js/utils/sanitize.js
   Purpose: XSS prevention — escapes user-facing strings
            before injection into DOM.
   Deps:    None (zero dependencies)
   ============================================================ */

"use strict";

/**
 * Escape HTML special characters to prevent XSS injection.
 * NOTE: Only needed for `innerHTML` or HTML attribute values.
 *       `textContent` assignments (the default in createElement `text:`)
 *       are inherently safe and do NOT require escaping.
 * @param {string} str — Raw string
 * @returns {string} — HTML-safe string
 */
function escapeHTML(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g,  "&amp;")
    .replace(/</g,  "&lt;")
    .replace(/>/g,  "&gt;")
    .replace(/"/g,  "&quot;")
    .replace(/'/g,  "&#039;");
}

/**
 * Sanitize a URL — only allow http, https, mailto, tel, and relative paths.
 * Returns a safe fallback for dangerous URLs.
 * @param {string} url
 * @param {string} [fallback="#"] — Fallback if URL is unsafe
 * @returns {string}
 */
function sanitizeURL(url, fallback = "#") {
  if (typeof url !== "string") return fallback;

  const trimmed = url.trim();

  // Allow relative paths and anchors
  if (/^(\/|\.\/|\.\.\/|#)/.test(trimmed)) return trimmed;

  // Allow safe protocols
  if (/^(https?:|mailto:|tel:)/i.test(trimmed)) return trimmed;

  return fallback;
}

export { escapeHTML, sanitizeURL };
