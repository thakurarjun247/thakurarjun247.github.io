# Changelog

## 2026-07-10 — SEO / GEO optimization pass

Optimization of the existing site for traditional search (Google) and AI/generative
search (ChatGPT, Claude, Perplexity, Google AI Overviews). No pages, articles, layout,
or design were changed — technical SEO and structured-data improvements only.

### Fixed
- **sitemap.xml**
  - Added two live pages that were missing from the sitemap:
    - `/blog/two-agent-stacks-bedrock-vs-langgraph.html`
    - `/speaking/ship-sabha-ai-evaluations-chennai.html` (with image entry)
  - Corrected all `lastmod` dates from the stale `2026-05-04` to real modification dates.
  - Fixed the JWT post date mismatch (sitemap said `2025-11-15`; page is `2024-11-15`).
  - Adjusted `changefreq` values to be realistic (evergreen posts → `yearly`).
- **images/favicon/site.webmanifest**
  - Populated empty `name` and `short_name` (were `""`).
  - Fixed broken icon paths (`/android-chrome-*.png` → `/images/favicon/android-chrome-*.png`) that were returning 404.
  - Added `description`, `start_url`, `scope`, and icon `purpose`.
  - Aligned `theme_color`/`background_color` with the site's brand (cyan `#22d3ee` on dark `#0b0f15`).

### Added
- **Social share image** `images/og-cover.jpg` (1200×630)
  - Branded card (name, title, specializations, services, domain) replacing the previous
    400×400 square that mismatched the `summary_large_image` Twitter/OG card type.
  - Wired into `og:image` + `twitter:image` (with correct `1200×630` dimensions) on:
    index, resume, training, speaking, blog, contact.
  - The portrait `arjun.jpeg` is retained as the Person schema `image`.

### Structured data (JSON-LD) — entity graph
- **index.html**
  - Introduced stable `@id` anchors and cross-linked the entities so search/AI engines
    resolve them as one connected graph instead of separate duplicates:
    - Person → `https://arjunthakur.dev/#person`
    - Organization (Yuvan) → `https://arjunthakur.dev/#yuvan`
    - WebSite → `https://arjunthakur.dev/#website`
  - Person now references Yuvan via `worksFor` and `founder` (by `@id`);
    WebSite references Person via `about` / `publisher` / `author`;
    ProfilePage `mainEntity` references Person by `@id` (removed the duplicate inline Person).
  - Added `hasOccupation` (Occupation with skills) and `homeLocation` to Person.
  - Added `makesOffer` to Person — surfaces the sellable services as structured data:
    AI Engineering Consulting, AI Architecture / Fractional CTO, AI & Technical Training,
    Speaking & Workshops (training/speaking offers link to their pages).
  - Added `knowsAbout` to the Yuvan Organization.
  - Synced ProfilePage `dateModified` → `2026-07-02`.
- **resume.html**
  - Linked the resume's Person and Yuvan nodes to the same `@id`s for cross-page
    entity consolidation.
  - Synced ProfilePage `dateModified` → `2026-07-02`.

### Why it matters
- Cleaner crawl + fresh `lastmod` → faster (re)indexing of new content.
- Connected entity graph + `makesOffer`/`hasOccupation` → stronger entity recognition and
  better eligibility to be cited by AI search for queries about the person and services.
- Valid manifest + correct social image → fixes a Best-Practices/PWA gap and produces
  proper link previews when the site is shared.

### Notes
- All JSON-LD validated (0 parse errors), sitemap and manifest verified well-formed.
- Not changed: robots.txt, llms.txt, page copy, CSS/JS, layout.
- Still the biggest remaining lever (not addressed here, by request): publishing more
  first-hand technical content to build topical authority.
