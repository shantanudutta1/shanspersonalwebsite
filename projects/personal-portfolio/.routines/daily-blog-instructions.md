# Daily Salesforce Blog Routine — Full Automation

End-to-end: research → write → commit to GitHub → auto-deploy → notify.

Credentials are injected via the routine prompt. Use GITHUB_TOKEN where referenced.

Repository: `shantanudutta1/shanspersonalwebsite`
Portfolio path in repo: `projects/personal-portfolio/`
Live site: shantanudutta.com
Notification email: shantanu.m.dutta \[at\] gmail.com

---

## STEP 1: Research hot Salesforce topics

Run these to find recent articles:

```bash
curl -s --max-time 10 https://www.salesforceben.com/feed/ | grep -oP '(?<=<title>)[^<]+' | head -15
curl -s --max-time 10 https://www.salesforce.com/blog/feed/ | grep -oP '(?<=<title>)[^<]+' | head -15
curl -s --max-time 10 https://developer.salesforce.com/blogs/feed | grep -oP '(?<=<title>)[^<]+' | head -10
```

Also fetch the existing posts to know what has already been covered:

```bash
curl -s -H "Authorization: token $GITHUB_TOKEN" \
  "https://api.github.com/repos/shantanudutta1/shanspersonalwebsite/contents/projects/personal-portfolio/src/data/blog/posts.js" \
  | python3 -c "import sys,json,base64; d=json.load(sys.stdin); print(base64.b64decode(d['content']).decode())" \
  | grep -oP '(?<=slug: ")[^"]+' | head -20
```

This shows all existing slugs — do not create a post on any of these topics.

Pick ONE new topic that:

- Is relevant to a senior Salesforce consultant's clients: CPQ, Revenue Cloud, Agentforce, Sales Cloud, Service Cloud, Data Cloud, AI, releases, admin best practices
- Is timely and fresh — announced or discussed in the last 7 days
- Would interest a business decision-maker or senior admin, not just a developer

If RSS feeds are unreachable, use your knowledge of recent 2026 Salesforce announcements.

---

## TOPIC QUALITY GATE

Score the best candidate topic against all five criteria before writing anything.

**If any criterion fails: stop immediately. Do not write. Do not send any email. Exit silently.**

Zero posts on a bad day is better than a mediocre post that hurts SEO.

**Checklist (must pass ALL five):**

1. **Timely** — Announced, updated, or actively debated in the last 7 days? Evergreen knowledge with no recent trigger will not drive search traffic. Fail if not fresh.

2. **Search demand** — Would a Salesforce admin, consultant, or decision-maker realistically Google this right now? Topics like "how does X work", "X vs Y", or "what the new X means for your org" have demand. Abstract tooling topics do not. Fail if too niche.

3. **Consultant-relevant** — Affects buying decisions, implementation projects, or org strategy? Pure developer topics (Apex syntax, LWC patterns, CLI tools) do not bring consulting leads. Fail if developer-only.

4. **Not saturated** — Is Salesforce Ben or the official Salesforce blog already covering it with more authority? Fail if oversaturated.

5. **Not already covered** — Is it a duplicate of an existing slug from Step 1? Fail if duplicate.

**Decision:** All 5 pass → proceed to STEP 2. Any criterion fails → stop, do nothing.

---

## STEP 2: Write the blog post

**Voice:** First-person, senior Salesforce consultant. Practical. Opinionated. No marketing spin.
Use real-world examples framed as: "In one of the projects I worked on..." or "I have seen this fail at clients who..."

**ABSOLUTE RULE — ZERO EMOJIS:** No emojis anywhere in either language version. Not in body text, tables, headings, lists, bullets, or CTAs. No checkmarks, warnings, X marks, hourglasses, arrows. Replace with plain text: "Act now", "Not yet", "Caution". Emojis make posts look AI-generated. Zero exceptions.

**Format: plain Markdown only.** No HTML tags — no `<p>`, `<h2>`, `<table>`, `<ol>`, `<li>`. Use `##` for headings, `**bold**`, `*italic*`, `[text](url)` for links, `| col |` for tables, `1.` for numbered lists.

**Post structure:**

1. Hook — direct client question or provocative framing in 1-2 short paragraphs
2. Plain-language explanation of the core concept
3. The substance: 3 pillars, comparison, or numbered features with real practitioner examples
4. A decision matrix table — plain text cells only, no emoji
5. What has NOT changed and honest limitations
6. What to do right now: exactly 4 numbered steps, each with a bold lead phrase
7. CTA in italics: one-line question, then [Let's talk](/index.html#contact) — one-line value prop.

Write both **English (en)** and **German (de)** in FULL. German must be a proper translation, not a summary. Use formal Sie throughout German.

---

## STEP 3: Generate header image

Install Pillow and download fonts for Linux:

```python
import subprocess
subprocess.run(["pip", "install", "Pillow", "requests", "-q"])

import requests as req

# Download Roboto fonts (works on any OS)
for name, url in [
    ("Roboto-Regular.ttf", "https://github.com/google/fonts/raw/main/apache/roboto/static/Roboto-Regular.ttf"),
    ("Roboto-Bold.ttf",    "https://github.com/google/fonts/raw/main/apache/roboto/static/Roboto-Bold.ttf"),
]:
    r = req.get(url, timeout=15)
    open(f"/tmp/{name}", "wb").write(r.content)
```

Use this font loader in the image script:

```python
def font(size, bold=False):
    name = "Roboto-Bold.ttf" if bold else "Roboto-Regular.ttf"
    paths = [
        f"/tmp/{name}",
        "/Library/Fonts/Arial Bold.ttf" if bold else "/Library/Fonts/Arial.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for p in paths:
        try: return ImageFont.truetype(p, size)
        except: pass
    return ImageFont.load_default()
```

**Fixed color palette:**

- Background: RGB(5, 13, 26)
- Teal glow top-left: RGB(0, 200, 180)
- Orange glow bottom-right: RGB(200, 80, 0)
- Title accent: RGB(0, 226, 196)
- Grid lines: RGBA(0, 230, 200, 12)

**Layout:** Left block: eyebrow + 2-line title (white then teal) + subtitle + tag pills + divider. Right block: topic-relevant diagram. Author strip bottom-left.

**Save to:** `/tmp/blog-image.png`

---

## STEP 4: Commit everything to GitHub

Write and run this Python script to commit all three files atomically:

```python
import requests, base64, json, re, sys
from datetime import date

GITHUB_TOKEN = "REPLACE_WITH_TOKEN_FROM_PROMPT"
REPO = "shantanudutta1/shanspersonalwebsite"
HEADERS = {
    "Authorization": f"token {GITHUB_TOKEN}",
    "Accept": "application/vnd.github.v3+json",
    "Content-Type": "application/json"
}

def get_file(path):
    r = requests.get(f"https://api.github.com/repos/{REPO}/contents/{path}", headers=HEADERS, timeout=15)
    if r.status_code == 200:
        d = r.json()
        return base64.b64decode(d["content"]).decode("utf-8"), d["sha"]
    return None, None

def commit_text(path, content, sha, message):
    payload = {"message": message, "content": base64.b64encode(content.encode("utf-8")).decode()}
    if sha: payload["sha"] = sha
    r = requests.put(f"https://api.github.com/repos/{REPO}/contents/{path}", headers=HEADERS, json=payload, timeout=30)
    if r.status_code not in (200, 201):
        print(f"ERROR committing {path}: {r.status_code} {r.text}")
        sys.exit(1)
    print(f"Committed: {path}")

def commit_binary(path, filepath, sha, message):
    with open(filepath, "rb") as f:
        content_b64 = base64.b64encode(f.read()).decode()
    payload = {"message": message, "content": content_b64}
    if sha: payload["sha"] = sha
    r = requests.put(f"https://api.github.com/repos/{REPO}/contents/{path}", headers=HEADERS, json=payload, timeout=60)
    if r.status_code not in (200, 201):
        print(f"ERROR committing {path}: {r.status_code} {r.text}")
        sys.exit(1)
    print(f"Committed image: {path}")

# ── These are filled in by the routine before running the script ──
SLUG        = "YOUR-SLUG-HERE"
EN_META     = """    {
        slug: "YOUR-SLUG",
        title: "...",
        date: "YYYY-MM-DD",
        excerpt: "...",
        tags: ["Salesforce", "..."],
        readTime: 7,
        image: "/blog/YOUR-SLUG.png",
        author: "Shantanu Dutta"
    },"""

DE_META     = """    {
        slug: "YOUR-SLUG",
        title: "...",
        date: "YYYY-MM-DD",
        excerpt: "...",
        tags: ["Salesforce", "..."],
        readTime: 7,
        image: "/blog/YOUR-SLUG.png",
        author: "Shantanu Dutta"
    },"""

EN_CONTENT  = '"""...full EN markdown content..."""'
DE_CONTENT  = '"""...full DE markdown content..."""'

TODAY       = date.today().isoformat()

# ── 1. Update posts.js ──
POSTS_PATH = "projects/personal-portfolio/src/data/blog/posts.js"
posts_content, posts_sha = get_file(POSTS_PATH)

# Prepend EN metadata (first item in en array)
posts_content = posts_content.replace(
    "    en: [\n",
    f"    en: [\n{EN_META}\n",
    1
)
# Prepend DE metadata (first item in de array)
posts_content = posts_content.replace(
    "    de: [\n",
    f"    de: [\n{DE_META}\n",
    1
)
# Prepend EN content (first key in en object of blogPostContent)
posts_content = re.sub(
    r'(export const blogPostContent = \{\s*\n\s*en: \{)',
    f'\\1\n        "{SLUG}": `{EN_CONTENT}`,\n',
    posts_content, count=1
)
# Prepend DE content (first key in de object of blogPostContent)
posts_content = re.sub(
    r'(        "salesforce-headless-360": `[^`]*`,\s*\n\s*de: \{)',
    f'\\1\n        "{SLUG}": `{DE_CONTENT}`,\n',
    posts_content, count=1
)

commit_text(POSTS_PATH, posts_content, posts_sha, f"feat(blog): add {SLUG}")

# ── 2. Commit image ──
IMG_PATH = f"projects/personal-portfolio/public/blog/{SLUG}.png"
_, img_sha = get_file(IMG_PATH)
commit_binary(IMG_PATH, "/tmp/blog-image.png", img_sha, f"feat(blog): add header image for {SLUG}")

# ── 3. Update sitemap ──
SITEMAP_PATH = "projects/personal-portfolio/public/sitemap.xml"
sitemap, sitemap_sha = get_file(SITEMAP_PATH)

new_url = f"""  <url>
    <loc>https://shantanudutta.com/blog/{SLUG}</loc>
    <lastmod>{TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>"""

sitemap = sitemap.replace(
    "  <url>\n    <loc>https://shantanudutta.com/blog/agentforce",
    f"{new_url}\n  <url>\n    <loc>https://shantanudutta.com/blog/agentforce"
)

commit_text(SITEMAP_PATH, sitemap, sitemap_sha, f"chore(sitemap): add {SLUG}")

print("All commits done. GitHub Actions will now build and deploy automatically.")
```

**Important:** Before running, fill in SLUG, EN_META, DE_META, EN_CONTENT, DE_CONTENT with the actual values from Step 2. Replace GITHUB_TOKEN with the token from your prompt.

---

## STEP 5: Send Gmail notification

After all commits succeed, send an email (NOT a draft — use the send method directly) to shantanu.m.dutta \[at\] gmail.com.

**Subject:** [Live] POST_TITLE — Published on shantanudutta.com

**Body:**

```text
Your daily blog post is live.

Title: POST_TITLE
URL: https://shantanudutta.com/blog/SLUG
Published: TODAY

Why this topic was selected:
[2-3 sentences on why it passed the quality gate]

GitHub Actions is building and deploying now. The post will be live within 2-3 minutes.
```

If the Gmail send tool is unavailable, create a draft instead.
