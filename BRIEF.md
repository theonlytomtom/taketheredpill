# taketheredpill.io — Website Project Brief
**Owner**: Tom Hansen | **Last Updated**: March 29, 2026 | **Status**: Active Build

---

## Project Overview

A bold, cinematic personal brand website for Tom Hansen — active-duty US Army officer, Palantir SME, and entrepreneur-in-uniform. The site anchors the **Take the Red Pill** brand, hosts the **"The Daily Red Pill Wake Up"** newsletter/blog, and serves as the owned platform that LinkedIn and X can never take away.

**Domain**: taketheredpill.io
**Hosting**: TBD (GitHub Pages / Netlify / Cloudflare Pages preferred — static, secure, fast)
**Repo**: GitHub — to be connected this week
**Tooling**: VSCode (Claude for VSCode installed)

---

## Design Direction — LOCKED

### Approved Mockup
`mockup/taketheredpill-mockup.html` — open in browser to view full interactive mockup.

Tom's verdict: *"fucking sick"* — approved with updates applied.

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--red` | `#D0021B` | Primary brand color — CTAs, accents, pill icon, highlights |
| `--red-dim` | `#8B0012` | Borders, muted red elements |
| `--red-glow` | `rgba(208,2,27,0.18)` | Subtle red glow effects |
| `--blue-pill` | `#1A6FD4` | **Blue Pill** visual motif — used ONLY for contrast words like "asleep" |
| `--bg` | `#0d0d12` | Main background |
| `--bg2` | `#13131a` | Section backgrounds (Intel, cards) |
| `--bg3` | `#18181f` | Hover states, elevated cards |
| `--white` | `#F5F5F0` | Primary text |
| `--white-dim` | `rgba(245,245,240,0.55)` | Body copy, secondary text |
| `--white-faint` | `rgba(245,245,240,0.12)` | Borders, dividers |

### Typography
| Font | Weights | Usage |
|------|---------|-------|
| Space Grotesk | 300, 400, 500, 600, 700 | All headings and body copy |
| Space Mono | 400, 700 | Labels, nav links, UI chrome, code-like elements |

### Visual Identity
- **Matrix rain background**: Red characters cascading, ~7% opacity — subtle, not overpowering
- **Pill icon**: Half red / half outline in nav logo
- **Red/Blue duality**: Red = awake/truth. Blue (#1A6FD4 with glow) = the Blue Pill state. Example: *"Most people are still **asleep.**"* — "asleep" glows blue
- **Section labels**: `// comment` syntax in mono font (e.g., `// The Mission`, `// 01`)
- **Border radius**: 2px — sharp, almost none. Not round. Military precision.
- **Overall feel**: Major tech company (xAI, Linear, Stripe) energy — but darker, bolder, and with conviction

### Approved Hero Headline
> Most people
> are still
> **asleep.** ← *this word is blue (#1A6FD4) with glow*

---

## Site Architecture — Pages to Build

### Phase 1 (This Weekend — MVP)
| Page | Path | Status |
|------|------|--------|
| Home | `/` | 🔨 Build |
| Blog / Intel Hub | `/intel` | 🔨 Build |
| Individual Blog Post | `/intel/[slug]` | 🔨 Build |
| About | `/about` | 🔨 Build |
| Subscribe / Newsletter | `/subscribe` | 🔨 Build |
| 404 | `/404` | 🔨 Build |

### Phase 2 (Post-Launch)
| Page | Path | Notes |
|------|------|-------|
| Product / Coming Soon | `/product` | Teaser for MVP product |
| Community | `/community` | TBD — depends on platform choice |
| Speaking / Media | `/media` | As following grows |

---

## Home Page Sections (From Approved Mockup)

1. **Nav** — Logo (pill icon + TAKETHEREDPILL.IO), links (Intel / The Mission / About), CTA button "Take the Red Pill →"
2. **Hero** — Full viewport, headline, subtext, two CTAs (Subscribe + Read the Manifesto), stat row at bottom
3. **Manifesto** — Two-column: sticky left (title + description) / right (4 numbered points)
4. **Intel Grid** — Latest blog posts: 1 featured card (large) + 2 standard cards
5. **About** — Two-column: photo left / bio + credentials right
6. **Newsletter CTA** — Full-width dark section, email capture
7. **Footer** — Logo, tagline, nav links, copyright

---

## Content — Key Copy (Locked)

### Brand Name
**TAKETHEREDPILL.IO** (all caps in logo)

### Newsletter/Content Brand
**The Daily Red Pill Wake Up**

### Hero Subtext
*"Unfiltered intelligence on military medicine, defense technology, and the systems that shape national health — from someone still inside the machine."*

### Manifesto Points (4)
1. *"The data already exists. Nobody's using it."* — BATDOK, BATTAK, 20 years of locked medical records
2. *"AI doesn't belong in military medicine. It's already there."* — The question is who leads
3. *"The Blue Pill is comfortable. It's also killing people."* — Name the choices, track the outcomes
4. *"The truth is the only thing that actually helps."* — No ads, no sponsors, no affiliations

### About Bio (Draft)
Tom Hansen. Active-duty US Army officer. MOS 70D. The Army's Palantir SME in the medical domain. 20+ years at the intersection of military medicine, data architecture, and AI integration. Building taketheredpill.io while still in uniform — because waiting until retirement is the wrong play.

### Newsletter CTA Headline
*"Stop consuming the narrative. Start seeing clearly."*

### CTA Button Text
*"Take the Red Pill"*

---

## Security Requirements — NON-NEGOTIABLE

Tom's directive: **zero vulnerability flows, latest cybersecurity best practices from line one.**

### Architecture Decisions
- **Static site only** — No server-side rendering, no databases, no dynamic backends that can be exploited
- **No CMS with a login** — No WordPress, no Drupal. Static files only.
- **Hosting**: Cloudflare Pages preferred (free DDoS protection, WAF, edge CDN, zero-trust network)
- **HTTPS only** — HSTS header enforced, no HTTP fallback
- **No third-party scripts** from unverified sources — every dependency audited

### Content Security Policy (CSP)
Strict CSP headers on every page:
```
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; connect-src 'none'; frame-ancestors 'none';
```

### Security Headers (All Required)
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

### Email / Newsletter Capture
- **No custom form backend** — use a reputable provider (Beehiiv, ConvertKit, or Substack embed)
- Form inputs sanitized client-side before submission
- No email addresses stored on-site

### Dependency Rules
- **Fonts**: Self-host Space Grotesk + Space Mono (no Google Fonts call in production — removes external dependency)
- **No jQuery** — vanilla JS only
- **No analytics with user tracking** (no Google Analytics) — use privacy-respecting alternative (Plausible or Cloudflare Analytics)
- **Subresource Integrity (SRI)** on any CDN-loaded assets

### Code Practices
- No inline event handlers (`onclick`, `onload` etc.) — all JS in external files
- No `eval()` or dynamic code execution
- Input validation on all form fields
- No sensitive data in URL parameters

---

## Tech Stack Decision

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | **React + ShadCN UI** | Component-based, fast iteration, ShadCN for UI primitives — built to Tom's spec |
| Hosting | **Cloudflare Pages** | Free, fast, DDoS protection, WAF, HTTPS auto |
| DNS | **Cloudflare** | Already manages taketheredpill.io domain |
| Newsletter | **Beehiiv** (preferred) | Best growth tools, clean embeds, no code needed |
| Analytics | **Cloudflare Analytics** | Privacy-respecting, zero JS overhead |
| Fonts | **Self-hosted** | No external call = no tracking, faster load |
| Version Control | **GitHub** | Repo to be set up this week |

---

## Project Folder Structure

```
taketheredpill-website/
├── BRIEF.md                  ← This file
├── mockup/
│   └── taketheredpill-mockup.html   ← Approved visual mockup
├── src/                      ← Production source code (to be built)
│   ├── index.html
│   ├── intel/
│   │   └── index.html
│   ├── about/
│   │   └── index.html
│   ├── subscribe/
│   │   └── index.html
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   └── main.js
│   ├── fonts/                ← Self-hosted Space Grotesk + Space Mono
│   └── assets/
│       └── [images, icons]
├── _headers                  ← Cloudflare Pages security headers
└── _redirects                ← Cloudflare Pages redirect rules
```

---

## Session Log

| Date | What Happened |
|------|--------------|
| Mar 25, 2026 | Initial mockup built and approved. Design direction locked. |
| Mar 28, 2026 | Newsletter name confirmed: "The Daily Red Pill Wake Up". "asleep" = blue pill visual. Background lightened. |
| Mar 29, 2026 | Project folder created. BRIEF.md written. Build begins. |
