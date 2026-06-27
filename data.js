/* ============================================================
   SINGLE SOURCE OF TRUTH
   Sprint 2: Data Architecture
   ============================================================
   File: data.js
   Purpose: All portfolio content lives here. No other file
            contains portfolio data. Pure data — no logic,
            no rendering, no DOM manipulation.
   Schema:  portfolioData = { meta, site, sections, footer }
   ============================================================ */

"use strict";

const portfolioData = {

  /* ==========================================================
     META — Site-wide metadata
     ========================================================== */
  meta: {
    title:          "Alex Rivera — Front-End Engineer & UI Architect",
    description:    "Portfolio of Alex Rivera, a front-end engineer specializing in design systems, accessible UI, and performant web applications.",
    author:         "Alex Rivera",
    url:            "https://alexrivera.dev",
    language:       "en",
    theme:          "dark",
    titleShort:     "AR",
    titleSeparator: "•",
    generator:      "template-portofolio",

    /* ── Fonts (Google Fonts URL) ── */
    googleFonts: "Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700",

    /* ── Design Tokens — change colors and fonts here ── */
    design: {
      /* Primary color — buttons, links, headings, focus outlines */
      primary:   { h: 240, s: 80, l: 60 },   // Indigo Blue
      /* Secondary color — badges, decorative elements */
      secondary: { h: 175, s: 70, l: 48 },   // Teal / Cyan
      /* Accent color — highlights, hero stats, special badges, tag colors */
      accent:    { h: 40,  s: 95, l: 55 },   // Amber / Warm Gold
      /* Fonts — heading and body families */
      fontHeading: "\"Outfit\", \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif",
      fontBody:    "\"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif"
    }
  },

  /* ==========================================================
     SITE — Header, navigation, and branding
     ========================================================== */
  site: {
    logo: "/assets/images/profile/logo.svg",

    navigation: [
      { label: "About",         target: "about"         },
      { label: "Skills",        target: "skills"        },
      { label: "Experience",    target: "experience"    },
      { label: "Projects",      target: "projects"      },
      { label: "Achievements",  target: "achievements"  },
      { label: "Contact",       target: "contact"       }
    ],

    resume: {
      label: "Download Résumé",
      url:   "/assets/documents/resume.pdf"
    }
  },

  /* ==========================================================
     SECTIONS — Portfolio content sections
     Order here determines render order on the page.
     Each section: { id, type, visible, heading, data }
     ========================================================== */
  sections: [

    /* ── Hero ─────────────────────────────────────────── */
    {
      id:      "hero",
      type:    "hero",
      visible: true,
      heading: "Hi, I'm Alex",
      data: {
        role:        "Front-End Engineer & UI Architect",
        tagline:     "I craft performant, accessible, and beautiful digital experiences — bridging design and engineering.",
        image:       "/assets/images/profile/avatar.svg",
        imageAlt:    "Portrait of Alex Rivera",
        actions: [
          { label: "View My Work",  target: "projects",     variant: "primary"   },
          { label: "Get In Touch",  target: "contact",      variant: "secondary" }
        ],
        stats: [
          { value: "8+",    label: "Years Experience" },
          { value: "40+",   label: "Projects Shipped" },
          { value: "25+",   label: "Happy Clients"    }
        ]
      }
    },

    /* ── About ────────────────────────────────────────── */
    {
      id:      "about",
      type:    "about",
      visible: true,
      heading: "About Me",
      data: {
        image:       "/assets/images/profile/about.svg",
        imageAlt:    "Alex working at a desk setup",
        description: [
          "I'm a front-end engineer with over eight years of experience building interfaces that are as functional as they are beautiful. I specialize in design systems, component architecture, and performance optimization.",
          "My approach combines deep technical knowledge with an eye for detail. I believe great software starts with great foundations — semantic HTML, thoughtful CSS architecture, and clean, maintainable JavaScript.",
          "When I'm not coding, you'll find me contributing to open-source projects, writing about web performance, or exploring the latest in browser APIs."
        ],
        highlights: [
          { label: "Location",   value: "San Francisco, CA"     },
          { label: "Available",  value: "Freelance & Full-time" },
          { label: "Languages",  value: "English, Spanish"      },
          { label: "Interests",  value: "Open Source, Design Systems, Web Performance, Accessibility" }
        ]
      }
    },

    /* ── Skills ───────────────────────────────────────── */
    {
      id:      "skills",
      type:    "skills",
      visible: true,
      heading: "Skills & Expertise",
      data: {
        categories: [
          {
            name: "Languages",
            icon: "code",
            items: [
              { name: "HTML5",         level: 95 },
              { name: "CSS3",          level: 95 },
              { name: "JavaScript",    level: 90 },
              { name: "TypeScript",    level: 82 },
              { name: "SQL",           level: 65 }
            ]
          },
          {
            name: "Frameworks",
            icon: "layers",
            items: [
              { name: "React",         level: 88 },
              { name: "Next.js",       level: 80 },
              { name: "Vue.js",        level: 72 },
              { name: "Astro",         level: 75 }
            ]
          },
          {
            name: "Styling",
            icon: "palette",
            items: [
              { name: "CSS Custom Properties", level: 95 },
              { name: "Design Systems",        level: 90 },
              { name: "Tailwind CSS",           level: 85 },
              { name: "Sass/SCSS",              level: 80 },
              { name: "Animations",             level: 78 }
            ]
          },
          {
            name: "Tools",
            icon: "wrench",
            items: [
              { name: "Git & GitHub",  level: 92 },
              { name: "Figma",         level: 78 },
              { name: "Webpack/Vite",  level: 80 },
              { name: "Docker",        level: 62 },
              { name: "CI/CD",         level: 70 }
            ]
          },
          {
            name: "Practices",
            icon: "shield",
            items: [
              { name: "Web Accessibility (WCAG)",  level: 88 },
              { name: "Performance Optimization",  level: 85 },
              { name: "Responsive Design",         level: 95 },
              { name: "Test-Driven Development",   level: 72 },
              { name: "Agile / Scrum",             level: 80 }
            ]
          }
        ]
      }
    },

    /* ── Experience ───────────────────────────────────── */
    {
      id:      "experience",
      type:    "experience",
      visible: true,
      heading: "Work Experience",
      data: {
        items: [
          {
            role:        "Senior Front-End Engineer",
            company:     "Stellar Labs Inc.",
            url:         "https://stellarlabs.example.com",
            location:    "San Francisco, CA",
            period:      "2022 — Present",
            type:        "Full-time",
            description: "Lead the design system initiative and front-end architecture for a SaaS platform serving 500K+ users.",
            highlights: [
              "Architected and shipped a 60-component design system used by 4 product teams",
              "Reduced CSS bundle size by 62% through token consolidation and dead-code elimination",
              "Established accessibility standards, achieving WCAG 2.1 AA compliance across all products",
              "Mentored a team of 4 junior and mid-level engineers through weekly code reviews"
            ],
            tech: ["React", "TypeScript", "CSS Custom Properties", "Storybook", "Vitest"]
          },
          {
            role:        "Front-End Engineer",
            company:     "Nexus Digital",
            url:         "https://nexusdigital.example.com",
            location:    "Remote",
            period:      "2020 — 2022",
            type:        "Full-time",
            description: "Built high-performance marketing sites and interactive dashboards for Fortune 500 clients.",
            highlights: [
              "Delivered 12 client projects on time with an average Lighthouse performance score of 96+",
              "Built a real-time analytics dashboard handling 200K+ data points with smooth 60fps rendering",
              "Introduced component-driven development workflow, cutting QA cycles by 35%",
              "Led migration from legacy jQuery codebase to modern vanilla JS and React"
            ],
            tech: ["JavaScript", "React", "D3.js", "Node.js", "AWS"]
          },
          {
            role:        "UI Developer",
            company:     "Bright Pixel Agency",
            url:         "https://brightpixel.example.com",
            location:    "Austin, TX",
            period:      "2018 — 2020",
            type:        "Full-time",
            description: "Translated complex design mockups into pixel-perfect, accessible interfaces for e-commerce and SaaS clients.",
            highlights: [
              "Shipped 20+ responsive websites with cross-browser compatibility back to IE11",
              "Developed a reusable SCSS framework that reduced project setup time from days to hours",
              "Collaborated closely with designers to build an interactive prototyping toolkit",
              "Earned 'Developer of the Quarter' award twice for consistent quality and velocity"
            ],
            tech: ["HTML5", "CSS3", "JavaScript", "Sass", "Gulp", "WordPress"]
          }
        ]
      }
    },

    /* ── Projects ─────────────────────────────────────── */
    {
      id:      "projects",
      type:    "projects",
      visible: true,
      heading: "Featured Projects",
      data: {
        intro: "A selection of projects I've built — from design systems to full-stack applications.",
        items: [
          {
            title:       "Nebula Design System",
            description: "A comprehensive, token-based design system powering 4 product teams. 60+ components, full documentation, and automated visual regression testing.",
            image:       "/assets/images/projects/placeholder.svg",
            imageAlt:    "Nebula Design System component library screenshot",
            category:    "Design Systems",
            url:         "https://github.com/alexrivera/nebula-ds",
            liveUrl:     "https://nebula-ds.example.com",
            featured:    true,
            tech:        ["React", "TypeScript", "CSS Custom Properties", "Storybook", "Chromatic"]
          },
          {
            title:       "TaskFlow",
            description: "A real-time project management application with drag-and-drop kanban boards, time tracking, and team collaboration features.",
            image:       "/assets/images/projects/placeholder.svg",
            imageAlt:    "TaskFlow kanban board interface",
            category:    "Web Application",
            url:         "https://github.com/alexrivera/taskflow",
            liveUrl:     "https://taskflow.example.com",
            featured:    true,
            tech:        ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "WebSockets"]
          },
          {
            title:       "Metric Dash",
            description: "An analytics dashboard builder with customizable widgets, real-time data streaming, and exportable reports.",
            image:       "/assets/images/projects/placeholder.svg",
            imageAlt:    "Metric Dash analytics dashboard",
            category:    "Web Application",
            url:         "https://github.com/alexrivera/metric-dash",
            featured:    true,
            tech:        ["React", "D3.js", "Node.js", "WebSocket", "Redis"]
          },
          {
            title:       "Portfolio Template",
            description: "A zero-dependency, data-driven portfolio template with full design system, dark mode, and GitHub Pages deployment. Built with vanilla HTML, CSS, and JavaScript.",
            image:       "/assets/images/projects/placeholder.svg",
            imageAlt:    "Portfolio template preview",
            category:    "Open Source",
            url:         "https://github.com/alexrivera/template-portfolio",
            liveUrl:     "https://alexrivera.dev",
            featured:    false,
            tech:        ["HTML5", "CSS3", "Vanilla JS", "GitHub Pages"]
          },
          {
            title:       "AccessLint CLI",
            description: "A command-line accessibility auditing tool that scans HTML files for WCAG violations and generates actionable reports.",
            image:       "/assets/images/projects/placeholder.svg",
            imageAlt:    "AccessLint CLI terminal output",
            category:    "Developer Tool",
            url:         "https://github.com/alexrivera/accesslint-cli",
            featured:    false,
            tech:        ["Node.js", "Puppeteer", "axe-core", "Commander.js"]
          },
          {
            title:       "ColorCraft",
            description: "An interactive color palette generator with accessibility contrast checking, export to CSS variables, and Figma plugin integration.",
            image:       "/assets/images/projects/placeholder.svg",
            imageAlt:    "ColorCraft color picker interface",
            category:    "Tool",
            url:         "https://github.com/alexrivera/colorcraft",
            liveUrl:     "https://colorcraft.example.com",
            featured:    false,
            tech:        ["Vanilla JS", "Canvas API", "CSS Custom Properties", "Web Components"]
          }
        ]
      }
    },

    /* ── Achievements ─────────────────────────────────── */
    {
      id:      "achievements",
      type:    "achievements",
      visible: true,
      heading: "Achievements & Recognition",
      data: {
        items: [
          {
            title:       "Google Developer Expert",
            organization: "Google",
            year:        "2024",
            description: "Recognized as a GDE in Web Technologies for contributions to the front-end community.",
            url:         "https://developers.google.com/community/experts",
            icon:        "trophy"
          },
          {
            title:       "Top Open Source Contributor",
            organization: "GitHub",
            year:        "2023",
            description: "Ranked in the top 1% of contributors for web accessibility tools and design system libraries.",
            icon:        "star"
          },
          {
            title:       "Speaker — CSSConf 2023",
            organization: "CSSConf",
            year:        "2023",
            description: "Presented \"Design Tokens at Scale: From Variables to a Unified Design Language\" to 500+ attendees.",
            url:         "https://cssconf.example.com/2023",
            icon:        "mic"
          },
          {
            title:       "Best UI Implementation Award",
            organization: "Awwwards",
            year:        "2022",
            description: "Honorable mention for the Nexus Digital client portal redesign — praised for accessibility and micro-interactions.",
            url:         "https://www.awwwards.com",
            icon:        "award"
          },
          {
            title:       "Published Article — Smashing Magazine",
            organization: "Smashing Magazine",
            year:        "2021",
            description: "\"Rethinking CSS Architecture for Large-Scale Applications\" — featured article reaching 200K+ readers.",
            url:         "https://www.smashingmagazine.com",
            icon:        "book"
          }
        ]
      }
    },

    /* ── Education ────────────────────────────────────── */
    {
      id:      "education",
      type:    "education",
      visible: true,
      heading: "Education",
      data: {
        items: [
          {
            degree:      "B.S. Computer Science",
            institution: "University of California, Berkeley",
            location:    "Berkeley, CA",
            period:      "2014 — 2018",
            gpa:         "3.8",
            description: "Focus on Human-Computer Interaction and Software Engineering. Dean's List all semesters.",
            achievements: [
              "Dean's List — 8 consecutive semesters",
              "Senior Capstone: Accessible Navigation System for Visually Impaired Users",
              "Teaching Assistant — CS 169: Software Engineering"
            ]
          }
        ]
      }
    },

    /* ── Certificates ─────────────────────────────────── */
    {
      id:      "certificates",
      type:    "certificates",
      visible: true,
      heading: "Certificates & Credentials",
      data: {
        items: [
          {
            title:        "Web Accessibility Specialist (WAS)",
            issuer:       "IAAP — International Association of Accessibility Professionals",
            date:         "2024",
            credentialId: "WAS-2024-08912",
            url:          "https://www.accessibilityassociation.org",
            icon:         "certificate"
          },
          {
            title:        "AWS Certified Developer — Associate",
            issuer:       "Amazon Web Services",
            date:         "2023",
            credentialId: "AWS-DVA-2023-45672",
            url:          "https://aws.amazon.com/certification",
            icon:         "cloud"
          },
          {
            title:        "Meta Front-End Developer Professional Certificate",
            issuer:       "Meta (Coursera)",
            date:         "2023",
            credentialId: "META-FE-2023-34521",
            url:          "https://www.coursera.org/professional-certificates/meta-front-end-developer",
            icon:         "badge"
          },
          {
            title:        "Google UX Design Professional Certificate",
            issuer:       "Google (Coursera)",
            date:         "2022",
            credentialId: "GOOG-UX-2022-78453",
            url:          "https://www.coursera.org/professional-certificates/google-ux-design",
            icon:         "pen"
          }
        ]
      }
    },

    /* ── Contact ──────────────────────────────────────── */
    {
      id:      "contact",
      type:    "contact",
      visible: true,
      heading: "Get In Touch",
      data: {
        intro:    "I'm currently available for freelance projects and full-time opportunities. Whether you have a project idea, a question, or just want to say hello — I'd love to hear from you.",
        email:    "alex@alexrivera.dev",
        location: "San Francisco, CA",
        availability: {
          status:      "available",
          label:       "Open to opportunities",
          description: "Available for freelance projects and full-time roles"
        },
        cta: {
          label:  "Send Me a Message",
          action: "mailto:alex@alexrivera.dev"
        }
      }
    },

    /* ── Social Media ─────────────────────────────────── */
    {
      id:      "social",
      type:    "social",
      visible: true,
      heading: "Connect With Me",
      data: {
        intro: "Find me across the web — I'm always happy to connect and collaborate.",
        links: [
          {
            platform: "GitHub",
            url:      "https://github.com/alexrivera",
            username: "@alexrivera",
            icon:     "github"
          },
          {
            platform: "LinkedIn",
            url:      "https://linkedin.com/in/alexrivera",
            username: "alexrivera",
            icon:     "linkedin"
          },
          {
            platform: "Twitter / X",
            url:      "https://x.com/alexrivera",
            username: "@alexrivera",
            icon:     "twitter"
          },
          {
            platform: "CodePen",
            url:      "https://codepen.io/alexrivera",
            username: "alexrivera",
            icon:     "codepen"
          },
          {
            platform: "Dev.to",
            url:      "https://dev.to/alexrivera",
            username: "alexrivera",
            icon:     "dev"
          },
          {
            platform: "Medium",
            url:      "https://medium.com/@alexrivera",
            username: "alexrivera",
            icon:     "medium"
          },
          {
            platform: "Dribbble",
            url:      "https://dribbble.com/alexrivera",
            username: "alexrivera",
            icon:     "dribbble"
          }
        ]
      }
    }
  ],

  /* ==========================================================
     FOOTER
     ========================================================== */
  footer: {
    copyright: {
      text:   "© 2024 Alex Rivera. Built with care using vanilla HTML, CSS, and JavaScript.",
      symbol: "©"
    },
    links: [
      { label: "GitHub",    url: "https://github.com/alexrivera",       icon: "github"    },
      { label: "LinkedIn",  url: "https://linkedin.com/in/alexrivera",  icon: "linkedin"  },
      { label: "Twitter",   url: "https://x.com/alexrivera",             icon: "twitter"   }
    ],
    attribution: {
      text: "template-portofolio",
      url:  "https://github.com/alexrivera/template-portfolio"
    }
  }

};

/* ── Export for ES Module consumers (future) ── */
/* export { portfolioData }; */
