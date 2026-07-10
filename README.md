# arjunthakur.dev

Personal site of **Arjun Thakur** — Principal AI Engineer, Fractional CTO, and
founder of Yuvan. Static site hosted on GitHub Pages.

Live: https://arjunthakur.dev

## GEO / AI-search optimization

This repo doubles as a working example of Generative Engine Optimization — making
a site findable and citable by ChatGPT, Claude, and Perplexity. See the write-up:
https://arjunthakur.dev/blog/how-i-optimized-my-site-for-llms.html

Key pieces to copy:
- `llms.txt` — plain-text profile for AI/LLM crawlers
- JSON-LD entity graph (`@id`-linked Person / Organization / WebSite) in the page `<head>`s
- `FAQPage` schema on FAQ and service pages
- `robots.txt` — explicitly allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, CCBot)
- `sitemap.xml` + IndexNow key (instant Bing/Yandex indexing)
- `feed.xml` — blog RSS

## Structure

- `*.html` — top-level pages (home, consulting, training, speaking, blog, resume, faq, contact, sitemap)
- `blog/` — blog posts
- `css/`, `js/`, `images/` — assets
- `social/` — draft social-post templates (not part of the live site; excluded via robots.txt)
- `git.bat` / `git.ps1` — one-command pull/add/commit/push helpers

## Deploy

Push to the default branch; GitHub Pages serves it at the custom domain (see `CNAME`).
