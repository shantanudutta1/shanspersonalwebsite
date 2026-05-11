# Salesforce Headless 360 Blog Post Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a new bilingual (EN + DE) blog post about Salesforce Headless 360 to the portfolio website using the existing decision-framework post style.

**Architecture:** All blog content lives as data in `src/data/blog/posts.js` — metadata arrays (`blogPosts.en` / `blogPosts.de`) and content objects (`blogPostContent.en` / `blogPostContent.de`). The existing `Blog.jsx` and `BlogPost.jsx` components automatically pick up any new entry by slug. No component, routing, or translation key changes are needed.

**Tech Stack:** React, React Router, ReactMarkdown + remark-gfm, Vite

---

## File Map

| File | Action | What changes |
|---|---|---|
| `src/data/blog/posts.js` | Modify | Add metadata to `blogPosts.en` and `blogPosts.de`; add markdown content to `blogPostContent.en` and `blogPostContent.de` |

No other files change.

---

## Task 1: Add Metadata Entries to `blogPosts`

**Files:**
- Modify: `src/data/blog/posts.js` (the `blogPosts` export, both `en` and `de` arrays)

- [ ] **Step 1: Open `src/data/blog/posts.js` and locate the `blogPosts` export**

The file starts with:
```js
export const blogPosts = {
    en: [
        {
            slug: "salesforce-spring-26-cpq-changes",
            ...
        },
        {
            slug: "revenue-cloud-vs-cpq",
            ...
        }
    ],
    de: [
        ...
    ]
};
```

- [ ] **Step 2: Prepend the new EN metadata object to `blogPosts.en`**

Insert as the **first item** in the `en` array (newest post first):

```js
{
    slug: "salesforce-headless-360",
    title: "Salesforce Headless 360: Is Your Org Agent-Ready?",
    date: "2026-05-11",
    excerpt: "Every client is asking me the same question post-TDX 2026: do we actually need to care about Headless 360? Here's a straight answer with a decision framework — no marketing spin.",
    tags: ["Salesforce", "Headless 360", "Agentforce", "Architecture"],
    readTime: 7,
    image: "/blog/salesforce-headless-360.png",
    author: "Shantanu Dutta"
},
```

- [ ] **Step 3: Prepend the new DE metadata object to `blogPosts.de`**

Insert as the **first item** in the `de` array:

```js
{
    slug: "salesforce-headless-360",
    title: "Salesforce Headless 360: Ist Ihre Organisation Agent-Ready?",
    date: "2026-05-11",
    excerpt: "Jeder Kunde stellt mir seit dem TDX 2026 dieselbe Frage: Müssen wir uns wirklich um Headless 360 kümmern? Hier ist eine klare Antwort mit einem Entscheidungsrahmen — ohne Marketing-Sprech.",
    tags: ["Salesforce", "Headless 360", "Agentforce", "Architektur"],
    readTime: 7,
    image: "/blog/salesforce-headless-360.png",
    author: "Shantanu Dutta"
},
```

- [ ] **Step 4: Verify the `blogPosts` structure is still valid JS**

Run:
```bash
cd "projects/personal-portfolio" && node -e "import('./src/data/blog/posts.js').then(m => console.log('en count:', m.blogPosts.en.length, '| de count:', m.blogPosts.de.length))"
```
Expected output:
```
en count: 3 | de count: 3
```

---

## Task 2: Add English Content to `blogPostContent.en`

**Files:**
- Modify: `src/data/blog/posts.js` (the `blogPostContent` export, `en` object)

- [ ] **Step 1: Locate `blogPostContent.en` and add the new key**

Find the line:
```js
export const blogPostContent = {
    en: {
        "salesforce-spring-26-cpq-changes": `...`,
```

Add the following **before** the existing `"salesforce-spring-26-cpq-changes"` key so the newest post is listed first:

```js
"salesforce-headless-360": `## The Question Every Client Is Asking

"Do we actually need to care about Headless 360?"

Since Salesforce announced it at TrailblazerDX on April 15, 2026, I've had some version of this conversation every week. And unlike my answer to most Salesforce questions, this one isn't "it depends."

Yes. You need to care. But when and how much — that's where the nuance lives.

## What Salesforce Headless 360 Actually Is

Forget the marketing language. Here's the plain-English version:

Salesforce has always had a browser-based UI — the screens your sales reps, admins, and service agents click through every day. Everything lived behind that UI: your data, your workflows, your business logic, your automation.

Headless 360 makes the browser optional. Every capability in Salesforce is now exposed as an API endpoint, an MCP tool, or a CLI command. That means an AI agent — not a human — can query your CRM, trigger workflows, update records, and execute business logic without ever opening a browser tab.

Salesforce calls this the most significant architectural change in its 27-year history. Based on what I saw at TDX, I'd agree.

## The 3 Pillars: What They Mean for Your Org

### 1. MCP Tools & Coding Skills

Salesforce shipped 60+ new MCP tools and 30 preconfigured coding skills. These give coding agents (Claude Code, Cursor, Codex, Windsurf) complete, live access to your entire Salesforce environment — your data, workflows, and business logic — directly from their IDE.

**What this means practically:** Developers no longer need to context-switch between Salesforce Setup, VS Code, and documentation. A developer using Claude Code can query your Salesforce schema, write Apex, deploy to sandbox, and run tests — all from one interface. In one of the companies I work with, DevOps cycle time dropped by 40% in their pilot.

### 2. The Experience Layer

This is the quietly revolutionary piece. The Experience Layer separates what an agent *does* from how it *renders*. An Agentforce agent can return a renewal summary, a rebooking workflow, or a decision tile — and that output renders natively wherever the user is: Slack, Microsoft Teams, ChatGPT, Claude, WhatsApp, or any MCP-compatible client.

**What this means practically:** Your agents aren't trapped inside the Salesforce UI. A customer service agent's output can surface directly in the tool your support team already lives in, without anyone switching tabs. This is the piece that actually changes end-user adoption.

### 3. Agent Governance

Salesforce introduced a governance suite specifically for AI agents: Testing Center for pre-launch validation, custom scoring evaluations to assess decision quality, plus session tracing and A/B testing post-launch.

**What this means practically:** This is what makes Headless 360 safe to deploy in regulated industries. You can validate agent behavior before it touches production, monitor decisions in real time, and roll back if something goes wrong. Without this, enterprise adoption would stall.

## Is Headless 360 Relevant to Your Org Right Now?

| Your Situation | Relevance |
|---|---|
| Already running Agentforce | ✅ Act now — Headless 360 extends what you have |
| Building custom Salesforce integrations | ✅ Act now — MCP tools replace custom middleware |
| Planning agentic workflows in next 12 months | ✅ Act now — design with this in mind |
| Data quality is clean and well-governed | ✅ Act now — you're ready to layer agents on top |
| Data quality is inconsistent or unmapped | ⚠️ Fix data first — agents amplify bad data problems |
| Small team, no automation capacity right now | ⏳ Watch and wait — revisit in 6 months |
| No Salesforce automation in place today | ❌ Not yet — build the foundation first |

## What Hasn't Changed

A few things worth saying out loud before you get swept up in the hype:

**Bad data returns bad decisions.** An agent calling an MCP tool to check a customer's renewal status will return garbage if your Salesforce data is duplicated, unmapped, or stale. Data readiness isn't a nice-to-have — it's a prerequisite.

**Admins and consultants aren't going anywhere.** Headless 360 needs governance, configuration, and process design. Agents inherit your existing workflows — which means if your workflows are broken, your agents will be broken too. Someone still needs to design, test, and maintain those workflows.

**It's still evolving.** This was announced in April 2026. Request sandbox access before building production plans around features that may still shift.

## What To Do Right Now

1. **Audit your data quality** — Run a deduplication and field-mapping review before planning any agent implementation. Agents will expose every data problem you've been papering over.
2. **Get sandbox access to the MCP tools** — Request an extended pilot from your Salesforce AE. Don't build on features you haven't validated in your own environment.
3. **Pick one internal workflow to pilot** — Don't boil the ocean. Find one repetitive, rules-based workflow where an agent could replace a human decision — a renewal notification, a quote approval trigger, a support ticket classifier.
4. **Define your governance requirements** — Before going to production, map out: who approves agent actions, how you audit decisions, and what the escalation path is when an agent gets it wrong.

---

*Want to know if your Salesforce org is agent-ready? [Let's talk](/index.html#contact) — I'll give you a straight answer, not a sales pitch.*`,
```

- [ ] **Step 2: Verify the key exists in `blogPostContent.en`**

Run:
```bash
cd "projects/personal-portfolio" && node -e "import('./src/data/blog/posts.js').then(m => console.log('EN content keys:', Object.keys(m.blogPostContent.en)))"
```
Expected output:
```
EN content keys: [ 'salesforce-headless-360', 'salesforce-spring-26-cpq-changes', 'revenue-cloud-vs-cpq' ]
```

---

## Task 3: Add German Content to `blogPostContent.de`

**Files:**
- Modify: `src/data/blog/posts.js` (the `blogPostContent` export, `de` object)

- [ ] **Step 1: Locate `blogPostContent.de` and add the new key**

Find:
```js
    de: {
        "salesforce-spring-26-cpq-changes": `...`,
```

Add the following **before** the existing `"salesforce-spring-26-cpq-changes"` key:

```js
"salesforce-headless-360": `## Die Frage, die jeder Kunde stellt

„Müssen wir uns wirklich um Headless 360 kümmern?"

Seit Salesforce es am 15. April 2026 auf dem TrailblazerDX angekündigt hat, habe ich wöchentlich irgendeine Version dieses Gesprächs. Und anders als bei den meisten Salesforce-Fragen lautet meine Antwort diesmal nicht „kommt darauf an."

Ja. Sie müssen sich darum kümmern. Aber wann und wie viel — da liegt die Nuance.

## Was Salesforce Headless 360 wirklich ist

Vergessen Sie das Marketing-Sprech. Hier ist die verständliche Version:

Salesforce hatte immer eine browserbasierte Oberfläche — die Bildschirme, durch die Ihre Vertriebsmitarbeiter, Admins und Service-Agenten täglich klicken. Hinter dieser Oberfläche lag alles: Ihre Daten, Ihre Workflows, Ihre Geschäftslogik, Ihre Automatisierung.

Headless 360 macht den Browser optional. Jede Funktion in Salesforce ist jetzt als API-Endpunkt, MCP-Tool oder CLI-Befehl zugänglich. Das bedeutet: Ein KI-Agent — kein Mensch — kann Ihr CRM abfragen, Workflows auslösen, Datensätze aktualisieren und Geschäftslogik ausführen, ohne jemals einen Browser zu öffnen.

Salesforce nennt dies die bedeutendste Architekturänderung in seiner 27-jährigen Geschichte. Basierend auf dem, was ich auf dem TDX gesehen habe, würde ich zustimmen.

## Die 3 Säulen: Was sie für Ihre Organisation bedeuten

### 1. MCP-Tools & Coding-Skills

Salesforce hat über 60 neue MCP-Tools und 30 vorkonfigurierte Coding-Skills geliefert. Diese geben Coding-Agenten (Claude Code, Cursor, Codex, Windsurf) vollständigen, Live-Zugang zu Ihrer gesamten Salesforce-Umgebung — Ihre Daten, Workflows und Geschäftslogik — direkt aus ihrer IDE.

**Was das praktisch bedeutet:** Entwickler müssen nicht mehr zwischen Salesforce Setup, VS Code und Dokumentation wechseln. Ein Entwickler, der Claude Code verwendet, kann Ihr Salesforce-Schema abfragen, Apex schreiben, in die Sandbox deployen und Tests ausführen — alles über eine Schnittstelle. Bei einem Unternehmen, mit dem ich arbeite, sank die DevOps-Zykluszeit in deren Pilot um 40%.

### 2. Die Experience Layer

Dies ist das leise revolutionäre Stück. Die Experience Layer trennt, was ein Agent *tut*, von wie er es *darstellt*. Ein Agentforce-Agent kann eine Verlängerungszusammenfassung, einen Umbuchungs-Workflow oder eine Entscheidungskachel zurückgeben — und diese Ausgabe rendert nativ, wo auch immer der Benutzer ist: Slack, Microsoft Teams, ChatGPT, Claude, WhatsApp oder jeder MCP-kompatible Client.

**Was das praktisch bedeutet:** Ihre Agenten sind nicht in der Salesforce-Oberfläche gefangen. Die Ausgabe eines Kundenservice-Agenten kann direkt in dem Tool erscheinen, in dem Ihr Support-Team bereits arbeitet, ohne dass jemand Tabs wechseln muss. Dies ist das Stück, das die Endbenutzerakzeptanz wirklich verändert.

### 3. Agent Governance

Salesforce hat eine Governance-Suite speziell für KI-Agenten eingeführt: Testing Center für die Validierung vor dem Launch, benutzerdefinierte Bewertungsauswertungen zur Beurteilung der Entscheidungsqualität sowie Session-Tracing und A/B-Testing nach dem Launch.

**Was das praktisch bedeutet:** Dies macht Headless 360 sicher für den Einsatz in regulierten Branchen. Sie können das Agentenverhalten validieren, bevor es die Produktion berührt, Entscheidungen in Echtzeit überwachen und zurückrollen, wenn etwas schiefläuft. Ohne dies würde die Unternehmensadoption ins Stocken geraten.

## Ist Headless 360 jetzt für Ihre Organisation relevant?

| Ihre Situation | Relevanz |
|---|---|
| Agentforce bereits im Einsatz | ✅ Jetzt handeln — Headless 360 erweitert, was Sie haben |
| Benutzerdefinierte Salesforce-Integrationen im Aufbau | ✅ Jetzt handeln — MCP-Tools ersetzen Custom-Middleware |
| Agentische Workflows in den nächsten 12 Monaten geplant | ✅ Jetzt handeln — mit diesem im Hinterkopf planen |
| Datenqualität ist sauber und gut verwaltet | ✅ Jetzt handeln — Sie sind bereit, Agenten aufzusetzen |
| Datenqualität ist inkonsistent oder nicht gemappt | ⚠️ Zuerst Daten bereinigen — Agenten verstärken Datenprobleme |
| Kleines Team, derzeit keine Automatisierungskapazität | ⏳ Abwarten — in 6 Monaten erneut prüfen |
| Heute keine Salesforce-Automatisierung vorhanden | ❌ Noch nicht — erst die Grundlage aufbauen |

## Was sich nicht geändert hat

Ein paar Dinge, die es wert sind, laut ausgesprochen zu werden, bevor Sie vom Hype mitgerissen werden:

**Schlechte Daten liefern schlechte Entscheidungen.** Ein Agent, der ein MCP-Tool aufruft, um den Verlängerungsstatus eines Kunden zu prüfen, liefert Unsinn, wenn Ihre Salesforce-Daten dupliziert, nicht gemappt oder veraltet sind. Datenbereitschaft ist kein Nice-to-have — sie ist eine Voraussetzung.

**Admins und Berater verschwinden nirgendwo.** Headless 360 braucht Governance, Konfiguration und Prozessdesign. Agenten erben Ihre bestehenden Workflows — was bedeutet, wenn Ihre Workflows kaputt sind, werden Ihre Agenten auch kaputt sein. Jemand muss diese Workflows noch immer entwerfen, testen und warten.

**Es entwickelt sich noch weiter.** Dies wurde im April 2026 angekündigt. Fordern Sie Sandbox-Zugang an, bevor Sie Produktionspläne auf Funktionen aufbauen, die sich noch ändern können.

## Was Sie jetzt tun sollten

1. **Datenqualität prüfen** — Führen Sie eine Deduplizierungs- und Feld-Mapping-Überprüfung durch, bevor Sie eine Agentenimplementierung planen. Agenten werden jedes Datenproblem aufdecken, das Sie bisher überdeckt haben.
2. **Sandbox-Zugang zu den MCP-Tools beantragen** — Fordern Sie einen erweiterten Pilot von Ihrem Salesforce AE an. Bauen Sie nicht auf Funktionen, die Sie nicht in Ihrer eigenen Umgebung validiert haben.
3. **Einen internen Workflow als Pilot wählen** — Versuchen Sie nicht, alles auf einmal zu lösen. Finden Sie einen sich wiederholenden, regelbasierten Workflow, bei dem ein Agent eine menschliche Entscheidung ersetzen könnte — eine Verlängerungsbenachrichtigung, einen Angebotsfreigabe-Trigger, einen Support-Ticket-Klassifikator.
4. **Governance-Anforderungen definieren** — Bevor Sie in Produktion gehen, legen Sie fest: Wer genehmigt Agentenaktionen, wie prüfen Sie Entscheidungen und was ist der Eskalationspfad, wenn ein Agent falsch liegt.

---

*Möchten Sie wissen, ob Ihre Salesforce-Organisation agent-ready ist? [Lassen Sie uns sprechen](/index.html#contact) — ich gebe Ihnen eine klare Antwort, kein Verkaufsgespräch.*`,
```

- [ ] **Step 2: Verify the key exists in `blogPostContent.de`**

Run:
```bash
cd "projects/personal-portfolio" && node -e "import('./src/data/blog/posts.js').then(m => console.log('DE content keys:', Object.keys(m.blogPostContent.de)))"
```
Expected output:
```
DE content keys: [ 'salesforce-headless-360', 'salesforce-spring-26-cpq-changes', 'revenue-cloud-vs-cpq' ]
```

---

## Task 4: Verify Rendering & Commit

**Files:**
- No file changes — verification only

- [ ] **Step 1: Start the dev server**

```bash
cd "projects/personal-portfolio" && npm run dev
```
Expected: Server starts on `http://localhost:5173` with no errors.

- [ ] **Step 2: Verify the post card appears in the Blog section**

Open `http://localhost:5173/#blog` in a browser. Confirm:
- The new card "Salesforce Headless 360: Is Your Org Agent-Ready?" appears first in the grid
- Tags show: Salesforce, Headless 360, Agentforce, Architecture
- Date shows: May 11, 2026
- Read time shows: 7 min read

- [ ] **Step 3: Verify the full post renders correctly**

Click the card (or navigate to `http://localhost:5173/blog/salesforce-headless-360`). Confirm:
- Title renders correctly
- All 7 sections are visible (Hook, What It Is, 3 Pillars, Decision Matrix table, What Hasn't Changed, What To Do Now, CTA)
- The decision matrix table renders as a proper table (not raw markdown)
- The CTA link `/index.html#contact` is present

- [ ] **Step 4: Switch to German and verify**

Click the language toggle to switch to DE. Navigate to `http://localhost:5173/blog/salesforce-headless-360`. Confirm:
- Title shows: "Salesforce Headless 360: Ist Ihre Organisation Agent-Ready?"
- All content is in German
- Decision matrix table renders correctly in German

- [ ] **Step 5: Commit**

```bash
cd "projects/personal-portfolio" && git add src/data/blog/posts.js && git commit -m "feat(blog): add Salesforce Headless 360 post in EN and DE"
```

---

## Self-Review

**Spec coverage:**
- [x] Slug `salesforce-headless-360` — Task 1
- [x] Date 2026-05-11, readTime 7, tags, image path — Task 1
- [x] Both `blogPosts.en` and `blogPosts.de` metadata — Task 1
- [x] Hook → What It Is → 3 Pillars → Decision Matrix → What Hasn't Changed → What To Do Now → CTA — Tasks 2 & 3
- [x] EN content in `blogPostContent.en` — Task 2
- [x] DE content in `blogPostContent.de` — Task 3
- [x] Browser verification (EN + DE) — Task 4
- [x] No translations.js changes needed — confirmed in Task 1 notes

**Placeholder scan:** No TBDs, TODOs, or vague steps. All code blocks contain complete content.

**Type consistency:** Slug `"salesforce-headless-360"` used identically across `blogPosts.en[0].slug`, `blogPosts.de[0].slug`, `blogPostContent.en["salesforce-headless-360"]`, and `blogPostContent.de["salesforce-headless-360"]`.
