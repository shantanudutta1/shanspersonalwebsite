# Design Spec: Salesforce Headless 360 Blog Post

**Date:** 2026-05-11  
**Author:** Shantanu Dutta  
**Status:** Approved

---

## Overview

Add a new blog post to the personal portfolio website about Salesforce Headless 360 — the major agentic platform shift announced at TrailblazerDX 2026 (April 15, 2026). The post follows the existing decision-framework style (modelled on "Revenue Cloud vs CPQ") and is written from a senior Salesforce consultant's perspective.

---

## Post Metadata

| Field      | Value                                        |
|------------|----------------------------------------------|
| Slug       | `salesforce-headless-360`                    |
| Date       | 2026-05-11                                   |
| Read time  | 7 min                                        |
| Tags       | Salesforce, Headless 360, Agentforce, Architecture |
| Image      | `/blog/salesforce-headless-360.png`          |
| Author     | Shantanu Dutta                               |
| Languages  | English (en) + German (de)                   |

---

## Content Structure (Decision-Framework Style)

### 1. Hook
Opens with the question clients are asking post-TDX 2026: "Do we need to care about Headless 360?" — positions the post as the honest consultant answer, not the Salesforce marketing answer.

### 2. What It Actually Is
Plain-language explanation of the architectural shift:
- "Headless" = the browser UI becomes optional
- Everything exposed via API, MCP tool, or CLI command
- AI agents can operate the full Salesforce platform without a human clicking through a UI
- Described as the most significant platform change in Salesforce's 27-year history

### 3. The 3 Pillars (what they mean for your org)
- **MCP Tools & Coding Skills** — 60+ new MCP tools + 30 coding skills; coding agents (Claude Code, Cursor, Codex) get full live access to your Salesforce data, workflows, and business logic
- **Experience Layer** — Separates what an agent *does* from how it *renders*; agent outputs appear natively in Slack, Teams, ChatGPT, Claude, WhatsApp — not just in Salesforce UI
- **Agent Governance** — Testing Center for pre-launch validation, custom scoring evaluations, session tracing and A/B testing post-launch

### 4. Decision Matrix — "Is Headless 360 relevant to you right now?"
Table with criteria rows and Yes/No/Maybe columns:

| Criteria | Relevant Now | Wait and See | Not Applicable |
|---|---|---|---|
| Already using Agentforce | ✅ | | |
| Building custom integrations | ✅ | | |
| Planning agentic workflows | ✅ | | |
| Data quality is clean | ✅ | | |
| Data quality is poor | | ✅ wait | |
| No Salesforce automation today | | | ❌ |
| DevOps tooling is mature | ✅ | | |
| Small team, limited capacity | | ✅ | |

### 5. What Hasn't Changed
Manages expectations and builds trust:
- Bad data still returns bad agent decisions
- Admins and consultants are still essential (agents need governance)
- Feature set still evolving — sandbox first
- Not a replacement for process design

### 6. What To Do Now
Four concrete steps:
1. Audit data quality — agents inherit your data problems
2. Explore the 60+ MCP tools in a sandbox
3. Identify one internal workflow to pilot with Agentforce
4. Review governance requirements before production rollout

### 7. CTA
Contact Shantanu to discuss Headless 360 readiness for their org.

---

## Technical Implementation

### Files to Modify
- `src/data/blog/posts.js` — add new entry to both `en` and `de` arrays in `blogPosts`, and add full markdown content to both `en` and `de` objects in `blogPostContent`

### Files NOT to Modify
- No new React components needed (Blog.jsx and BlogPost.jsx already handle rendering)
- No changes to translations.js (no new translation keys — blog post content lives in posts.js)
- No changes to App.jsx or routing (BlogPost route already handles any slug)

### Image
A placeholder image path `/blog/salesforce-headless-360.png` will be referenced. The image must be added to the `public/blog/` directory separately (out of scope for this implementation).

---

## Constraints & Standards (from shantanu_agent.md)

- Glassmorphism design: handled by existing `.card` class in Blog.jsx — no CSS changes needed
- Translation rule: blog post content is bilingual within `posts.js` (not in `translations.js`), so the translation invariant is satisfied by writing both `en` and `de` entries simultaneously
- No new components created — existing architecture handles the new post automatically

---

## Spec Self-Review

- [x] No TBD or placeholder sections
- [x] Architecture matches feature description (data-only change, no component work)
- [x] No contradictions between sections
- [x] Scope is focused — single file edit (`posts.js`)
- [x] Both language blocks explicitly required — no ambiguity
- [x] Image path documented, out-of-scope status explicit
