# Portfolio Redesign Plan

**Date:** 2026-05-21
**Scope:** `index.html`, `styles.css`, `js/main.js`
**Constraint:** No new dependencies. Stays HTML + CSS + vanilla JS. GitHub Pages compatible.

---

## Audit Findings

1. **Centered everything** — hero, section titles, about, contact. All symmetrical.
2. **Purple/blue AI gradient fingerprint** — `#8750F7` → `#FE6B00` gradient everywhere.
3. **Skill bars = cliché** — fake percentages ("90% Python").
4. **About text too wide** — no `text-wrap: balance`.
5. **No noise/grain overlay** — pure flat dark surfaces feel sterile.
6. **Hover states basic** — `translateY(-5px)` only. No active/pressed feedback.
7. **No `min-height: 100dvh`** — iOS Safari viewport bug.
8. **No skip-to-content link** — accessibility gap.
9. **No meta tags** — missing `og:image`, `description`.
10. **Nav in uppercase** — `text-transform: uppercase` on nav links.
11. **Generic "Show More" pill button** — same style as Resume CTA.

---

## Decisions

| Area | Choice |
|------|--------|
| Skill display | Tile grid with proficiency dots (●●●○○) |
| Hero layout | Asymmetric / broken grid |
| Color palette | Desaturate existing violet + orange |

---

## Execution Order

1. CSS Variables — desaturate colors, add tinted shadows, noise overlay
2. Typography — `text-wrap: balance`, tighter tracking, sentence-case nav
3. Hero — left-align, offset social, `100dvh`, asymmetric positioning
4. Skills — replace bars with tile grid, dot indicators
5. Projects — asymmetric grid, spotlight hover, spring easing
6. Contact — single block layout
7. Footer — minimal, remove inactive links
8. Meta tags — description, og:image, favicon, skip-to-content
9. JS — spotlight cursor tracking, IntersectionObserver for nav

---

## Color Changes

| Variable | Old | New |
|----------|-----|-----|
| `--primary` | `#8750F7` | `#7C5CE0` |
| `--secondary` | `#FE6B00` | `#D45E00` |
| `--primary-light` | `#d1bcff` | `#c4aedb` |
