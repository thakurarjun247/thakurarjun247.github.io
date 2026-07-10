<!--
MEDIUM ARTICLE — "How I Optimized My Site for LLMs (GEO)"
IMPORTANT when publishing on Medium:
  Story settings → Advanced settings → "Canonical link" =
  https://arjunthakur.dev/blog/how-i-optimized-my-site-for-llms.html
  (so Google credits your own domain, not Medium)
Suggested tags: GEO, AI, LLM, SEO, LangGraph
-->

# How I Optimized My Site for LLMs (GEO)

A few days ago, an engineer in the US found my site through ChatGPT — searching for 1:1 agentic-AI training — and reached out. That wasn't luck. It was GEO: optimizing to be found and cited by AI.

Here's exactly what I did, with the real code from my own site.

## SEO vs GEO

SEO gets you *ranked* in Google. **GEO — Generative Engine Optimization** — gets you *quoted* by ChatGPT, Claude, and Perplexity. These tools answer in prose and name a few sources. The goal shifts from "rank #1" to "be the source the model trusts enough to cite."

Why it matters: buyers now ask an AI *"who can train my team on LangGraph?"* — and act on the answer.

## 1. A plain-text profile for AI: `llms.txt`

LLMs love clean, quotable text. `llms.txt` is an emerging convention — a Markdown profile at your site root that crawlers can lift facts from without fighting your HTML.

```
# llms.txt — Arjun Thakur (arjunthakur.dev)

## Who is Arjun Thakur?
Principal AI Engineer, Fractional CTO, and founder of Yuvan.
Builds production agentic AI — LangGraph, RAG, WebRTC voice agents.

## Available for
- 1:1 & team AI training (agentic AI, LangGraph, RAG, MCP)
- AI engineering consulting and Fractional CTO
```

## 2. A connected entity graph (JSON-LD `@id`)

Don't scatter separate `Person`, `Organization`, and `WebSite` blobs. Give each a stable `@id` and link them, so engines resolve you as *one* entity — not three strangers with the same name.

```json
{
  "@type": "Person",
  "@id": "https://arjunthakur.dev/#person",
  "name": "Arjun Thakur",
  "worksFor": { "@id": "https://arjunthakur.dev/#yuvan" },
  "makesOffer": [
    { "@type": "Offer", "itemOffered":
      { "@type": "Service", "name": "AI Engineering Consulting" } }
  ]
}
```

## 3. Answer questions in Q&A (FAQ schema)

LLMs extract question-answer pairs beautifully. Real FAQs, marked up as `FAQPage`, become ready-made citations.

```json
{
  "@type": "Question",
  "name": "Does Arjun offer 1:1 AI training?",
  "acceptedAnswer": { "@type": "Answer",
    "text": "Yes — private 1:1 mentoring in agentic AI,
             LangGraph, RAG, and MCP, live online, worldwide." }
}
```

## 4. Let the AI crawlers in

Most sites silently block them. I explicitly allow them in `robots.txt`:

```
User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: CCBot          # Common Crawl — feeds many models
Allow: /
```

## 5. Get indexed fast

A fresh `sitemap.xml` plus **IndexNow** pings Bing and Yandex instantly — and Bing's index feeds ChatGPT and Perplexity. Submit to Google Search Console for the rest.

## The significance

AI answers are sourced from search indexes (Bing/Google) and Common Crawl. Content that is **structured, quotable, and corroborated** across your site and the web is what an LLM will confidently cite. GEO isn't a trick — it's making the truth about you easy for a machine to read.

The proof: a real, paying lead that came straight from ChatGPT.

## The site is open source

I've open-sourced this site — the schema, `llms.txt`, `robots.txt`, sitemap, and IndexNow setup are all there to copy. Want the source code to replicate this on your own site? [Reach out](https://arjunthakur.dev/contact.html) and I'll share the repo.

---

*I'm Arjun Thakur — Principal AI Engineer and Fractional CTO. I build production agentic AI (LangGraph, RAG, voice) and help teams do the same through [consulting](https://arjunthakur.dev/consulting.html) and [1:1 & team training](https://arjunthakur.dev/training.html). More at [arjunthakur.dev](https://arjunthakur.dev).*
