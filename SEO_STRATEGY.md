# Grit — SEO & Website Strategy

_Chiropractic EHR for solo, cash-pay chiropractors · $49/mo · pre-launch (waitlist) · chiropracticgrit.com_

Last updated: 2026-05-27

---

## 1. The problem this solves

The site was effectively invisible in search — you couldn't even find it by its own brand name ("chiropractic grit"). Two root causes:

1. **`site` was never set** in `astro.config.mjs`, which blocks Astro's sitemap from generating at all.
2. **No sitemap, no robots.txt, no structured data, no content, and never submitted to Search Console** — so Google had no path to discover or index the site. Brand-name invisibility on a fresh domain is normal: it means "not indexed yet," not a penalty. It's fixable in days-to-weeks.

The new domain **chiropracticgrit.com** is a near-exact match for the brand query "chiropractic grit," which makes that search trivial to win once indexed.

---

## 2. The strategy in one paragraph

**Don't fight the head terms** ("chiropractic software", "chiropractic EHR") — they're locked up by 15–24-year-old incumbent domains (ChiroTouch, ChiroFusion, Jane) plus the Capterra/G2/Software Advice directory cartel, and a new domain can't win them for 12–24 months. **Win the intersection no one owns: cash-pay + under-$50 + solo + new-grad.** $49 sits below the ~$64 entry floor every comparison article quotes, and no purpose-built product credibly owns "affordable cash-practice chiropractic EHR." Pair that content with **directory listings + reviews** (to intercept the commercial searches you can't outrank) and the **new-grad / Gonstead creator community** on YouTube/TikTok (where no EHR vendor is present), all carried by the founder's unreplicable mission story.

---

## 3. The landscape (researched May 2026, live SERPs)

### Locked up — do NOT chase organically
- **Head terms** — owned by incumbent homepages + directories + "best of 2026" listicles.
- **Capterra / G2 / Software Advice category ranking** — owned by review volume you can't match short-term. _Join them, don't outrank them._
- **Clinical authority content** — ChiroUp owns evidence-based clinical topics.
- **Vendor comparison content** — ChiroTouch already self-publishes `/compare/` pages.

### Confirmed competitor pricing (the wedge is real)
| Product | Monthly (est., 2026) | Notes |
|---|---|---|
| **Grit** | **$49** | All-inclusive, no setup, no contract |
| Jane | ~$54 | Generic multi-discipline, volume-capped |
| ChiroFusion | ~$129–149 | + $299 setup + clearinghouse fees |
| zHealth | ~$119 | |
| Pure Chiro Notes | ~$149 | Cash/membership focus |
| ChiroTouch Core | ~$159 (Advanced ~$299) | + four-figure setup + add-ons |

Listicles repeatedly quote an entry floor of ~$64/mo. **$49 is below the floor the entire content ecosystem quotes.** ChiroTouch even publishes a defensive piece, "The Real Cost of Cheap Chiropractic EHR Software" — proof the cheap angle threatens them.

### Where Grit can win — prioritized keyword clusters
| Priority | Cluster | Competition | Gap verdict |
|---|---|---|---|
| **1** | Cash-based / cash-pay chiropractic EHR | Med | Primary wedge — cheaper + truly chiro-specific |
| **1** | Affordable / under-$50 / cheapest chiropractic EHR | Med | Ownable — $49 beats the quoted floor |
| **2** | Directory listings + reviews (Capterra/G2/SA/GetApp) | channel | Get listed; tag the uncontested niche modifier |
| **2** | New-grad / "starting a (cash) chiropractic practice" | Med | Capture price-sensitive buyers pre-sale; debt-aware angle is wide open |
| **3** | "What ChiroTouch costs" + "[competitor] alternative for solo/cash" + own vs-pages | High SERP/intent | Publish own comparison + cost-truth pages |
| **3** | Solo chiropractor EHR (bundle w/ cash+cheap modifiers) | Med-High | Contested by zHealth; win via modifiers |
| **4** | No-contract / month-to-month chiropractic software | Low-Med | Small but ownable; doubles as ChiroTouch contract-pain counter |
| **5** | SOAP notes / patient portal | Med-High | Low — feature pages only |

### Content gaps incumbents leave open (your unfair advantages)
- **Honest, buyer-side pricing comparison** — all existing comparison content is vendor-self-serving.
- **Student-debt-aware messaging** — absent from every EHR vendor; new grads carry ~$232K debt.
- **True cash-first startup guides** — competitors' "startup" guides still assume insurance credentialing.
- **The new-grad / Gonstead creator community on TikTok/YouTube** — highly active, zero EHR-vendor presence. The founder's Gonstead-mentorship → debt → "mentor-not-merchant" story is unreplicable and made for this audience.

---

## 4. What was built (in this repo, ✅ done)

All under `grit_marketing_site/grit-marketing/`:

- **Technical SEO foundation**
  - `astro.config.mjs` — set `site: 'https://chiropracticgrit.com'` + added `@astrojs/sitemap` → generates `/sitemap-index.xml` (verified, all 15 URLs).
  - `public/robots.txt` — allows crawl + references the sitemap.
  - `src/layouts/BaseLayout.astro` — fixed domain fallback; added site-wide **JSON-LD** (`Organization` + `SoftwareApplication` with the $49 offer) and a `schema` prop for per-page structured data. Keyword-tuned default title/description. OG/Twitter images now absolute URLs.
- **Price + brand corrections** — `$99 → $49` (pricing.astro, terms.astro); `gritcrm.com → chiropracticgrit.com` emails (pricing.astro, security.astro).
- **Keyword-tuned meta** on `pricing.astro` (+ `FAQPage` schema from its FAQ list) and `features.astro`.
- **Blog system** (Astro Content Layer): `src/content.config.ts`, `src/pages/blog/index.astro` (listing), `src/pages/blog/[...slug].astro` (post template w/ `Article` schema + waitlist CTA). Added **Blog** to nav for internal linking.
  - 3 cornerstone posts: `what-chirotouch-actually-costs`, `cash-pay-chiropractic-software`, `starting-a-cash-chiropractic-practice`.
- **Comparison/alternative pages** — `src/pages/compare/[slug].astro` → `/compare/grit-vs-chirotouch`, `/compare/grit-vs-jane`, `/compare/chirotouch-alternatives` (each with honest "when the other wins" framing + `FAQPage` schema).

Build verified clean: 15 pages, sitemap generated, JSON-LD present in output.

---

## 5. What's NOT in the repo — the manual action plan

These are the highest-leverage moves and they happen outside the codebase:

### Do this week (gets you found — the actual fix for the brand-search problem)
1. **Deploy** the site to `chiropracticgrit.com` (confirm DNS/hosting).
2. **Google Search Console** — verify the domain, submit `https://chiropracticgrit.com/sitemap-index.xml`, then **Request Indexing** on the homepage + key pages. This is the single fastest cure.
3. **Bing Webmaster Tools** — verify + submit sitemap (generous limits, feeds IndexNow).
4. **A few fast backlinks** to accelerate indexing: LinkedIn company page, Crunchbase. (Update the `sameAs` URLs in `BaseLayout.astro` once the real social handles exist.)

### Build the bridge (weeks 2–8)
5. **Directory listings** (highest near-term ROI): Capterra, G2, Software Advice, GetApp. Get listed (many free); seed authentic reviews tagged to the uncontested niche ("for solo / cash / new chiropractors"). These rank #1 for searches you can't win for years.
6. **YouTube** (indexes fast, low niche competition): 60–90s product-demo clips + practice-finance-truth shorts; repurpose to TikTok/Reels for the Gonstead new-grad audience.
7. **Community presence** (no cold outbound — fits founder profile): r/Chiropractic, Facebook groups (Cash-Based Chiropractic, New Chiropractors, school groups). Rule: answer 10 questions for every 1 mention.

### Content cadence (ongoing)
Next posts, in priority order, extending what's built:
- "The cheapest chiropractic EHR that's still built for chiropractic" (owns under-$50)
- "Do you need insurance billing for a cash chiropractic practice?" (informational top-of-funnel)
- "Why I built Grit" — the mission story (also becomes homepage hero + pinned social)
- "New DC Starter Kit" — ungated lead magnet feeding the waitlist
- More `/compare/` pages: Grit vs ChiroFusion, Grit vs zHealth, Jane alternatives for chiropractors

### Don't do
Don't chase head-term organic SEO; don't try to outrank Capterra/G2; don't run paid ads before the funnel converts; don't spread thin across every platform (pick YouTube + one of TikTok/IG).

---

## 6. Realistic timeline — "when will I show up?"

| Milestone | Realistic time |
|---|---|
| Indexed at all | **4 days – 4 weeks** (days if you Request Indexing + have a backlink) |
| Rank for own brand name ("chiropractic grit") | **Days to ~2–3 weeks after indexing** — easiest win, no competition |
| Early visibility on long-tail (cash / under-$50 / solo / vs-pages) | **1–3 months**, stabilizing ~4–6 months |
| Compete for head terms | **6–12+ months, possibly never** without authority — not worth chasing |

Benchmark: only ~1.7% of new pages reach top-10 within a year; the average #1-ranking page is ~3 years old. That's exactly why directories + comparison pages + social are the bridge while organic matures.

---

## 7. Open items
- Confirm production domain is `chiropracticgrit.com` (assumed throughout). ✅ confirmed by owner.
- Real social handles for the `Organization.sameAs` array in `BaseLayout.astro` (currently placeholder URLs).
- Add an `og-image.png` to `public/` (referenced but not yet present) for social-share previews.
- Decide if/when to flip CTAs from "Join the Waitlist" to "Start free trial" at launch.
