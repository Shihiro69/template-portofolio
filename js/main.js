/* ============================================================
   APPLICATION ENTRY POINT
   Sprint 4: Rendering Engine
   ============================================================
   File:    js/main.js
   Purpose: ES Module entry point. Bootstraps the app.
            Imported by index.html as type="module".
   Deps:    core/app.js
   ============================================================ */

"use strict";

import { app } from "./core/app.js";

/* ── Boot the application when DOM is ready ── */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => app.init());
} else {
  app.init();
}
