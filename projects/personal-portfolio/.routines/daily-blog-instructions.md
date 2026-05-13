# Daily Salesforce Blog Draft Routine Instructions

You are running a daily routine for Shantanu Dutta — senior Salesforce freelance consultant at [shantanudutta.com](https://shantanudutta.com).
Email all output to: shantanu.m.dutta@gmail.com

---

## STEP 1: Research hot Salesforce topics

Run these curl commands and read the titles:

```bash
curl -s --max-time 10 https://www.salesforceben.com/feed/ | grep -oP '(?<=<title>)[^<]+' | head -15
curl -s --max-time 10 https://www.salesforce.com/blog/feed/ | grep -oP '(?<=<title>)[^<]+' | head -15
curl -s --max-time 10 https://developer.salesforce.com/blogs/feed | grep -oP '(?<=<title>)[^<]+' | head -10
```

From the results, identify candidate topics that:

- Are relevant to a senior Salesforce consultant's clients: CPQ, Revenue Cloud, Agentforce, Sales Cloud, Service Cloud, Data Cloud, AI, releases, admin best practices
- Have NOT been covered already — existing posts to avoid: Salesforce Headless 360, Spring 26 CPQ Changes, Revenue Cloud vs CPQ
- Are timely and fresh — announced or actively discussed in the last 7 days
- Would interest a business decision-maker or senior admin, not just a developer

If RSS feeds are unreachable, use your knowledge of recent 2026 Salesforce announcements.

---

## TOPIC QUALITY GATE — Run this before writing anything

Score the best candidate topic against all five criteria below.

**If any criterion fails: stop immediately. Do not write. Do not send an email. Exit silently.**

Zero posts on a bad day is better than a mediocre post that hurts SEO.

**Traffic potential checklist (must pass ALL five):**

1. **Timely** — Was this topic announced, updated, or actively debated in the last 7 days? Evergreen knowledge with no recent trigger will not drive search traffic. Fail if not fresh.

2. **Search demand** — Would a Salesforce admin, consultant, or decision-maker realistically Google this right now? Topics like "how does X work", "X vs Y", or "what the new X means for your org" have demand. Abstract or internal tooling topics do not. Fail if too niche.

3. **Consultant-relevant** — Does it affect buying decisions, implementation projects, or org strategy? Pure developer topics (Apex syntax, LWC patterns, CLI tools) do not bring consulting leads. Fail if developer-only.

4. **Not already saturated** — Is Salesforce Ben, the official Salesforce blog, or many other authoritative sites already covering this? If yes, a post from shantanudutta.com will rank nowhere. Fail if oversaturated.

5. **Not already covered** — Is it a duplicate of the three existing posts listed above? Fail if duplicate.

**Decision:** All 5 pass → proceed to STEP 2. Any criterion fails → stop, do nothing.

---

## STEP 2: Write the blog post

**Voice:** First-person, senior Salesforce consultant. Practical. Opinionated. No marketing spin.
Use real-world examples framed as: "In one of the projects I worked on..." or "I have seen this fail at clients who..."

**ABSOLUTE RULE — ZERO EMOJIS:** No emojis anywhere in either language version.
Not in body text, tables, headings, lists, bullets, or CTAs.
This includes: no checkmarks, no warning signs, no X marks, no hourglasses, no arrows, no other emoji.
Replace with plain text: "Act now", "Not yet", "Caution", "Watch and wait".
Emojis make posts look AI-generated. This rule has zero exceptions.

**Post structure — use this for every post:**

1. Hook — a direct client question or provocative framing in 1-2 short paragraphs
2. Plain-language explanation of the core concept
3. The substance: 3 pillars, a comparison, or numbered features with real practitioner examples
4. A decision matrix table — plain text cells only, no emoji in any cell
5. What has NOT changed and honest limitations
6. What to do right now: exactly 4 numbered steps, each starting with a bold lead phrase
7. CTA in italics: one-line question followed by: [Let's talk](/index.html#contact) — one-line value prop.

Write both the **English (en)** and **German (de)** versions in FULL.
The German version must be a proper natural translation, not a summary.
Use formal Sie register throughout the German version.

**Format: plain Markdown only.** No HTML tags whatsoever — no `<p>`, `<h2>`, `<table>`, `<ol>`, `<li>`, `<strong>`, `<em>`, `<a>`. Use markdown equivalents: `##` for headings, `**bold**` for bold, `*italic*` for italic, `[text](url)` for links, `| col |` for tables, `1.` for numbered lists. The blog renders content with ReactMarkdown — HTML tags will appear as raw text to readers.

---

## STEP 3: Format the posts.js entries

The blog data file: `src/data/blog/posts.js`

It exports:

- `blogPosts` with `en` and `de` arrays (newest post first)
- `blogPostContent` with `en` and `de` objects keyed by slug

Prepare all four entries ready to paste.

**Metadata shape:**

```js
{
    slug: "kebab-case-slug",
    title: "Post Title",
    date: "YYYY-MM-DD",   // use today's actual date
    excerpt: "...",        // under 180 chars, reads like a human wrote it
    tags: ["Salesforce", "Tag2", "Tag3"],  // DE: translate tags where natural
    readTime: 7,           // number not string, estimated at 200 wpm
    image: "/blog/kebab-case-slug.png",
    author: "Shantanu Dutta"
}
```

Provide: EN metadata, DE metadata, EN content template literal, DE content template literal.
All four must be ready to prepend as the first items in their respective arrays/objects.

---

## STEP 4: Write the Python image generation script

Write a complete runnable Python Pillow script that generates a 1200x630 PNG header image.

**FIXED COLOR PALETTE — do not invent different colors:**

- Background: RGB(5, 13, 26) — near-black navy
- Teal glow top-left: RGB(0, 200, 180)
- Orange glow bottom-right: RGB(200, 80, 0)
- Title accent: RGB(0, 226, 196) teal
- Grid lines: RGBA(0, 230, 200, 12)
- White text: RGB(255, 255, 255)

**Layout:**

- Left block: eyebrow label, two-line title (line 1 white, line 2 teal), subtitle, tag pills, vertical divider
- Right block: a diagram relevant to the topic (cards, comparison columns, nodes, hub etc.)
- Bottom-left: author strip "shantanudutta.com · Mon YYYY" with small teal dot

**Font loading (try in order):**

```python
def font(size, bold=False):
    for p in ["/Library/Fonts/Arial Bold.ttf" if bold else "/Library/Fonts/Arial.ttf",
              "/System/Library/Fonts/Helvetica.ttc"]:
        try: return ImageFont.truetype(p, size)
        except: pass
    return ImageFont.load_default()
```

**Save path:**
`/Users/shantanudutta/Documents/Shantanu /projects/personal-portfolio/public/blog/SLUG.png`

---

## STEP 5: Create Gmail draft

Create a Gmail **DRAFT** — do NOT send it.

**To:** shantanu.m.dutta \[at\] gmail.com

**Subject:** [Blog Draft] POST_TITLE — Ready to Deploy

**Body must contain these sections:**

### Section A — Topic

Why this topic was selected and why it passed the quality gate (2-3 sentences).

### Section B — PASTE INTO posts.js

The complete JavaScript for all four entries:

- EN metadata object (prepend to blogPosts.en)
- DE metadata object (prepend to blogPosts.de)
- EN content template literal (add to blogPostContent.en)
- DE content template literal (add to blogPostContent.de)

### Section C — IMAGE SCRIPT

The complete Python script. Tell Shantanu to save it as `image_gen.py` and run: `python3 image_gen.py`

### Section D — BUILD AND DEPLOY

```bash
cd "/Users/shantanudutta/Documents/Shantanu /projects/personal-portfolio"
python3 image_gen.py
npm run build
netlify deploy --prod --dir dist --site e798105c-45e0-4ccb-9d23-73ff01b9c6c3
```

**If Gmail draft creation fails for any reason:** print the complete draft content to stdout so it appears in the run log.
