# 🚀 Master LP: High-Performance Landing Page Template

A "God Tier" landing page engine built for speed, conversion, and effortless rebranding. This template leverages the power of **Astro 5**, **Tailwind 4**, and **Alpine.js** to deliver 100/100 Lighthouse scores and a premium user experience.

---

## 🛠 The Tech Stack

- **Framework:** [Astro 5](https://astro.build) (Zero-JS baseline performance)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com) (Variable-based design system)
- **Interactivity:** [Alpine.js](https://alpinejs.dev) (Lightweight global state management)
- **Forms:** [Formspree](https://formspree.io) (Serverless lead capture)
- **Analytics:** [PostHog](https://posthog.com) & [GA4](https://analytics.google.com) (Session replays and event tracking)

---

## 📂 Project Structure

```text
/
├── public/               # Static assets (Favicons, OG Images, SVGs)
├── src/
│   ├── components/       # Atomic UI Sections
│   │   ├── Analytics.astro  # Google & PostHog injection
│   │   ├── Contact.astro    # Full contact form with AJAX logic
│   │   ├── FAQ.astro        # Interactive Alpine.js accordions
│   │   ├── Features.astro   # Value proposition grid
│   │   ├── Header.astro     # Sticky navigation with scroll tracking
│   │   ├── Hero.astro       # Lead gen & Waitlist logic
│   │   ├── Metadata.astro   # SEO & Social Card management
│   │   ├── Pricing.astro    # Tiered pricing with tactile hover effects
│   │   └── Team.astro       # Team grid with social overlays
│   ├── layouts/
│   │   └── Layout.astro     # Main shell (Toaster, Global Head, Slots)
│   ├── scripts/
│   │   └── alpine-store.js  # Global UI Store (Toasts, Navigation, Scroll)
│   ├── styles/
│   │   └── global.css       # Tailwind 4 Theme & Custom Animations
│   └── pages/
│       ├── 404.astro        # Custom Error page
│       └── index.astro      # Main Landing Page entry point
├── astro.config.mjs      # Integrations & Site configuration
└── package.json          # Project dependencies & scripts
```
