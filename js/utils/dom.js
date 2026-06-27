/* ============================================================
   DOM UTILITY
   Sprint 4: Rendering Engine
   ============================================================
   File:    js/utils/dom.js
   Purpose: DOM creation & query helpers. Eliminates
            repetitive document.createElement boilerplate.
   Deps:    None (zero dependencies)
   ============================================================ */

"use strict";

/**
 * Create a DOM element with attributes, properties, and children.
 *
 * @param {string} tag — HTML tag name
 * @param {object} [attrs] — Attributes & properties map
 *   Special keys:
 *     class    → className (string or array)
 *     dataset  → data-* attributes (object)
 *     style    → inline styles (object)
 *     html     → innerHTML (use sparingly, escape first)
 *     text     → textContent
 * @param {...(Node|string)} [children] — Child nodes or text strings
 * @returns {HTMLElement}
 */
function createElement(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);

  for (const [key, value] of Object.entries(attrs)) {
    if (value === null || value === undefined) continue;

    switch (key) {
      case "class":
        if (Array.isArray(value)) {
          el.className = value.filter(Boolean).join(" ");
        } else {
          el.className = value;
        }
        break;

      case "dataset":
        Object.entries(value).forEach(([k, v]) => {
          if (v !== null && v !== undefined) {
            el.dataset[k] = v;
          }
        });
        break;

      case "style":
        Object.entries(value).forEach(([k, v]) => {
          if (v !== null && v !== undefined) {
            el.style[k] = v;
          }
        });
        break;

      case "html":
        el.innerHTML = value;
        break;

      case "text":
        el.textContent = value;
        break;

      default:
        if (key.startsWith("on")) {
          // Event handlers
          const event = key.slice(2).toLowerCase();
          el.addEventListener(event, value);
        } else if (key === "htmlFor") {
          el.setAttribute("for", value);
        } else if (typeof value === "boolean") {
          if (value) el.setAttribute(key, "");
          else el.removeAttribute(key);
        } else {
          el.setAttribute(key, value);
        }
    }
  }

  appendChildren(el, children);
  return el;
}

/**
 * Append children to a parent node.
 * Strings are converted to text nodes.
 * @param {Node} parent
 * @param {Array} children
 */
function appendChildren(parent, children) {
  for (const child of children) {
    if (child === null || child === undefined) continue;

    if (typeof child === "string") {
      parent.appendChild(document.createTextNode(child));
    } else if (Array.isArray(child)) {
      appendChildren(parent, child);
    } else if (child instanceof Node) {
      parent.appendChild(child);
    }
  }
}

/**
 * Batch-append children using DocumentFragment.
 * Single回流—all children inserted in one paint frame.
 * @param {Node} parent
 * @param {Node[]} nodes
 */
function batchAppend(parent, nodes) {
  const frag = document.createDocumentFragment();
  for (const node of nodes) {
    if (node) frag.appendChild(node);
  }
  parent.appendChild(frag);
}

/**
 * Query a single element.
 * @param {string} selector
 * @param {Element} [context=document]
 * @returns {Element|null}
 */
function qs(selector, context = document) {
  return context.querySelector(selector);
}

/**
 * Query all matching elements.
 * @param {string} selector
 * @param {Element} [context=document]
 * @returns {NodeList}
 */
function qsa(selector, context = document) {
  return context.querySelectorAll(selector);
}

/**
 * Empty an element (remove all children).
 * @param {Element} el
 */
function empty(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

/**
 * Render content into a container (clears first).
 * @param {Element} container
 * @param {Node|Node[]|string} content
 */
function render(container, content) {
  empty(container);
  appendChildren(container, Array.isArray(content) ? content : [content]);
}

/**
 * Yields control to the browser event loop.
 * Use between batches of DOM writes to avoid jank.
 * @returns {Promise<void>}
 */
function runAsync(fn) {
  return new Promise(resolve => {
    requestAnimationFrame(() => {
      fn();
      resolve();
    });
  });
}

export { createElement, appendChildren, batchAppend, qs, qsa, empty, render, runAsync };
