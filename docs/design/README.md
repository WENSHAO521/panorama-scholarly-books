# Panorama Scholarly Books: Redesign Notes

This document covers the redesign brief stages A–F (audit, direction, foundations, components, states, handoff). The design is implemented in code, so the running site is the reference. Every token and component named here exists in `src/`.

---

## A. Audit of the previous site

**Kept (brand equity)**
- The three offset rectangles in the Panorama mark. The geometry is unchanged and only the colours are new: forest, sage and gold in place of greys.
- A serif-led editorial voice, ruled lists and generous margins.
- Trilingual routing (`/`, `/zh-hant`, `/zh-hans`) and per-string localisation.
- The scholarly safeguards already in place: `citationEligible` gating for Google Scholar tags, JSON-LD and the sitemap.

**Problems found**

| Area | Issue |
|---|---|
| Content integrity | 11 of 12 catalogue entries were development fixtures with non-real authors, ISBNs (`978-3-987650-…`) and DOIs. They were shown publicly as "Published", next to the one real title. |
| Navigation | 10 top-level links plus a CTA. Nothing was grouped, and the full nav only appeared at ≥1280px. |
| Visual | The palette was pure greyscale (#111 / #555 / #888). #888 on white is 3.5:1, which fails AA for body text. Small serif uppercase was used for UI labels. |
| Homepage | The hero filled the viewport but held only a wordmark. Pricing bundles and long legal notices sat on the homepage, so it read like a sales page. |
| Book page | The metadata table was 12px. Covers were forced into a 2:3 crop. There was one citation style and no copy action. Section navigation was missing. |
| Catalogue | Eight filter tabs for types that mostly had no real books. There was no "few titles" state. |
| Accessibility | No skip link, no visible custom focus style, the language dropdown used `listbox` semantics on links, and there was no reduced-motion handling. |

## B. Directions explored

| | **A: Academic Editorial Minimalism** (chosen) | B: Contemporary Scholarly Publishing |
|---|---|---|
| Type | Source Serif 4 (opsz) for display and reading, with Source Sans 3 for UI | Sans-led (Inter) with serif only for book titles |
| Grid | 12 columns with asymmetric 4/8 and 5/7 splits and hairline rules | Even 3–4 column card modules |
| Colour | Unohana paper, Kinari stone, Fukamidori green, Kincha gold rules | White surfaces with green as an accent and tinted cards |
| Rhythm | Long vertical sections separated by rules and plenty of white space | Dense, card-driven sections |
| Covers | Real aspect ratio, a "book on a shelf" stage, drop shadow | Uniformly cropped tiles |
| Few books | Wide catalogue-record entries with typography carrying the page | Grid looks empty |

Direction A was chosen because it handles a 1-book catalogue gracefully, fits the Japanese-minimal brief, and avoids looking like a store.

## C. Foundations (`src/app/globals.css`)

### Colour tokens: Japanese traditional palette

| Token | Hex | Name | Use | Contrast on paper |
|---|---|---|---|---|
| `paper` | #F7F5EF | 卯の花 Unohana | page background | n/a |
| `surface` | #FCFBF8 | 白練 Shironeri | inputs, raised panels | n/a |
| `stone` / `stone-soft` | #E9E4D8 / #F0ECE3 | 生成り Kinari | secondary surfaces | n/a |
| `ink` | #252B28 | 墨 Sumi | primary text | 13.2:1 |
| `ink-2` | #474E49 | 鈍色 Nibi | secondary text | 7.9:1 |
| `ink-3` | #5F6660 | 利休鼠 Rikyū-nezumi | metadata | 5.4:1 (4.7:1 on stone) |
| `forest` | #173D32 | 深緑 Fukamidori | brand, primary actions, links | 11.0:1 |
| `gold` | #A6855B | 金茶 Kincha | rules and accents only (3.1:1, non-text) | n/a |
| `gold-ink` | #7A5E3A | n/a | small gold text (eyebrows) | 5.5:1 |
| `on-forest` / `on-forest-2` | #F7F5EF / #B9C4BD | n/a | text on the green footer | 11.0:1 / 6.7:1 |
| `line` / `line-soft` / `line-strong` | #DDD6C7 / #E9E4D8 / #B7AE9C | n/a | rules and borders | n/a |

### Type

| Class | Family | Size | Notes |
|---|---|---|---|
| `type-display` | Serif 500 | clamp 40→72px | hero only |
| `type-h1` | Serif 500 | clamp 34→52px | page titles |
| `type-h2` | Serif 500 | clamp 26→36px | sections |
| `type-h3` | Serif 600 | 20px | sub-sections |
| `lede` | Serif | 18→21px | introductions |
| `prose-reading` | Serif | 17px / 1.75, max 68ch | abstracts, bios, policies |
| `eyebrow` | Sans 600, caps, 0.14em | 12px | section labels (no caps or wide tracking for CJK) |
| `meta` | Sans | 14px | metadata |

CJK falls back per character to Noto Serif/Sans SC or TC. Language-tagged elements (`lang="zh-Hans"` on a Simplified-Chinese title shown on a Traditional page) keep their correct glyph set. CJK text gets a line-height of 1.85–1.95 and headings 1.3–1.4. German uses `hyphens: auto`, and Source Serif and Sans load the `latin-ext` subsets.

### Layout and spacing
- 1200px content width with 20px gutters on mobile and 32px from tablet up (`.site-container`). Reading column is 760px (`<Container narrow>`).
- The grid is 12 columns on desktop and a single column on mobile, with 2-up book grids. Spacing follows Tailwind's 4px scale, and sections use 64/96px vertical rhythm.
- Book covers always render at their intrinsic ratio (`coverSize` on the book record), and are never cropped.

## D. Components

| Component | File | States |
|---|---|---|
| Header / nav | `components/Nav.tsx` | default, hover (line underline), current (gold underline + `aria-current`), focus ring, sticky with a hairline after scroll, menu sheet below 1280px |
| Search dialog | `components/SearchDialog.tsx` | native `<dialog>`, opened with `/`; states for empty hint, results (live count), no results, and "see all results" (routes to `/books/?q=`) |
| Language menu | `components/LanguageMenu.tsx` | compact `EN / 繁 / 简` disclosure with native-name options and a check on the current language; inline segmented variant in the mobile menu |
| Buttons | `.btn-primary`, `.btn-secondary`, `.btn-quiet`, `.btn-on-dark`, `.btn-sm` | hover, active, focus-visible, disabled (`:disabled` or `aria-disabled`); minimum height 44px |
| Links | `.link`, `.link-arrow` | underline colour shifts on hover; the arrow nudges 3px |
| Tag | `.tag` | static labels and removable filter chips |
| Book card / entry | `components/BookCard.tsx` | grid card (cover on a stone "shelf", lifts on hover) and a wide entry for ≤2 results |
| Book cover | `components/BookCover.tsx` | real image, or a typographic placeholder for real titles with no cover |
| Citation block | `components/CiteBlock.tsx` | PSG / APA 7 / BibTeX tabs (arrow keys); copy states idle → copied (announced) → failed (text auto-selected with a hint) |
| Monogram | `components/Monogram.tsx` | initials or the last two CJK characters, used instead of a portrait. Photos are never generated. |
| Page header | `components/PageHeader.tsx` | eyebrow, title, lede, slot |

Loading states are not designed because the site is static and nothing loads asynchronously.

## E. Page patterns

- **Home:** hero (positioning line + intro + two actions, and a brand colophon listing the real fields of publication); latest publication; book series (all open for proposals, with no invented volumes); Publishing with Panorama (four pillars plus the ISBN notice); news; footer. The featured block switches from wide entries (≤2 books) to a 4-up grid automatically.
- **Catalogue:** search, plus subject / language / type filters and sort (shown once there are more than 3 titles). Includes a live result count, removable chips, an empty state with reset, and wide entries when results are ≤2. State is kept in the URL (`?q=&subject=&lang=&type=&sort=`).
- **Book detail:** breadcrumb; cover with formats and access (download buttons appear *only* when `pdfUrl` / `epubUrl` exist); title, subtitle, English title translation, contributors (romanised on English pages), subjects, a short description, key facts (ISBN, eISBN, DOI only when present), and actions. Below that: an "On this page" rail (sticky on desktop, chip row on mobile), Description, Contents, About the Author, Publication Details + licence, Cite, and Related (hidden when there are none).
- **Authors, Series, Publish With Us, About, Policies, Contact:** the same tokens, eyebrow/heading hierarchy and gold list markers, with long-form text kept within the reading measure.

## F. Content rules enforced in code

- `catalogue` in `src/data/books.ts` excludes every entry without `citationEligible: true`. Sample entries get no pages, search results, sitemap entries or author profiles.
- To test dense layouts, run `NEXT_PUBLIC_SHOW_SAMPLE_BOOKS=1 npm run build`. Each sample then carries a visible **"Sample data — not a real publication"** badge.
- News items (`src/data/news.ts`) and series (`src/data/series.ts`) hold only real, verifiable statements.

## Responsiveness and accessibility checks

- Verified at 390, 768, 1024, 1280 and 1440px with no horizontal overflow (Playwright, `scrollWidth − innerWidth = 0`).
- German stress test: nav labels such as "Autorinnen und Autoren" and "Mit uns veröffentlichen" fit from 1280px. Below that the menu sheet is used, and type is never shrunk to fit.
- Skip link, visible 2px focus ring, `aria-current` on nav, a labelled search dialog, live regions for result counts and copy status, and colour never used as the only signal (chips carry text, the active nav item carries an underline).
- `prefers-reduced-motion` disables transitions and smooth scroll.

## Figma handoff mapping

Code is the source of truth. A Figma library should mirror these names one-to-one:

| Figma page | Source |
|---|---|
| 01 Design Principles | this document, sections A–B |
| 02 Brand & Foundations | the colour and type tables above; logo in `components/Logo.tsx` |
| 03 Design Tokens | the `@theme` block in `globals.css` (Figma variables: `color/paper`, `color/ink-2`, …) |
| 04 Components | the table in section D (variants = the states listed) |
| 05/06 Desktop & Mobile Screens | live pages at 1440 / 390 |
| 07 Prototype | flows: Home → Book; Search → Results; Language switch; Mobile menu |
| 08 Developer Handoff | this file |

## Reference screenshots

`docs/design/screens/` contains production-build captures at 1440px and 390px: home (EN and 简体), book detail, catalogue and Publish With Us. Regenerate them after visual changes.
