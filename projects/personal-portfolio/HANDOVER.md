# Portfolio Blog Section — Agent Handover Document

> **Last updated:** 2026-04-22  
> **Author:** Antigravity AI Agent  
> **Site:** [shantanudutta.com](https://shantanudutta.com)  
> **Netlify Site ID:** `e798105c-45e0-4ccb-9d23-73ff01b9c6c3`  
> **Netlify Site Name:** `perosnalwebsiteshan` _(note: this is the actual slug, typo is intentional)_

---

## 1. Project Overview

This is Shantanu Dutta's personal portfolio website — a **Vite + React 19 SPA** deployed on Netlify. It showcases his Salesforce consulting and AI engineering work. The site supports **English and German** (client-side toggle, no separate routes for language).

### Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | 19.x |
| Build Tool | Vite | 7.3.x |
| Routing | react-router-dom | 7.x |
| Markdown | react-markdown + remark-gfm | latest |
| SEO | react-helmet-async | 2.x |
| Hosting | Netlify (free tier) | — |
| CSS | Vanilla CSS (glassmorphism design system) | — |

### Known Dependency Issue

`react-helmet-async` has a peer dependency on React 18, but the project uses React 19. All installs must use:

```bash
npm install <package> --legacy-peer-deps
```

---

## 2. Architecture

### Routing Structure

```
/                     → Portfolio (homepage — all sections)
/blog/:slug           → BlogPost (individual blog post reader)
```

Routing is handled by `react-router-dom` v7. The `BrowserRouter` wraps the app in `src/main.jsx`. Client-side routing on Netlify is supported via `public/_redirects` (`/* /index.html 200`).

### Component Hierarchy

```
main.jsx
└── BrowserRouter
    └── HelmetProvider
        └── App.jsx
            └── LanguageProvider
                └── Routes
                    ├── / → Portfolio
                    │   ├── Navbar
                    │   ├── Hero
                    │   ├── Experience
                    │   ├── Recommendations
                    │   ├── ConsultationRates
                    │   ├── Education
                    │   ├── Blog          ← blog listing (latest 3)
                    │   ├── Contact
                    │   └── Footer
                    │
                    └── /blog/:slug → BlogPost
                        ├── Navbar
                        ├── article (markdown rendered)
                        └── Footer
```

### Key Files

| File | Purpose |
|------|---------|
| `src/main.jsx` | Entry point. BrowserRouter + HelmetProvider wrappers. |
| `src/App.jsx` | Route definitions. Portfolio homepage + BlogPost route. |
| `src/components/Blog.jsx` | Homepage blog section — renders latest 3 posts as cards. |
| `src/components/Blog.css` | Blog listing styles (glassmorphism cards, grid, tags). |
| `src/components/BlogPost.jsx` | Full blog post reader. Renders markdown, injects SEO meta. |
| `src/components/BlogPost.css` | Blog post typography, tables, code blocks, author card. |
| `src/data/blog/posts.js` | **Single source of truth for all blog content.** Contains `blogPosts` (metadata) and `blogPostContent` (full markdown as JS template literals) for both EN and DE. |
| `src/translations/translations.js` | UI string translations (EN/DE). Blog keys under `.blog.*`. |
| `src/context/LanguageContext.jsx` | Language toggle state. Exports `useLanguage()` hook. |
| `public/blog/*.png` | Blog hero images (AI-generated). |
| `public/_redirects` | Netlify SPA fallback rule. |
| `public/sitemap.xml` | Sitemap with homepage + blog post URLs. |
| `public/robots.txt` | Crawler directives + sitemap pointer. |

---

## 3. How to Add a New Blog Post

### Step 1: Add metadata + content to `src/data/blog/posts.js`

Add entries to both `blogPosts.en` and `blogPosts.de` arrays:

```javascript
// In blogPosts.en array:
{
    slug: "your-post-slug",
    title: "Your Post Title",
    date: "2026-05-01",
    excerpt: "A 1-2 sentence summary for cards and meta descriptions.",
    tags: ["Salesforce", "Topic"],
    readTime: 6,
    image: "/blog/your-post-image.png",
    author: "Shantanu Dutta"
}
```

Add full content to both `blogPostContent.en` and `blogPostContent.de`:

```javascript
// In blogPostContent.en:
"your-post-slug": `## Introduction

Your markdown content here...

### Subheading

More content...`
```

### Step 2: Add hero image

Place the hero image at `public/blog/your-post-image.png`. Recommended size: 1200×630px.

### Step 3: Update sitemap

Add a new `<url>` entry in `public/sitemap.xml`:

```xml
<url>
    <loc>https://shantanudutta.com/blog/your-post-slug</loc>
    <lastmod>2026-05-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
</url>
```

### Step 4: Build & deploy

```bash
npm run build
npx netlify-cli deploy --prod --dir=dist --site=e798105c-45e0-4ccb-9d23-73ff01b9c6c3
```

> **Important:** The Blog section on the homepage shows the **first 3 posts** from the `blogPosts` array (sorted by array order, newest first). Keep the array in reverse-chronological order.

---

## 4. Design System

The site uses a custom glassmorphism design system defined in `src/index.css`. Key tokens:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-dark-bg` | `#0a0a14` | Page background |
| `--color-dark-card` | `rgba(20, 20, 30, 0.7)` | Card backgrounds |
| `--color-dark-border` | `rgba(255, 255, 255, 0.08)` | Card/table borders |
| `--color-teal` | `#008080` | Primary accent color |
| `--color-teal-light` | `#20b2aa` | Hover states, h3 headings |
| `--color-white` | `#f0f0f0` | Primary text |
| `--color-text-secondary` | `rgba(240, 240, 240, 0.75)` | Body text |
| `--color-text-muted` | `rgba(240, 240, 240, 0.5)` | Meta text, dates |
| `--glow-teal` | `0 0 30px rgba(0, 128, 128, 0.3)` | Card hover glow |
| `--font-main` | `'Inter', sans-serif` | Primary font |

Cards use `backdrop-filter: blur(10px)` + the dark card background. All new components **must** use these tokens, not hardcoded colors.

---

## 5. Localization Rules

All user-facing strings live in `src/translations/translations.js`. The file exports a single `translations` object with `en` and `de` top-level keys.

### Critical Rules

1. **Both languages must always be in sync.** Adding a key to `en` without adding it to `de` (or vice versa) will cause a runtime crash.
2. Blog content (post body) is stored separately in `src/data/blog/posts.js`, not in translations.
3. Blog UI strings (section title, "Read More", "Back to Blog", etc.) are in `translations[lang].blog.*`.
4. Navbar labels are in `translations[lang].nav.*`.

### Current blog translation keys

```
blog.title         → "Latest Insights" / "Neueste Einblicke"
blog.subtitle      → (section subtitle)
blog.readMore      → "Read More" / "Weiterlesen"
blog.backToBlog    → "← Back to Blog" / "← Zurück zum Blog"
blog.readTime      → "min read" / "Min. Lesezeit"
blog.allPosts      → "View All Posts" / "Alle Beiträge anzeigen"
blog.notFound      → "Blog post not found" / "Blogbeitrag nicht gefunden"
blog.authorBio     → (author card bio text)
```

---

## 6. SEO Implementation

### Per-Post SEO (BlogPost.jsx)

Each blog post automatically receives:

- `<title>` — `{post.title} | Shantanu Dutta`
- `<meta name="description">` — uses `post.excerpt`
- `<link rel="canonical">` — `https://shantanudutta.com/blog/{slug}`
- **Open Graph**: `og:title`, `og:description`, `og:image`, `og:url`, `og:type` (article)
- **Twitter Cards**: `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`, `twitter:image`
- **JSON-LD**: `BlogPosting` schema with headline, description, image, author (Person), publisher, datePublished, dateModified, mainEntityOfPage

### Homepage SEO (App.jsx → Portfolio)

- `ProfessionalService` schema
- `Person` schema
- Full OG + Twitter meta
- `hreflang` links (en, de, x-default)

### Static SEO Files

- `public/robots.txt` — allows all crawlers, points to sitemap
- `public/sitemap.xml` — homepage + all blog post URLs
- `public/og-image.jpg` — default social share image (profile photo)

### Semantic HTML

- Single `<h1>` per page
- `<article>` tag wrapping blog post content
- `<time datetime="...">` for publish dates
- All images have `alt`, `width`, and `height` attributes
- `<header>` and `<footer>` semantic elements within blog posts

---

## 7. Current Blog Posts

| # | Slug | EN Title | Published |
|---|------|----------|-----------|
| 1 | `salesforce-spring-26-cpq-changes` | What Salesforce Spring '26 CPQ Changes Mean for Your Business | 2026-04-20 |
| 2 | `revenue-cloud-vs-cpq` | Revenue Cloud vs CPQ: When Does Each Make Sense? | 2026-04-18 |

Both posts have full German translations. Hero images are stored at `public/blog/*.png`.

---

## 8. Deployment

### Build

```bash
cd /Users/shantanudutta/Documents/Shantanu\ /projects/personal-portfolio
npm run build
```

Output goes to `dist/`.

### Deploy to Netlify

```bash
npx netlify-cli deploy --prod --dir=dist --site=e798105c-45e0-4ccb-9d23-73ff01b9c6c3
```

### Netlify Configuration

`netlify.toml` is present in the project root with:
- Security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`)
- Long-term cache headers for `/assets/*`

### SPA Routing

`public/_redirects` contains `/* /index.html 200` to ensure `/blog/*` routes don't 404 on Netlify.

---

## 9. Pending / Future Work

- [ ] **Blog listing page** — Currently only shows 3 posts on homepage. A dedicated `/blog` route showing all posts with search/filter is not yet built.
- [ ] **RSS feed** — No RSS/Atom feed exists yet. Would improve discoverability.
- [ ] **Blog post comments** — No commenting system (could add Giscus/Utterances later).
- [ ] **Image optimization** — Blog images are PNGs. Could convert to WebP using the `/optimize-assets` workflow.
- [ ] **Reading progress bar** — Visual indicator of scroll position in blog posts.
- [ ] **Related posts** — "You might also like" section at the bottom of each post.
- [ ] **Tag filtering** — Allow filtering posts by tag on the blog listing.
- [ ] **react-helmet-async upgrade** — Watch for a React 19-compatible release to remove `--legacy-peer-deps` requirement.

---

## 10. Available Workflows

The project has agent workflows defined in `.agent/workflows/`:

| Command | Purpose |
|---------|---------|
| `/new-component` | Scaffolds a new React component + CSS and wires it into App.jsx |
| `/optimize-assets` | Converts images to WebP format |
| `/sync-translations` | Ensures EN and DE translation blocks have parity |
| `/ui-qa` | Dispatches browser subagent to verify UI on desktop and mobile |

---

## 11. Quick Reference Commands

```bash
# Install dependencies (ALWAYS use --legacy-peer-deps)
npm install --legacy-peer-deps

# Start dev server
npm run dev

# Build for production
npm run build

# Deploy to production
npx netlify-cli deploy --prod --dir=dist --site=e798105c-45e0-4ccb-9d23-73ff01b9c6c3

# Check translation parity
# Use /sync-translations workflow
```
