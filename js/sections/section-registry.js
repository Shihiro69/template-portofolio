/* ============================================================
   SECTION REGISTRY
   Sprint 4: Rendering Engine
   ============================================================
   File:    js/sections/section-registry.js
   Purpose: Maps section `type` to its renderer function.
            Adding a new section = adding one entry here.
            No other file needs to change.
   Deps:    All section renderer modules
   ============================================================ */

"use strict";

import { renderHero }         from "./hero.js";
import { renderAbout }        from "./about.js";
import { renderSkills }       from "./skills.js";
import { renderExperience }   from "./experience.js";
import { renderProjects }     from "./projects.js";
import { renderAchievements } from "./achievements.js";
import { renderEducation }    from "./education.js";
import { renderCertificates } from "./certificates.js";
import { renderContact }      from "./contact.js";
import { renderSocial }       from "./social.js";

/**
 * Section registry.
 * Keys match `data.js` section `type` fields.
 * Values are renderer functions: (sectionConfig, containerElement) => void
 */
const sectionRegistry = {
  hero:         renderHero,
  about:        renderAbout,
  skills:       renderSkills,
  experience:   renderExperience,
  projects:     renderProjects,
  achievements: renderAchievements,
  education:    renderEducation,
  certificates: renderCertificates,
  contact:      renderContact,
  social:       renderSocial
};

export { sectionRegistry };
