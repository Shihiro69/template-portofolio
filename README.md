# <img src="assets/icons/favicon.svg" alt="Logo" width="28"> Template Portofolio

> **A zero-dependency, production-ready portfolio template.**
> No build tools. No frameworks. Just HTML, CSS, and JavaScript.

<p align="center">
  <em>✨ Dark theme · Fully responsive · 100% customizable · WCAG AA · Keyboard navigable · 10 ready sections ✨</em>
</p>

<p align="center">
  <a href="#quick-start"><strong>Quick Start</strong></a> →
  <a href="#portfolio-owner-guide"><strong>Customize</strong></a> →
  <a href="#deployment">Deploy</a> →
  <a href="https://github.com/alexrivera/template-portofolio">Repository</a>
</p>

<br>

| | |
|---|---|
| **Performance** | 95+ Lighthouse · Zero reflows · DocumentFragment batching |
| **Accessibility** | WCAG 2.1 AA · Full keyboard nav · Screen reader support · `prefers-reduced-motion` |
| **Responsive** | 360px → 1920px · 7 breakpoints · Mobile-first |
| **SEO** | JSON-LD · Open Graph · Twitter Card · Sitemap · Canonical URL |
| **Browser** | Chrome · Firefox · Safari · Edge · All modern browsers |
| **Dependencies** | **Zero.** No npm, no Node.js, no build step |

<br>

---

# Why This Template?

### The Problem

Most portfolio templates require you to know React, Next.js, Webpack, or some build tool. If you just want to show your work, you shouldn't have to learn a framework first.

### Our Solution

**You edit ONE file.** Everything — your name, skills, projects, colors, fonts — lives in a single file called `data.js`.

- No HTML editing.
- No CSS editing.
- No JavaScript editing.
- No terminal commands (after download).
- No npm install.

### Who Is This For?

| User | What They Do |
|------|-------------|
| **Portfolio Owner** (90%) | Edit `data.js` to customize content, colors, fonts, sections |
| **Developer** (10%) | Extend with new sections, components, animations |

### Design Philosophy

| Principle | What It Means |
|-----------|---------------|
| **Single Source of Truth** | All content in `data.js` — nothing hardcoded anywhere else |
| **Separation of Concerns** | HTML (structure), CSS (style), JS (behavior) — never mixed |
| **Progressive Enhancement** | Works without JS, better with JS, best with modern APIs |
| **No Magic** | Everything explicit — no hidden abstractions, no auto-discovery |
| **Copy-Paste Friendly** | Add a new section by copy-pasting 20 lines |

<br>

---

# Quick Start

### Option 1: GitHub (Recommended)

1. Click the green **"Use this template"** button at the top of this repository.
2. Choose **"Create a new repository"**.
3. Name it `<your-username>.github.io` (that exact format).
4. Clone your new repository:

```bash
git clone https://github.com/<your-username>/<your-username>.github.io.git
cd <your-username>.github.io
```

5. Open [data.js](file:///c:/Users/rumah/OneDrive/Documents/template-portofolio/data.js) and start customizing!

6. Push your changes:

```bash
git add data.js
git commit -m "Personalize portfolio"
git push origin main
```

7. Visit `https://<your-username>.github.io` — your portfolio is live!

### Option 2: Download ZIP

1. Click the green **"Code"** button → **"Download ZIP"**
2. Extract the ZIP to any folder on your computer.
3. Double-click `index.html` to see it in your browser.
4. Open `data.js` in any text editor (Notepad, VS Code, etc.).
5. Customize, save, and refresh your browser.

### Option 3: Edit Directly in Browser (No Download)

1. Visit the repository on GitHub.
2. Open `data.js`.
3. Click the **✏️** (pencil) icon.
4. Make your changes.
5. Click **"Commit changes"**.

Your portfolio updates in ~2 minutes.

<br>

---

# Project Structure

```
template-portofolio/
│
├── 📄 index.html                  # The only HTML file — DO NOT EDIT (unless adding sections)
├── 📄 data.js                     # 🌟 THE ONLY FILE YOU NEED TO EDIT
│
├── 📁 css/                        # All stylesheets
│   ├── main.css                   #   CSS manifest (imports all other CSS files)
│   └── base/                      #   Design tokens, reset, typography, responsive, a11y
│   └── layout/                    #   Header, footer, section containers
│   └── components/                #   Card, button, badge, chip, tag styles
│   └── sections/                  #   One stylesheet per section type
│
├── 📁 js/                         # All JavaScript
│   ├── main.js                    #   App entry point
│   ├── core/                      #   App controller, event bus
│   ├── utils/                     #   DOM helpers, sanitizer, a11y utilities
│   ├── components/                #   Reusable UI component factories
│   └── sections/                  #   One renderer per section type
│
├── 📁 assets/                     # Images, icons, documents
│   └── icons/                     #   Favicon, Open Graph image
│
├── 📄 sitemap.xml                 # SEO sitemap
├── 📄 robots.txt                  # Search engine rules
├── 📄 site.webmanifest            # PWA manifest
└── 📄 PROJECT_BLUEPRINT.md        # Architecture specification (developers only)
```

### Folder: `data.js`

| | |
|---|---|
| **Purpose** | Stores EVERYTHING: your name, skills, projects, colors, social links, navigation. |
| **Portfolio Owner** | ✅ **YES — this is the only file you edit.** |
| **Developer** | Rarely — only when adding new section *types*. |

> [!TIP]
> If you only open one file, open `data.js`.

### Folder: `index.html`

| | |
|---|---|
| **Purpose** | The page structure — empty `<section>` containers. Content is filled by JavaScript. |
| **Portfolio Owner** | ❌ **NEVER.** Unless you are adding a brand-new section. |
| **Developer** | Only when adding a new section type (see [Adding a Section](#adding-a-new-section)). |

> [!WARNING]
> Do not type your name, bio, or any content into `index.html`. All content comes from `data.js`.

### Folder: `css/`

| | |
|---|---|
| **Purpose** | All visual styles — colors, fonts, spacing, layouts, responsive breakpoints. |
| **Portfolio Owner** | ❌ **NEVER.** Colors and fonts are configured in `data.js`. |
| **Developer** | When adding new section styles or new component variants. |

### Folder: `js/`

| | |
|---|---|
| **Purpose** | All application logic — rendering, navigation, scroll spy, section factories. |
| **Portfolio Owner** | ❌ **NEVER.** Everything is automatic. |
| **Developer** | When creating new sections, components, or features. |

### Folder: `assets/`

| | |
|---|---|
| **Purpose** | Static files — profile photo, resume PDF, favicon. |
| **Portfolio Owner** | ✅ **YES.** Replace images with your own. |
| **Developer** | No — unless adding new asset types. |

<br>

---

# How This Project Works

> [!NOTE]
> Understanding this is optional. If you're a Portfolio Owner, skip to the [Portfolio Owner Guide](#portfolio-owner-guide).

### The Data Flow

```
┌──────────────┐
│   data.js    │  ← You edit this
│  (all your   │
│   content)   │
└──────┬───────┘
       │  portfolioData object is read by...
       ▼
┌──────────────┐
│   app.js     │  ← Controller (you never touch this)
│  (reads the  │
│   sections)  │
└──────┬───────┘
       │  Each section is sent to...
       ▼
┌──────────────┐
│    section-  │  ← Registry (maps "hero" → renderHero, etc.)
│   registry   │
└──────┬───────┘
       │  The correct renderer function is called...
       ▼
┌──────────────┐
│  Section     │  ← Example: renderExperience()
│  Renderer    │     Builds DOM elements from data
└──────┬───────┘
       │  Section renderers use reusable...
       ▼
┌──────────────┐
│  Components  │  ← createCard(), createBadge(), etc.
│  (factories) │     Pure functions that return HTML elements
└──────┬───────┘
       │  Elements are inserted into...
       ▼
┌──────────────┐
│    Empty     │  ← The HTML section containers
│  <section>   │     (from index.html)
│  containers  │
└──────┬───────┘
       │  Browser renders...
       ▼
┌──────────────┐
│   🖥️ Your    │
│   Portfolio  │  ← Visible to the world
└──────────────┘
```

### I edit `data.js` → everything updates automatically. That's it.

<br>

---

# Portfolio Owner Guide

This is the section for people who want to customize their portfolio quickly. **You only need to edit one file:** `data.js`.

Open `data.js` in any text editor. Each section below shows you exactly what to change.

> [!IMPORTANT]
> **Before editing:** Make a copy of `data.js` as backup. Name it `data-backup.js`.
> If something breaks, restore your backup.

---

## 🎨 Your Identity

### Change Your Name

**Location:** `data.js` → `meta` block → `author`

```diff
  meta: {
-   author: "Alex Rivera",
+   author: "Jane Smith",
  }
```

**Result:** Your name appears in the browser tab, the JSON-LD metadata, and the logo initial.

**Also update:** `meta.title` (appears in browser tab and search results):

```diff
  meta: {
-   title: "Alex Rivera — Front-End Engineer & UI Architect",
+   title: "Jane Smith — UX Designer & Researcher",
  }
```

> [!TIP]
> Keep your title under 60 characters so it doesn't get cut off in Google search results.

---

### Change Your Role / Tagline

**Location:** `data.js` → `sections` → find `"type": "hero"` → `data.role`

```diff
  {
    type: "hero",
    heading: "Hi, I'm Alex",
    data: {
-     role: "Front-End Engineer & UI Architect",
+     role: "UX Designer & Researcher",
-     tagline: "I craft accessible interfaces that scale.",
+     tagline: "I design experiences people love.",
    }
  }
```

**Result:** Your role and tagline update in the hero section at the top of the page.

> [!TIP]
> The `role` is the bold line right under your name. The `tagline` is the smaller text below it.

---

### Change Your Bio / About Text

**Location:** `data.js` → `sections` → find `"type": "about"` → `data.description`

```diff
  {
    type: "about",
    data: {
-     description: [
-       "I'm a front-end engineer with 8+ years of experience...",
-       "Currently at TechCorp Finance, where I lead the design system...",
-     ],
+     description: [
+       "I'm a UX designer passionate about making technology accessible to everyone.",
+       "I have 6 years of experience designing for healthcare, education, and fintech.",
+     ],
    }
  }
```

**Result:** Your bio text updates in the About section.

> [!NOTE]
> The `description` is an **array** of paragraphs. Each string in the array becomes a separate paragraph.
>
> ```javascript
> description: [
>   "First paragraph.",   // ← becomes <p>First paragraph.</p>
>   "Second paragraph.",  // ← becomes <p>Second paragraph.</p>
> ]
> ```

---

### Change Your Profile Picture

**Location:** `data.js` → `sections` → find `"type": "about"` → `data.image`

```diff
  data: {
-   image: "/assets/images/profile/alex-rivera.jpg",
+   image: "/assets/images/profile/jane-smith.jpg",
-   imageAlt: "Alex Rivera professional headshot",
+   imageAlt: "Jane Smith professional headshot",
  }
```

**Step 1:** Put your photo in the folder `assets/images/profile/`.

**Step 2:** Update the path in `data.js`.

> [!TIP]
> **Image tips:**
> - Use a square photo (1:1 ratio).
> - Recommended size: 400×400 pixels.
> - Supported formats: `.jpg`, `.png`, `.webp`.
> - Keep file size under 100KB for fast loading.

> [!WARNING]
> **Always set `imageAlt`.** This is what screen readers say to describe your photo. It's also used by Google.

---

## 🎨 Appearance

### Change Theme Colors

**Location:** `data.js` → `meta` → `design`

```diff
  meta: {
    design: {
+     // HSL (Hue, Saturation, Lightness) values:
-     primary:   { h: 240, s: 80, l: 60 },  // Indigo Blue
+     primary:   { h: 340, s: 80, l: 60 },  // Rose Pink
-     secondary: { h: 175, s: 70, l: 48 },  // Teal
+     secondary: { h: 200, s: 70, l: 48 },  // Sky Blue
-     accent:    { h: 40,  s: 95, l: 55 },  // Amber
+     accent:    { h: 145, s: 70, l: 50 },  // Emerald Green
    }
  }
```

| Color Role | What It Changes |
|------------|----------------|
| `primary` | Buttons, links, headings, highlights, focus outlines |
| `secondary` | Secondary buttons, badges, decorative elements |
| `accent` | Special badges, highlights, hero stats, tag colors |

> [!TIP]
> **How to pick colors:** Go to [hslpicker.com](https://hslpicker.com). Find a color you like. Copy the H, S, L values.

| Vibe | Primary | Secondary | Accent |
|------|---------|-----------|--------|
| Tech/Modern | `h:240, s:80, l:60` (Indigo) | `h:175, s:70, l:48` (Teal) | `h:40, s:95, l:55` (Amber) |
| Creative | `h:340, s:80, l:60` (Rose) | `h:200, s:70, l:48` (Sky) | `h:145, s:70, l:50` (Emerald) |
| Corporate | `h:215, s:90, l:45` (Navy) | `h:200, s:30, l:55` (Steel) | `h:35, s:80, l:50` (Gold) |
| Minimal | `h:0, s:0, l:20` (Dark Gray) | `h:0, s:0, l:40` (Gray) | `h:0, s:0, l:60` (Light Gray) |

---

### Change Fonts

**Location:** `data.js` → `meta` → `design`

```diff
  design: {
-   fontHeading: "Inter, system-ui, sans-serif",
+   fontHeading: "Playfair Display, Georgia, serif",
-   fontBody: "Inter, system-ui, sans-serif",
+   fontBody: "Source Sans Pro, system-ui, sans-serif",
  }
```

And add the Google Fonts link in `meta`:

```diff
  meta: {
-   googleFonts: "Inter:wght@300;400;500;600;700;800",
+   googleFonts: "Playfair+Display:wght@400;600;700;800|Source+Sans+Pro:wght@300;400;600",
  }
```

> [!TIP]
> **How to get Google Fonts:**
> 1. Go to [fonts.google.com](https://fonts.google.com).
> 2. Pick your fonts and select the weights you want.
> 3. Copy the URL (without `https://fonts.googleapis.com/css2?family=` prefix).
> 4. Paste it into `googleFonts`.
> 5. Set the font names in `fontHeading` and `fontBody`.

---

## 🗂️ Navigation

### Add/Remove Navigation Items

**Location:** `data.js` → `site` → `navigation`

```diff
  site: {
    navigation: [
      { label: "About",        target: "about"         },
      { label: "Skills",       target: "skills"        },
      { label: "Experience",   target: "experience"    },
      { label: "Projects",     target: "projects"      },
+     { label: "Education",    target: "education"     },
      { label: "Achievements", target: "achievements"  },
      { label: "Contact",      target: "contact"       },
-     { label: "Contact",      target: "contact"       },
    ]
  }
```

> [!NOTE]
> - `label` is what shows in the navigation bar.
> - `target` must match the `type` of the section you want to link to (e.g., `"skills"` links to the Skills section).
> - Reorder items freely — the navigation bar updates automatically.
> - Remove an item to hide it from navigation (the section still exists on the page).

---

### Change Resume Link

**Location:** `data.js` → `site` → `resume`

```diff
  site: {
    resume: {
-     label: "Download Résumé",
+     label: "Download CV",
-     url: "/assets/documents/resume.pdf",
+     url: "/assets/documents/jane-smith-cv.pdf",
    }
  }
```

1. Place your resume PDF inside `assets/documents/`.
2. Update `label` (button text) and `url` (file path).

> [!TIP]
> Set `resume: null` to hide the resume button entirely.

---

## 📋 Sections (Content Blocks)

### Understanding Sections

A **section** is one block of your portfolio — Hero, About, Skills, Projects, etc.

Every section in `data.js` looks like:

```javascript
{
  id:        "section-hero",   // Must match HTML <section id>
  type:      "hero",           // Which renderer to use
  visible:   true,             // true = show, false = hide
  heading:   "Hi, I'm Alex",   // Section title
  navTarget: "hero",           // What nav link to set active (optional)
  data: {                      // Section-specific content
    // ... this varies by section type
  }
}
```

| Field | What It Does | Required? |
|-------|-------------|-----------|
| `id` | Must match the `<section>` element in `index.html` | ✅ Yes |
| `type` | Tells the system which renderer to use (`"hero"`, `"skills"`, etc.) | ✅ Yes |
| `visible` | Set to `false` to hide without deleting | ✅ Yes |
| `heading` | The title shown at the top of the section | ❌ Optional |
| `navTarget` | Which nav link to highlight when scrolling past this section | ❌ Optional |
| `data` | The actual content — varies per type | ✅ Yes |

---

### Hide / Show a Section

**Location:** `data.js` → `sections` → the section you want to hide

```diff
  {
    id: "section-social",
    type: "social",
-   visible: true,
+   visible: false,
  }
```

**Result:** The Social section disappears from the page. To bring it back, change `false` to `true`.

> [!TIP]
> Hide sections you don't need instead of deleting them. You can always bring them back later.

---

### Change Section Order

**Location:** `data.js` → `sections`

Simply **reorder the objects** in the array. The order in `data.js` = the order on the page.

```diff
  sections: [
    { id: "section-hero",        type: "hero"        },
    { id: "section-about",       type: "about"       },
+   { id: "section-projects",    type: "projects"    },  // ← moved up
    { id: "section-skills",      type: "skills"      },
-   { id: "section-projects",    type: "projects"    },  // ← was here
    { id: "section-experience",  type: "experience"  },
  ]
```

**Result:** The Projects section now appears before Skills on the page.

> [!WARNING]
> Do NOT change the `id` values. They must match the HTML. Only change the **order** of the objects.

---

## 💪 Skills

### Add a Skill

**Location:** `data.js` → `sections` → find `"type": "skills"` → `data.categories`

```diff
  categories: [
    {
      name: "Frontend",
      items: [
        { name: "HTML5",    level: 95 },
        { name: "CSS3",     level: 90 },
-       { name: "JavaScript", level: 88 },
+       { name: "JavaScript", level: 88 },
+       { name: "TypeScript", level: 75 },
+       { name: "Next.js",    level: 70 },
      ]
    },
+   {
+     name: "Tools",                         // ← New category
+     items: [
+       { name: "Figma",   level: 90 },
+       { name: "VS Code", level: 95 },
+       { name: "Git",     level: 85 },
+     ]
+   }
  ]
```

| Field | What It Means |
|-------|---------------|
| `name` (category) | The heading for a group of skills (e.g., "Frontend", "Design") |
| `name` (skill) | The skill name shown in the progress bar |
| `level` | A number from 0 to 100 — how proficient you are |

> [!TIP]
> Group related skills into categories. Each category gets its own card.

---

### Remove a Skill

Simply delete the line:

```diff
  items: [
    { name: "HTML5",    level: 95 },
-   { name: "jQuery",    level: 50 },
    { name: "CSS3",     level: 90 },
  ]
```

---

## 💼 Experience

### Add a Job

**Location:** `data.js` → `sections` → find `"type": "experience"` → `data.items`

```diff
  items: [
+   {
+     role:        "Junior Developer",
+     company:     "StartupXYZ",
+     url:         "https://startupxyz.com",
+     type:        "Full-time",                // Badge shown next to company
+     period:      "Jan 2020 — Dec 2021",
+     location:    "Remote",
+     description: "Built and maintained the company's primary web application.",
+     highlights: [
+       "Reduced page load time by 40%",
+       "Mentored 2 intern developers",
+       "Introduced automated testing"
+     ],
+     tech: ["React", "Node.js", "MongoDB", "AWS"]
+   },
    { role: "Senior Frontend Engineer", ... },  // ← existing entry
  ]
```

| Field | What It Shows | Required? |
|-------|--------------|-----------|
| `role` | Your job title | ✅ Yes |
| `company` | Company name (becomes a link if `url` is set) | ✅ Yes |
| `url` | Company website | ❌ |
| `type` | Badge: "Full-time", "Contract", "Freelance" | ❌ |
| `period` | Date range (e.g., "2022 — Present") | ✅ Yes |
| `location` | "Remote", "New York, NY" | ❌ |
| `description` | 1-2 sentences about your role | ❌ |
| `highlights` | Bullet-point achievements | ❌ |
| `tech` | Technology badges (React, TypeScript, etc.) | ❌ |

> [!TIP]
> List jobs in **chronological order** — newest first. The timeline renders from top to bottom.

---

### Remove a Job

Remove the entire `{ role: ..., company: ..., ... }` block for that job.

```diff
  items: [
    { role: "Senior Frontend Engineer", ... },
-   { role: "Old Internship", ... },
    { role: "Junior Developer", ... },
  ]
```

---

## 🚀 Projects

### Add a Project

**Location:** `data.js` → `sections` → find `"type": "projects"` → `data.items`

```diff
  items: [
+   {
+     title:       "Weather Dashboard",
+     category:    "Side Project",
+     description: "Real-time weather dashboard with 7-day forecast. Built with OpenWeatherMap API.",
+     image:       "/assets/images/projects/weather.jpg",
+     imageAlt:    "Screenshot of Weather Dashboard showing a 7-day forecast",
+     tech:        ["React", "Chart.js", "OpenWeatherAPI"],
+     liveUrl:     "https://weather.example.com",
+     url:         "https://github.com/janesmith/weather-dashboard",
+     featured:    true                          // Makes card slightly elevated
+   },
  ]
```

| Field | What It Shows | Required? |
|-------|--------------|-----------|
| `title` | Project name | ✅ Yes |
| `category` | Badge at top of card | ❌ |
| `description` | 1-2 sentences | ❌ |
| `image` | Thumbnail (16:9 ratio best) | ❌ |
| `imageAlt` | Screen reader text | ❌ |
| `tech` | Technology badges | ❌ |
| `liveUrl` | Creates "Live Demo" button | ❌ |
| `url` | Creates "Source Code" button | ❌ |
| `featured` | Makes the card stand out | ❌ |

> [!TIP]
> Put project screenshots in `assets/images/projects/`. Use `.jpg` for photos, `.png` for UI screenshots. 16:9 ratio works best.

---

### Remove a Project

Remove the entire project object:

```diff
  items: [
    { title: "Portfolio Template", ... },
-   { title: "Old Project", ... },
    { title: "Weather Dashboard", ... },
  ]
```

---

## 🏆 Achievements

### Add an Achievement

**Location:** `data.js` → `sections` → find `"type": "achievements"` → `data.items`

```diff
  items: [
+   {
+     title:        "Best Paper Award",
+     organization: "ICSE Conference",
+     year:         "2024",
+     description:  "Awarded for research paper on accessible design systems.",
+     url:          "https://icse.example.com/awards/2024"
+   },
  ]
```

| Field | What It Shows |
|-------|---------------|
| `title` | Achievement name |
| `organization` | Who gave the award (shown as a link if `url` is set) |
| `year` | Displayed as a badge |
| `description` | 1 sentence about the achievement |
| `url` | Link to certificate, article, or proof |

---

## 🎓 Education

### Add Education

**Location:** `data.js` → `sections` → find `"type": "education"` → `data.items`

```diff
  items: [
+   {
+     degree:       "M.S. Computer Science",
+     institution:  "Stanford University",
+     location:     "Stanford, CA",
+     period:       "2016 — 2018",
+     gpa:          "3.8",
+     description:  "Focus on Human-Computer Interaction and accessible computing.",
+     achievements: [
+       "Thesis: Designing Inclusive Interfaces for Cognitive Disabilities",
+       "Teaching Assistant for CS 147: Introduction to HCI"
+     ]
+   },
  ]
```

| Field | What It Shows |
|-------|---------------|
| `degree` | Your degree title |
| `institution` | School/university name |
| `location` | City, State or Country |
| `period` | Badge showing years |
| `gpa` | Badge showing "GPA: 3.8" |
| `description` | 1-2 sentences |
| `achievements` | Bullet points (thesis, awards, honors) |

---

## 📜 Certificates

### Add a Certificate

**Location:** `data.js` → `sections` → find `"type": "certificates"` → `data.items`

```diff
  items: [
+   {
+     title:        "AWS Solutions Architect",
+     issuer:       "Amazon Web Services",
+     date:         "2024",
+     credentialId: "AWS-SAA-12345",
+     url:          "https://aws.amazon.com/certification/verify/12345"
+   },
  ]
```

| Field | What It Shows |
|-------|---------------|
| `title` | Certificate name |
| `issuer` | Organization that issued it |
| `date` | Shown as a badge |
| `credentialId` | Small text: "Credential ID: ..." |
| `url` | Creates "View Credential" button |

---

## 📞 Contact

### Change Contact Info

**Location:** `data.js` → `sections` → find `"type": "contact"` → `data`

```diff
  data: {
-   email:        "alex@alexrivera.dev",
+   email:        "jane@janesmith.dev",
-   location:     "San Francisco, CA",
+   location:     "Austin, TX",
    availability: {
-     status:      "available",
+     status:      "available",         // "available" or "unavailable"
-     label:       "Available for new projects",
+     label:       "Open to freelance work",
-     description: "Currently taking on 1-2 new projects."
+     description: "Available for UX design and research projects."
    },
    cta: {
-     label:  "Get In Touch",
+     label:  "Hire Me",
-     action: "mailto:alex@alexrivera.dev",
+     action: "https://calendly.com/janesmith/30min",
    }
  }
```

> [!NOTE]
> `cta.action` can be a `mailto:` link, a Calendly link, or any URL.

---

## 🌐 Social Media

### Add Social Links

**Location:** `data.js` → `sections` → find `"type": "social"` → `data.links`

```diff
  links: [
    { platform: "GitHub",    username: "@alexrivera", url: "https://github.com/alexrivera"   },
    { platform: "LinkedIn",  username: "@alexrivera", url: "https://linkedin.com/in/alexrivera" },
-   { platform: "Twitter",   username: "@alexrivera", url: "https://twitter.com/alexrivera"  },
+   { platform: "Twitter",   username: "@janesmith",  url: "https://twitter.com/janesmith"   },
+   { platform: "Dribbble",  username: "@janesmith",  url: "https://dribbble.com/janesmith"  },
+   { platform: "YouTube",   username: "@janesmith",  url: "https://youtube.com/@janesmith"  },
  ]
```

| Field | What It Shows |
|-------|---------------|
| `platform` | Card title (e.g., "GitHub") |
| `username` | Shown below the platform name |
| `url` | The actual link — user clicks the card to visit |

> [!TIP]
> Add as many social links as you want. Each one gets its own card. Remove a link to hide it.

---

## ⚡ Hero Stats

### Change Hero Stats

**Location:** `data.js` → `sections` → find `"type": "hero"` → `data.stats`

```diff
  stats: [
-   { value: "8+",   label: "Years Experience" },
-   { value: "50+",  label: "Projects Shipped" },
-   { value: "15+",  label: "Happy Clients"   },
+   { value: "10+",  label: "Years Experience" },
+   { value: "100+", label: "Designs Shipped"  },
+   { value: "20+",  label: "Talks Given"      },
-   // Or remove the entire stats array to hide it:
+   // stats: [],
  ]
```

> [!TIP]
> Set `stats: []` (empty array) to hide the stats row entirely.

---

### Change Hero CTA Buttons

**Location:** `data.js` → `sections` → find `"type": "hero"` → `data.actions`

```diff
  actions: [
-   { label: "View My Work", variant: "primary",   target: "projects"   },
-   { label: "Get In Touch", variant: "secondary", target: "contact"    },
+   { label: "See Projects", variant: "primary",   target: "projects"   },
+   { label: "Download CV",  variant: "secondary", target: "experience" },
  ]
```

| Field | What It Does |
|-------|-------------|
| `label` | Button text |
| `variant` | `"primary"` = colored; `"secondary"` = outline |
| `target` | Section ID to scroll to when clicked |

---

## 🖼️ Favicon

### Replace the Favicon

1. Create a square SVG or PNG image (at least 64×64px).
2. Save it as `assets/icons/favicon.svg` (overwrite the existing one).
3. That's it — no code changes needed.

---

## 🔍 SEO

### Update Search Engine Info

**Location:** `data.js` → `meta`

```diff
  meta: {
-   title:        "Alex Rivera — Front-End Engineer & UI Architect",
+   title:        "Jane Smith — UX Designer & Researcher",
-   description:  "Portfolio of Alex Rivera, specializing in design systems...",
+   description:  "Portfolio of Jane Smith, UX designer specializing in healthcare, education, and fintech products.",
-   url:          "https://alexrivera.dev",
+   url:          "https://janesmith.dev",
-   author:       "Alex Rivera",
+   author:       "Jane Smith",
  }
```

> [!NOTE]
> - **`title`**: Appears in browser tabs and Google search results. Keep under 60 chars.
> - **`description`**: Appears under the title in Google. Keep under 155 chars. Make it compelling.
> - **`url`**: Your actual website URL. Used for canonical links and Open Graph.
> - **`author`**: Your name. Used in JSON-LD metadata.

> [!WARNING]
> If you deploy to GitHub Pages, set `url` to `https://<username>.github.io` (or your custom domain).

---

<br>

---

# Developer Guide

This section is for developers who want to extend the template — add new sections, create new components, or understand the architecture.

> [!NOTE]
> If you're a Portfolio Owner customizing content, skip to the [FAQ](#faq). You don't need this section.

---

## Architecture Overview

### Design Pattern: Section Registry

The project uses a **Registry Pattern** for rendering. Instead of a giant `if/switch` statement, each section type registers its own renderer function:

```
┌────────────────────────────────────┐
│ section-registry.js                │
│                                    │
│ {                                  │
│   "hero":         renderHero,      │
│   "about":        renderAbout,     │
│   "skills":       renderSkills,    │
│   "experience":   renderExperience,│
│   "projects":     renderProjects,  │
│   "achievements": renderAchievements,│
│   "education":    renderEducation, │
│   "certificates": renderCertificates,│
│   "contact":      renderContact,   │
│   "social":       renderSocial     │
│ }                                  │
└────────────────────────────────────┘
```

**Why:** Adding a new section means adding 1 import + 1 key-value pair. No central file needs refactoring.

### Rendering Flow (Technical)

```
app.js:init()
  │
  ├─→ _renderHeader(site)       — Builds logo, nav, resume button
  │     └─→ navigation.init()   — Setup scroll spy, smooth scroll, mobile menu
  │
  ├─→ _initUX()                 — Scroll progress bar, header shadow effect
  │
  └─→ _renderSections(sections) — Loop through portfolioData.sections[]
        │
        └─→ For each section:
              │
              ├─→ Check visible === true
              ├─→ Find renderer: sectionRegistry[section.type]
              ├─→ Find container: getElementById(section.id + "-container")
              └─→ renderer(section, container)
                    │
                    └─→ Section renderer uses:
                          ├─→ createSectionWrapper()   — shared heading + container
                          ├─→ createElement()          — DOM node factory
                          ├─→ createCard()             — reusable card component
                          ├─→ createBadge()            — reusable badge component
                          ├─→ createButton()           — reusable button component
                          └─→ createSectionTitle()     — reusable section heading
```

### EventBus (Cross-Component Communication)

Components never reference each other directly. They communicate through a pub/sub EventBus:

```javascript
// In navigation.js:
events.emit("nav:activeChange", { sectionId: "projects" });

// In any other component:
events.on("nav:activeChange", (data) => {
  console.log("User scrolled to:", data.sectionId);
});
```

**Why:** Prevents tight coupling. Components know about events, not each other.

---

## Folder Structure (Developer View)

```
js/
├── main.js                        # Entry point — bootstraps app when DOM ready
├── core/
│   ├── app.js                     # App controller — init(), destroy(), render methods
│   └── events.js                  # EventBus — on(), off(), emit()
├── utils/
│   ├── dom.js                     # createElement(), batchAppend(), render(), empty()
│   ├── sanitize.js                # escapeHTML(), sanitizeURL()
│   ├── a11y.js                    # trapFocus(), announce(), untrapFocus()
│   └── renderer-helper.js         # createSectionWrapper() — shared boilerplate
├── components/
│   ├── card.js                    # createCard() — the most-used component
│   ├── button.js                  # createButton()
│   ├── badge.js                   # createBadge()
│   ├── chip.js                    # createChip()
│   ├── tag.js                     # createTag()
│   ├── section-title.js           # createSectionTitle()
│   ├── navigation.js              # Navigation controller (scroll spy, mobile menu)
│   └── scroll-progress.js         # rAF-throttled scroll progress bar
└── sections/
    ├── section-registry.js        # Maps type string → renderer function
    ├── hero.js                    # renderHero()
    ├── about.js                   # renderAbout()
    ├── skills.js                  # renderSkills()
    ├── experience.js              # renderExperience()
    ├── projects.js                # renderProjects()
    ├── achievements.js            # renderAchievements()
    ├── education.js               # renderEducation()
    ├── certificates.js            # renderCertificates()
    ├── contact.js                 # renderContact()
    └── social.js                  # renderSocial()
```

---

## Dom Utilities (`js/utils/dom.js`)

### `createElement(tag, attrs, ...children)`

The core building block. **All** DOM nodes are created through this function. Never use `innerHTML`.

```javascript
// Create a simple element:
createElement("h2", { class: "title", text: "Hello World" });
// → <h2 class="title">Hello World</h2>

// With children:
createElement("div", { class: "container" },
  createElement("p", { text: "First paragraph" }),
  createElement("p", { text: "Second paragraph" })
);

// The `text:` property sets textContent (XSS-safe).
// The `html:` property sets innerHTML (use ONLY with sanitized content).
```

### `batchAppend(parent, nodes)`

Appends multiple nodes in a single reflow using `DocumentFragment`:

```javascript
batchAppend(container, [card1, card2, card3, card4]);
// vs. 4 individual appendChild calls → 4 reflows
```

### `render(container, content)`

Clears container and appends content:

```javascript
render(skillsContainer, skillsCard);
// Equivalent to: empty(container) + appendChildren(...)
```

### Sanitize Utilities (`js/utils/sanitize.js`)

```javascript
// Escape HTML for attribute values or innerHTML use:
escapeHTML('<script>alert("xss")</script>');
// → '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'

// Validate URLs (only allows http, https, mailto, tel, relative):
sanitizeURL('javascript:alert(1)');
// → '#'

sanitizeURL('https://example.com');
// → 'https://example.com'
```

> [!IMPORTANT]
> **Never use `innerHTML` for user content.** Use `createElement` with the `text:` property.
> `textContent` is inherently XSS-safe — no escaping needed.

---

## Adding a New Section

### Step 1: Add Data to `data.js`

```javascript
sections: [
  // ... existing ...
  {
    id:      "section-testimonials",
    type:    "testimonials",
    visible: true,
    heading: "What People Say",
    data: {
      items: [
        {
          quote:  "Alex delivered an outstanding design system.",
          author: "Sarah Chen",
          role:   "VP of Engineering at TechCorp"
        }
      ]
    }
  }
]
```

### Step 2: Add HTML Container

In `index.html`, before the closing `</main>` tag:

```html
<section id="section-testimonials"
         data-section="testimonials"
         aria-labelledby="testimonials-heading">
  <div class="l-section" id="testimonials-container"></div>
</section>
```

> [!NOTE]
> The `id` on the inner `<div>` must be `{section-id}-container`. The app looks for `section.id + "-container"`.

### Step 3: Create Section Renderer

Create `js/sections/testimonials.js`:

```javascript
"use strict";

import { createElement } from "../utils/dom.js";
import { createSectionWrapper } from "../utils/renderer-helper.js";
import { createCard } from "../components/card.js";

function renderTestimonials(data, container) {
  const { content } = createSectionWrapper(data, "testimonials");

  if (!data.data.items?.length) return;

  const grid = createElement("div", { class: "testimonials__grid" });

  data.data.items.forEach(item => {
    const card = createCard({
      variant: "flat",
      title: item.author,
      text: item.quote,
      tags: [item.role]
    });
    grid.appendChild(card);
  });

  content.appendChild(grid);
  container.appendChild(content);
}

export { renderTestimonials };
```

### Step 4: Register the Renderer

In `js/sections/section-registry.js`:

```diff
  import { renderTestimonials } from "./testimonials.js";

  const sectionRegistry = {
    // ... existing entries ...
+   testimonials: renderTestimonials,
  };
```

### Step 5: Add CSS (Optional)

Create `css/sections/testimonials.css`:

```css
.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-6);
}
```

Import it in `css/main.css` (Layer 3 — Sections):

```diff
  @import "./sections/social.css";
+ @import "./sections/testimonials.css";
```

### Done. A new section in ~30 lines of code.

---

## Creating a New Reusable Component

### The Component Factory Pattern

Every component is a **pure function** that receives options and returns a DOM element. No classes, no `this`, no state.

```javascript
function createMyComponent(options = {}) {
  const {
    label = "",
    variant = ""
  } = options;

  const classes = ["c-my-component"];
  if (variant) classes.push("c-my-component--" + variant);

  return createElement("div", { class: classes },
    createElement("span", { class: "c-my-component__label", text: label })
  );
}

export { createMyComponent };
```

**Rules:**
1. One factory function per file, named `createComponentName`.
2. First parameter is an `options` object with destructuring defaults.
3. Use `createElement` for all DOM creation — never `innerHTML`.
4. Use `text:` for all user-facing text (inherently XSS-safe).
5. CSS classes use BEM convention: `c-component__element--modifier`.
6. Export only one function.

---

## Responsive Design System

### Breakpoints (in `css/base/responsive.css`)

| Breakpoint | Target Device | Key Changes |
|------------|--------------|-------------|
| `360px` | Base (no query) | Single column, stacked layout |
| `480px` | Small phones landscape | Adjusted padding |
| `768px` | Tablets, large phones | Grids switch to 2 columns |
| `1024px` | Small laptops | 3-column grids, nav visible |
| `1280px` | Large laptops | Wider containers |
| `1440px` | Desktop | Max-width containers |
| `1920px` | Large desktop | Final scaling |

### Mobile-First Strategy

- Base CSS (no media query) = mobile (360px) styles.
- `@media (min-width: 768px)` = tablet overrides.
- `@media (min-width: 1024px)` = desktop overrides.
- All responsive overrides are centralized in `responsive.css` — no scattered queries.

---

## Accessibility Implementation

| Feature | Implementation |
|---------|---------------|
| **Skip link** | First element in `<body>`, visible on focus |
| **Landmark roles** | `<header role="banner">`, `<main role="main">`, `<footer role="contentinfo">` |
| **ARIA labels** | Every `<section>` has `aria-label` or `aria-labelledby` |
| **Color contrast** | All text-on-background meets WCAG AA (4.5:1) |
| **Keyboard nav** | Full tab order, focus trap in mobile menu, Escape to close |
| **Screen reader** | `aria-live="polite"` region for announcements, `alt` on all images |
| **Focus indicators** | `:focus-visible` outline on all interactive elements |
| **Reduced motion** | `prefers-reduced-motion` disables all animations |
| **Forced colors** | Styles for Windows High Contrast Mode |
| **Print** | `@media print` in `a11y.css` hides nav, shows URLs |

---

## Deployment

### GitHub Pages (Free)

```bash
# 1. Push your repository
git push origin main

# 2. Go to: Settings → Pages
# 3. Select: Branch = "main", Folder = "/ (root)"
# 4. Save — your site is live in ~2 minutes
```

### Any Static Host

This project is pure HTML/CSS/JS. Deploy it anywhere:

| Provider | Instructions |
|----------|-------------|
| **Netlify** | Drag-and-drop the project folder |
| **Vercel** | Import from GitHub, no configuration needed |
| **Cloudflare Pages** | Connect GitHub, auto-deploys |
| **Any server** | Upload all files via FTP |

### Custom Domain

1. Add a file named `CNAME` to the project root:

```
janesmith.dev
```

2. Configure your domain's DNS with the hosting provider's instructions.

---

<br>

---

# FAQ

### Basics

<details>
<summary><strong>Q: Where do I change my name?</strong></summary>

**A:** Open [`data.js`](data.js). Find the `meta` block at the top. Change the `author` and `title` fields. Save and refresh.

</details>

<details>
<summary><strong>Q: How do I change my profile photo?</strong></summary>

**A:** Put your photo in `assets/images/profile/`. Then in `data.js`, update `data.image` in the **About** section.

</details>

<details>
<summary><strong>Q: Why isn't my section showing?</strong></summary>

**A:** Check these three things:
1. `visible: true` (not `false`)
2. The `id` value matches exactly what's in `index.html`
3. You haven't accidentally deleted the section from the `sections` array

</details>


<details>
<summary><strong>Q: How do I hide a section?</strong></summary>

**A:** In `data.js`, find the section and change `visible: true` to `visible: false`.

</details>

<details>
<summary><strong>Q: How do I reorder sections?</strong></summary>

**A:** In `data.js`, move the section objects up or down in the `sections` array. The order in the array = the order on the page.

</details>

<details>
<summary><strong>Q: How do I change colors?</strong></summary>

**A:** In `data.js`, find `meta.design`. Change the `h`, `s`, `l` values for `primary`, `secondary`, and `accent`.

</details>

<details>
<summary><strong>Q: How do I change fonts?</strong></summary>

**A:** In `data.js`, update `meta.googleFonts` with your font URL. Then update `meta.design.fontHeading` and `meta.design.fontBody`.

</details>

<details>
<summary><strong>Q: Do I need Node.js installed?</strong></summary>

**A:** No. This project is pure HTML/CSS/JS. You can open `index.html` directly in your browser or deploy to any static host.

</details>

<details>
<summary><strong>Q: Do I need npm or any build tools?</strong></summary>

**A:** No. Zero dependencies. No `npm install`, no Webpack, no Vite. Just files in a folder.

</details>

<details>
<summary><strong>Q: Can I use this commercially?</strong></summary>

**A:** Yes. MIT license — free for personal and commercial use.

</details>


### Customization

<details>
<summary><strong>Q: How do I add a new skill?</strong></summary>

**A:** In `data.js`, find the Skills section (`"type": "skills"`). Add `{ name: "Skill Name", level: 85 }` to the `items` array of the appropriate category.

</details>

<details>
<summary><strong>Q: How do I add a new project?</strong></summary>

**A:** In `data.js` → Projects section → `items` array. Add a new project object with at least `title` and `description`.

</details>

<details>
<summary><strong>Q: How do I hide the resume button?</strong></summary>

**A:** In `data.js`, find `site.resume` and set it to `null`.

</details>

<details>
<summary><strong>Q: How do I remove a navigation item?</strong></summary>

**A:** Remove it from `site.navigation` array in `data.js`.

</details>

<details>
<summary><strong>Q: How do I remove the social/contact/achievements section?</strong></summary>

**A:** Find the section in `sections` array. Set `visible: false`.

</details>

<details>
<summary><strong>Q: How do I add a new social media link?</strong></summary>

**A:** In `data.js`, find the Social section. Add a new object to `links`: `{ platform: "Platform", username: "@user", url: "https://..." }`.

</details>

<details>
<summary><strong>Q: Can I add more than 3 hero stat numbers?</strong></summary>

**A:** Yes. Add more objects to `stats: [...]` in the Hero section. The grid auto-expands.

</details>

<details>
<summary><strong>Q: Can I change the theme to light mode?</strong></summary>

**A:** The template ships with a dark theme as default. Full light mode support is available by uncommenting `@import "./themes/light.css"` in `main.css` (after creating the light theme stylesheet).

</details>

<details>
<summary><strong>Q: Why are there two README files?</strong></summary>

**A:** `README.md` is the English version. `README_ID.md` is the Bahasa Indonesia version. They contain the same information in different languages.

</details>

<details>
<summary><strong>Q: Can I delete `README_ID.md`?</strong></summary>

**A:** Yes. It won't affect the portfolio.

</details>


### Deployment

<details>
<summary><strong>Q: How do I deploy to GitHub Pages?</strong></summary>

**A:** Push to GitHub → Go to Repository Settings → Pages → Select "main" branch → Save. Your site is live at `https://<username>.github.io/<repo>/`.

</details>

<details>
<summary><strong>Q: How long does GitHub Pages take to update?</strong></summary>

**A:** Usually 1–2 minutes. Sometimes up to 5 minutes for the first deployment.

</details>

<details>
<summary><strong>Q: Can I use a custom domain?</strong></summary>

**A:** Yes. Add a `CNAME` file to your repository root with your domain name. Configure DNS with your provider.

</details>

<details>
<summary><strong>Q: Why is my site showing a 404?</strong></summary>

**A:** Check:
1. Your repository name is exactly `<username>.github.io` (for user pages) OR you've enabled Pages in Settings.
2. You committed `index.html` to the `main` branch.
3. Wait 2 minutes after pushing.

</details>

<details>
<summary><strong>Q: Can I deploy to Netlify or Vercel?</strong></summary>

**A:** Yes. Both support drag-and-drop or Git integration. No configuration needed — it's just static files.

</details>


### Troubleshooting

<details>
<summary><strong>Q: My changes aren't showing after editing data.js.</strong></summary>

**A:** Try:
1. **Hard refresh**: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac).
2. **Clear cache**: Open DevTools → Network tab → check "Disable cache".
3. **Check for typos**: A missing comma or quote in `data.js` breaks everything.

</details>

<details>
<summary><strong>Q: The page is completely blank.</strong></summary>

**A:** You probably have a JavaScript syntax error in `data.js`. Open your browser's DevTools (F12) → Console tab. Look for red error messages. Common causes: missing comma, extra comma, unclosed quote.

</details>

<details>
<summary><strong>Q: I changed something in data.js and everything broke.</strong></summary>

**A:** Restore from your backup (`data-backup.js`). If you don't have one, re-download the original `data.js` from the repository and start fresh.

</details>

<details>
<summary><strong>Q: Can I edit HTML directly?</strong></summary>

**A:** No — don't edit `index.html` to add content. All content goes in `data.js`. Editing HTML directly will cause inconsistent behavior.

</details>

<details>
<summary><strong>Q: Can I edit CSS directly?</strong></summary>

**A:** Changing colors or fonts? Use `data.js` → `meta.design`. Only edit CSS files if you understand CSS and want deeper customization (Developer users only).

</details>

<details>
<summary><strong>Q: My images aren't showing.</strong></summary>

**A:** Check:
1. The file exists at the path you specified.
2. Paths starting with `/` are relative to the website root.
3. Paths without `/` are relative to the current page.
4. File name is case-sensitive (`Photo.jpg` ≠ `photo.jpg`).

</details>

<br>

---

# Best Practices

### ✅ DO

| Do | Why |
|----|-----|
| **Always edit `data.js` for content** | It's the Single Source of Truth |
| **Keep a backup** of `data.js` before editing | Easy recovery if something breaks |
| **Use descriptive image names** | `profile-photo.jpg` explains what it is |
| **Set `alt` text for every image** | Screen readers and Google need it |
| **Compress images before adding them** | Faster page loads, better Lighthouse score |
| **Test your portfolio on your phone** | 60%+ of portfolio views are on mobile |
| **Run Lighthouse audit** after customizing | Catches accessibility and SEO issues |
| **Update `meta.url` when deploying** | Ensures OG tags and canonical URLs are correct |

### ❌ NEVER

| Never | Why |
|-------|-----|
| **Edit `index.html` for content** | Content belongs in `data.js` |
| **Edit CSS unless you know CSS** | Colors and fonts are already configurable in `data.js` |
| **Edit JS renderers** | The rendering system handles everything automatically |
| **Use `innerHTML` for user content** | XSS security risk — use `createElement` with `text:` |
| **Hardcode colors** in CSS | Use CSS variables — colors come from `data.js` |
| **Delete sections** from the `sections` array | Set `visible: false` instead — you can undo it |
| **Put large images** (over 1MB) | Use tools like [Squoosh](https://squoosh.app) to compress |

<br>

---

# Troubleshooting

### Common Mistakes

| Problem | Likely Cause | Solution |
|---------|-------------|----------|
| Page is blank | JavaScript error | Open DevTools (F12), check Console for errors |
| Section not showing | `visible: false` | Change to `true` |
| Section not showing | `id` doesn't match `index.html` | Check exact spelling (case-sensitive) |
| Colors not changing | Edited the wrong file | Edit `data.js` → `meta.design` — not CSS files |
| Image broken | Path is wrong | Verify file exists, check path starts with `/` |
| Nav links don't scroll | `target` doesn't match a section `type` | Make sure the `target` value matches a section's `type` field |

### JavaScript Error Reference

| Error Message | What It Means |
|---------------|---------------|
| `Unexpected token ,` | You have an extra or misplaced comma in `data.js` |
| `Unexpected end of input` | You're missing a closing `}` or `]` |
| `Cannot read property 'x' of undefined` | You removed a required field from a section |
| `Module not found` | A file was moved or renamed (Developer issue) |

> [!TIP]
> Use a code editor with syntax highlighting (like [VS Code](https://code.visualstudio.com)) — it will highlight typos and missing brackets for you.

<br>

---

# Contributing

Contributions are welcome! This project aims to remain **zero-dependency** and **beginner-friendly**.

### How to Contribute

1. **Fork** the repository.
2. **Create a branch**: `git checkout -b feature/my-feature`.
3. **Make your changes**.
4. **Test** on Chrome, Firefox, Safari, and Edge.
5. **Run Lighthouse** — ensure no regression in scores.
6. **Submit a Pull Request**.

### Contribution Guidelines

- New features should be **opt-in** — don't change default behavior.
- New dependencies? **No.** This project stays zero-dependency.
- New sections must follow the [Section Registry pattern](#adding-a-new-section).
- All DOM creation must use `createElement` — no `innerHTML`.
- All user-facing text must use the `text:` property (XSS-safe).

<br>

---

# License

MIT License — free for personal and commercial use. Attribution appreciated but not required.

See [LICENSE](LICENSE) for full text.

<br>

---

<p align="center">
  <em>Built with ❤️ by the template-portofolio project.</em><br>
  <em>No frameworks. No dependencies. Just you and your story.</em>
</p>