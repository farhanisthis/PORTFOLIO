# Kashish Portfolio — Build Brief for Antigravity

## Where things are

This brief assumes a folder layout like:

```
Kashish Works/
├── master_inventory.csv       (or wherever the forensic audit files live)
├── master_inventory.md
├── portfolio_analysis.md
└── portfolio/                  ← reference/spec files below live here
    ├── antigravity-build-brief.md   (this file)
    ├── kashish-portfolio-concept.html   (homepage reference)
    ├── work-trevoc.html                (case study reference)
    └── work-archive.html               (All Work / archive reference)
```

If `master_inventory.csv` isn't inside `portfolio/`, search the parent `Kashish Works` folder (and its subfolders) for it before starting Step 1 — don't guess at file paths.

The three HTML files are **visual/interaction references**, not final code to reuse verbatim — they use placeholder gradient blocks standing in for real creative. Your job is to reproduce their structure, layout, and motion using real assets from the archive, not to ship the placeholder art.

---

## Step 1 — Select real assets from the CSV, not the folder blind

Don't browse the raw folder by eye first — it has ~6,151 files and only 2,421 are creative work. Query `master_inventory.csv` instead:

- Filter `recommendation == "FEATURE"` — these are the pre-scored best-of assets.
- Sort by `score_portfolio` descending within each `client`.
- Cross-reference `score_aesthetic`, `score_technical`, `score_commercial` — an asset strong on all four is a safer hero pick than one strong on portfolio score alone.
- Use `aspect_ratio` to slot images correctly (hero banners need 16:9 or wide; story/reel content is 9:16; grid work is often square or ultra-wide panoramic).
- `path` gives you the exact file location — open and visually sanity-check the top 15–20 before locking anything in. The scoring is a filter, not a final decision.

**Output of this step:** a shortlist of 5 campaigns (the references use Trevoc / Indus Valley / Kreeva / Elevate Vanya / ETH Infra by asset volume — re-verify by score + actual visual quality, not volume) and, per campaign, 1 hero image + 3–6 supporting images/videos, plus a handful of representative tiles per discipline category for the archive page (Social, EDM, Grid/SVS, Motion, Print, HR/Corporate, Brand).

## Step 2 — Flag anything unresolved before building further

Cross-check `client` against known confidential/celebrity work — the Trevoc celebrity campaign (Saif & Kareena) in particular needs sign-off before public display. Don't block the whole build on this — just don't publish that specific section until confirmed. Produce a short "needs clearance" list and hand it back.

## Step 3 — Asset preparation

For every selected image/video:
- Export web-ready: JPG/WebP for stills, MP4 (H.264) for motion, resized to actual display dimensions (don't ship a 12960×5400 SVS grid file at full size — max long edge ~2400px for hero images, ~1600px for supporting).
- Consistent naming: `client-slug_role_index.ext` (e.g. `trevoc_hero_01.webp`).
- Put them in `/public/work/<client-slug>/`.

## Step 4 — Site structure

Static site, no CMS needed for 5 case studies:

```
/
├── index.html                 (homepage — adapt kashish-portfolio-concept.html)
├── work/
│   ├── trevoc.html             (adapt work-trevoc.html)
│   ├── indus-valley.html
│   ├── kreeva.html
│   ├── elevate-vanya.html
│   └── eth-infra.html
├── archive.html                (adapt work-archive.html — "All Work")
├── about.html                  (or fold into homepage footer, as in the concept)
├── /assets/css/style.css       (extract shared CSS across the three reference files)
├── /assets/js/main.js
└── /public/work/<client>/...   (images/video from Step 3)
```

Vanilla HTML/CSS/JS — no framework needed. Add `loading="lazy"` on below-the-fold `<img>` tags, serve WebP with a JPG fallback.

## Step 5 — Design tokens (carry over exactly, don't reinterpret)

```css
--ink: #1C1B18;          /* text */
--ink-soft: #514E45;     /* secondary text */
--brass: #A9834F;        /* accent — sparing use: hover states, one glow moment, rings */
--paper: #EFEBE0;
--line: rgba(28,27,24,0.14);
--bg: #F3F0E8;            /* page canvas — light warm off-white, not dark */

Display type: Fraunces (serif) — headlines, campaign names, the parenthetical role line
Body/UI type: IBM Plex Sans — everything else
```

Locked visual language (do not drift from this without flagging back):
- **Light canvas, not dark** — background is a warm off-white (`#F3F0E8`), not the earlier stone-grey/dark-moody direction. Imagery/photography is where the richness lives, not the page chrome.
- **Soft brass glow** behind the hero title (radial-gradient, centered, low opacity) — see `.hero-glow` in `kashish-portfolio-concept.html`.
- **Thin orbit-ring line accents** (SVG circles/arcs, ~10–20% opacity) — used behind the hero and behind case-study photos. These are meant to read as real-estate site-plan radius rings, not generic decoration — keep them thin, sparse, and never more than 2–3 per section.
- **Parenthetical role line** under the hero name: `( Graphic Designer — Digital, Brand & Motion )` in italic Fraunces.
- **Grain overlay** (SVG feTurbulence, ~5% opacity, mix-blend overlay) across every page — this is what keeps it from looking flat/generated. Don't drop it.
- Case-study "Context" sections follow this exact pattern (see `work-trevoc.html`): headline top, two stacked labeled text blocks ("Project goal" / "Design decision") on the left, one photo with a ring accent on the right.

## Step 6 — Homepage

Rebuild `kashish-portfolio-concept.html` with real images:
- Hero: real name/role stays, glow + rings stay, no image needed here — it's typographic.
- Directory list ("Selected Work"): swap the 5 `art-*` CSS gradient classes for real hero image thumbnails (used in the cursor-following preview).
- Horizontal rail: swap the 5 placeholder cards for real campaign hero shots.
- Case study teaser: point at whichever campaign has the strongest hero image — link to its full case study page.
- Each directory row and rail card links to `/work/<client>.html`; "View all →" links to `/archive.html`.

## Step 7 — Case study page template (build once from work-trevoc.html, populate 5×)

Structure per campaign:
1. Hero — full-bleed hero image, campaign name, year, discipline tags
2. Context — headline + two labeled text blocks + photo w/ ring accent (see Step 5 locked pattern). Use real `objective` text from the CSV, don't invent.
3. Inspiration — 1–2 sentences of real design reasoning + a small reference/moodboard grid if you have supporting material; otherwise keep this section short rather than padding it
4. Approach — 2–3 short cards on actual design decisions made for that campaign
5. Execution — 6–10 real supporting images/video in a mosaic grid, captioned with what each piece actually is
6. System — format-adaptation grid (1:1 / 9:16 / 16:9) where the campaign has multi-format assets (Trevoc, ETH, Central Vista all do per the inventory)
7. Result — factual only: asset count, formats shipped, timeframe. No invented metrics.
8. Footer nav to next case study

## Step 8 — Archive / All Work page

Rebuild `work-archive.html` with real thumbnails:
- Filter buttons stay (All / Social / EDM / Grid-SVS / Motion / Print / HR-Corporate / Brand) with real counts from the CSV.
- Replace the 6 sample tiles per category with real representative assets — pull the top-scoring `SUPPORTING` and `FEATURE` assets per `primary_category`, not just the first 6 alphabetically.
- Keep the stats bar (total deliverables, campaign count, client count) driven from real CSV aggregates, not the placeholder numbers.

## Step 9 — QA pass before calling it done

- Every image has real `alt` text describing the actual creative (not filenames).
- Test on mobile width (375px) — verify directory rows, rail cards, context grid, and archive grid all stack correctly (mobile breakpoints already exist in all three reference files — carry them over).
- `prefers-reduced-motion` — already respected in the references; keep it.
- Run Lighthouse or similar — image weight is the main risk; confirm nothing over ~500KB shipped.

## Do not

- Don't invent client results, testimonials, or metrics not present in the CSV.
- Don't publish the Trevoc celebrity campaign until clearance is confirmed (Step 2).
- Don't revert to a dark background or drop the glow/rings/grain — that direction is locked from design review, not a default to second-guess.
- Don't restyle beyond what's specified without flagging it back — if something breaks once real images are in place, that's worth a design iteration, not a silent change.
