# Portfolio Revamp: Obsidian & Ember Design System

Complete overhaul of `Harsh502s.github.io` using the **"Obsidian & Ember"** design system from Stitch project.

## What Changes

**Current state:** White-background, Poppins font, blue (#1d4ed8) accent, particles.js background, basic card layout. Feels dated.

**Target state:** Dark (#131313) deep-space aesthetic, Electric Violet (#8750F7) primary + Solar Orange (#FE6B00) accent, Epilogue + Plus Jakarta Sans typography, glassmorphism nav, glowing progress bars, luminous hover states, generous spacing (120px sections). Premium, editorial feel.

## User Review Required

> [!IMPORTANT]
> **Content stays yours.** Bio text, project descriptions, links, images — all preserved. Only visual treatment changes.

> [!IMPORTANT]
> **Single-page static site.** No framework migration. Stays as HTML + CSS + JS. GitHub Pages compatible.

> [!IMPORTANT]  
> **Particles.js removal.** Replacing with CSS radial gradient "light leak" effects and ambient mist overlays. Lighter, more performant, and aligned with Obsidian & Ember aesthetic. OK?

> [!WARNING]
> **Social links:** Stitch design has Dribbble/Twitter — keeping your actual links (LinkedIn, GitHub, HuggingFace, Kaggle) instead.

## Open Questions

1. **Profile photo shape:** Current site has morphing blob border-radius animation. Keep that quirky touch or switch to rounded rectangle matching design system?
2. **Additional sections:** Stitch design has Experience/Education timeline. Want me to add those sections (with placeholder content you can fill)? Or keep current 5-section structure (Home, About, Skills, Projects, Contact)?

## Proposed Changes

### Design Tokens & CSS (`styles.css`)

Complete rewrite. New design system foundation:

#### [MODIFY] [styles.css](file:///d:/Github/Harsh502s.github.io/styles.css)

- **Fonts:** `@import` Epilogue (headlines 800/700/600) + Plus Jakarta Sans (body 400, labels 600)
- **CSS Variables:**
  - `--surface`: #131313 (base bg)
  - `--surface-container`: #201f1f (card bg)
  - `--surface-container-high`: #2a2a2a (elevated cards)
  - `--on-surface`: #e5e2e1 (primary text)
  - `--on-surface-variant`: #ccc3d7 (secondary text)
  - `--primary`: #8750F7 (Electric Violet)
  - `--primary-light`: #d1bcff (light violet)
  - `--secondary`: #FE6B00 (Solar Orange)
  - `--secondary-light`: #ffb693
  - `--outline-variant`: #4a4455 (ghost borders)
- **Typography scale:** display-xl (72px), headline-lg (48px), headline-md (32px), body-lg (18px), body-md (16px), label-md (14px)
- **Spacing:** 8px base unit, 120px section padding, 1280px max-width
- **Shapes:** 0.5rem default, 1rem cards, 1.5rem containers, 3rem pill buttons
- **Glassmorphism nav:** `backdrop-filter: blur(20px)`, semi-transparent surface-container-lowest bg
- **Glowing progress bars:** Violet→Orange gradient fill with leading-edge box-shadow glow
- **Hover states:** 1.05x scale + primary glow (`box-shadow: 0 0 20px rgba(135, 80, 247, 0.2)`)
- **Light leak hero:** Large radial gradients of violet/orange in hero background
- **Mist overlays:** Subtle radial gradients at screen corners (5% opacity)
- **No 1px borders for sections** — tonal layering only
- **Project cards:** Semi-transparent bg, ghost border, violet border on hover, image scale 1.05x
- **Buttons:** Primary = violet→orange gradient pill. Secondary = transparent + ghost border
- **Chips/tags:** Border-only, label-md typography
- **Responsive:** Mobile-first, breakpoints at 768px and 1024px

---

### HTML Structure (`index.html`)

#### [MODIFY] [index.html](file:///d:/Github/Harsh502s.github.io/index.html)

- **`<head>`:** Add Google Fonts (Epilogue, Plus Jakarta Sans), meta description, update title
- **Nav:** Glassmorphism nav with logo "HARSH" styled, same 5 links
- **Hero:** Full-viewport height, display-xl title "Harshit Singh", gradient subtitle text, violet→orange CTA button (pill), social icons as circular icon buttons with backdrop blur
- **About:** Two-column layout (photo + text) on `surface-container` bg, generous padding, keep your bio text
- **Skills:** Glowing progress-bar style skill chips. Technical skills with icon + label + glowing bar
- **Projects:** Grid of project showcase cards (dark semi-transparent bg, ghost border). Each card: image with hover scale, headline-md title, body text, tech stack as border-only chips, code/demo links
- **Contact:** Contact boxes on elevated surface, icon + info
- **Footer:** Dark surface bg, social icons, updated copyright year
- **Remove:** particles.js `<div>` and scripts. Remove `app.js`, `particles.js` script tags

---

### JavaScript (`js/main.js`)

#### [MODIFY] [main.js](file:///d:/Github/Harsh502s.github.io/js/main.js)

- Keep mobile menu toggle logic
- Keep ScrollReveal with updated selectors matching new HTML
- Add: smooth scroll behavior, active nav link highlight on scroll (IntersectionObserver)
- Remove: particles.js initialization

---

### File Cleanup

#### [DELETE] References to `particles.json`, `js/app.js`, `js/particles.js` from HTML
- Keep actual files in repo (won't break anything, user can clean later)

---

## Section-by-Section Design Spec

### 1. Hero Section
- Full viewport height, flexbox centered content
- Background: Two large radial gradients (violet top-right, orange bottom-left) at 15% opacity, creating "light leak"
- Animated subtle floating particles via CSS (optional, 2-3 soft glowing dots)
- "Harshit Singh" in `display-xl` (72px, Epilogue 800, white)
- Subtitle: "Machine Learning | Deep Learning | NLP" with gradient text fill (white → lavender)
- CTA: "Resume" pill button, `linear-gradient(135deg, #8750F7, #FE6B00)`, white text
- Social row: Circular icon buttons, `backdrop-filter: blur(10px)`, hover glow

### 2. About Section
- Background shift to `surface-container` for tonal separation
- Two-column: morphing-blob photo left, text right
- Section title: "About Me" in `headline-lg`, `primary-light` color
- Body text in `body-lg`, `on-surface` color

### 3. Skills Section
- Back to `surface` background
- Section title: "Technical Skills" in `headline-lg`
- Skills displayed as horizontal bars:
  - Track: `surface-container-high` background
  - Fill: `linear-gradient(90deg, #8750F7, #FE6B00)` with leading-edge glow
  - Each skill: icon + name + animated fill bar
- Existing skills: Python, SQL, Machine Learning, Deep Learning, NLP

### 4. Projects Section
- Background: `surface-container-low` (#1c1b1b)
- 2-column grid on desktop, 1-column mobile
- Each card:
  - `surface-container` bg, 1px `outline-variant` border at 10% opacity
  - Image top with `border-radius: 1rem` on top corners
  - `headline-md` title, `body-md` description
  - Tech chips: border-only, `label-md`
  - Links row: Code (GitHub icon) + Demo (link icon)
  - Hover: border → primary violet, image scale 1.05x, subtle glow
- Keep all 4 existing projects with real data

### 5. Contact Section
- `surface` background
- Section title in `headline-lg`
- Two cards side-by-side: email + location
- Cards: `surface-container-high` bg, rounded-lg, hover glow

### 6. Footer
- `surface-container-lowest` bg
- Social icons: GitHub, Instagram, Twitter
- Copyright: "© 2025 Harshit Singh. Built with Visionary Aesthetics."

## Verification Plan

### Automated Tests
- Open `index.html` in browser via file protocol
- Visual check all 5 sections render correctly
- Test mobile nav toggle
- Verify no console errors (particles.js removed cleanly)
- Check responsive at 375px, 768px, 1440px widths

### Manual Verification
- Glassmorphism nav transparency visible on scroll
- Hover glow effects on buttons, cards, social icons
- Progress bar gradient + glow renders
- Light leak radial gradients visible in hero
- All project links still functional
- Profile image still loads