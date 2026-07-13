# Checklist

Reference for what to update whenever content changes. Two scenarios below.
`YYYY-MM-DD` = today. `<slug>` = the post filename without `.html`.

> **Agent instructions:** When the user says "read checklist," follow the relevant section (A or B),
> make all the required edits, and **at the end of your response ALWAYS give the exact PowerShell
> commit command** for the user to run — filled in with a real message, e.g.
> `.\git.ps1 "Add blog: <title>"`. The user runs it themselves; do not run git.

---

## A. New blog post

Create `blog/<slug>.html` (copy an existing post in `blog/` as the template — it already has the
correct relative paths `../`, nav with the Blog link, Article + BreadcrumbList JSON-LD, and the
author callout). Then update these **5** files:

- [ ] **`blog/<slug>.html`** — the post itself. Update in the copied template:
  - `<title>`, `meta description`, `meta keywords`, `canonical`
  - Open Graph: `og:url`, `og:title`, `og:description`, `article:published_time`, `article:tag` (one per tag)
  - Twitter: `twitter:title`, `twitter:description`
  - JSON-LD **Article**: `headline`, `description`, `url`, `datePublished`, `dateModified`, `keywords`, `timeRequired` (reading time)
  - JSON-LD **BreadcrumbList**: position 3 `name`
  - Visible header: date, reading time, `<h1>`, tags
  - Body content
- [ ] **`blog.html`** — the index. Two edits:
  - Add a `<article class="blog-card">` at the **top** of `.blog-grid` (newest first). Include emoji thumbnail, `<time datetime>`, `<h2>`, description, 3 tags, Read More link to `blog/<slug>.html`.
  - Add a matching entry at the **top** of the JSON-LD `CollectionPage` → `hasPart` array (`@type: Article`, name, url, datePublished, description, author).
- [ ] **`sitemap.xml`** — add a `<url>` block for `blog/<slug>.html` (`lastmod` today, `changefreq` monthly, `priority` 0.7). Also bump `blog.html`'s `<lastmod>` to today.
- [ ] **`feed.xml`** — add an `<item>` at the **top** of the item list (title, link, guid, `pubDate` in RFC-822 e.g. `Mon, 13 Jul 2026 00:00:00 +0000`, description, author, categories). Also bump `<lastBuildDate>` to today.
- [ ] **`sitemap.html`** — add a `<div class="project-card">` under the **Writing** section linking to the new post.

Optional / judgment call:
- [ ] **`llms.txt`** — only lists `/blog.html` generally, not individual posts, so no per-post edit is required. Optionally add a "Latest Articles" section if you want AI crawlers to see individual posts.
- [ ] **`CHANGELOG.md`** — add an entry if you're tracking changes.
- [ ] **`social/`** — optional promo copy (LinkedIn/X/Medium), mirroring existing `social/*-post-*` files. Note: `social/` is `Disallow`ed in robots.txt.

**Do NOT need updating per post:** `robots.txt` (wildcard `Allow: /`), `404.html`, `index.html` (no per-post list), `README.md`, training/service pages.

---

## B. New page (non-blog, e.g. a new service or training page)

- [ ] **The page itself** — full SEO head: title, description, keywords, canonical, OG, Twitter, favicon block, JSON-LD (appropriate `@type` + BreadcrumbList), nav, footer. Copy an existing top-level page as template (root-relative paths, no `../`).
- [ ] **`sitemap.xml`** — add a `<url>` block (pick sensible `changefreq`/`priority`).
- [ ] **`sitemap.html`** — add a `project-card` under the right section (Main / Training & Mentoring / Writing).
- [ ] **`llms.txt`** — add a bullet under `## Site Pages` (top-level pages ARE listed here).
- [ ] **Nav menu** — if it's a primary page, add `<li>` to the `.nav-menu` in **every** page's navbar (they're hardcoded per file, not shared). Current nav: Home, Consulting, Training, Speaking, Blog, Resume, FAQ, Contact.
- [ ] **`CHANGELOG.md`** — optional entry.

**Do NOT need updating:** `robots.txt` (wildcard), `feed.xml` (blog-only).

---

## Gotchas
- Blog posts live in `/blog/` → use `../` relative paths. Top-level pages use root-relative (`/` or bare).
- Nav bars are **copy-pasted into every file** — there's no shared include. A nav change means editing every page.
- CSS/JS are cache-busted via `?v=YYYYMMDD-n` query strings. Bump these only if you change `css/style.css` or `js/main.js`.
- `feed.xml` dates are RFC-822 (`Mon, 13 Jul 2026 ...`); `sitemap.xml` and JSON-LD dates are ISO (`2026-07-13`). Don't mix them.
- Keep the JWT post's date as `2024-11-15` everywhere (it was previously mismatched — see CHANGELOG).
- Validate JSON-LD after editing (no trailing commas, valid JSON).

---

## Commit (Windows PowerShell, from repo root)
```powershell
.\git.ps1 "Add blog: <title>"
```
Runs pull → add . → status → commit → push.
