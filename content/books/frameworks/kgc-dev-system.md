---
title: KGC Dev System
description: Error Detection → Fix Pipeline. The full stack, error pipeline, build pipeline, and platform rules for shipping and monitoring.
---

# KGC Dev System
## Error Detection → Fix Pipeline

A single system for building, shipping, and keeping apps healthy. When something breaks in production, you know where to look — and the pipeline from error to fix is already defined.

---

## The full stack

Six tools that cover detection, alerts, tracking, and fixes:

| Tool | Job |
|------|-----|
| **Sentry** | Detects errors in live apps automatically |
| **Slack** | Receives alerts from Sentry + Linear |
| **Linear** | Tracks all bugs and tasks |
| **Cursor Cloud Agent** | AI that attempts to fix the error |
| **UptimeRobot** | Monitors if sites are up or down |
| **Vercel Analytics** | Frontend traffic and usage stats |

---

## Error pipeline

From production error to closed ticket:

```
1. Error occurs in live app
         ↓
2. Sentry detects it automatically
         ↓
3. Sentry → Slack (Alert #1: what broke + where)
   Sentry → Linear (issue created and logged)
         ↓
4. Linear → Slack (Alert #2: issue confirmed tracked)
         ↓
5. Open Sentry → find the error → read the Root Cause
         ↓
6. Click "Send to Cursor Cloud Agent"
         ↓
7. Cursor Agent analyzes the error and attempts the fix
         ↓
8. Click "Open in Cursor" → review the fix
         ↓
9. Test locally → confirm fix works
         ↓
10. Push to GitHub → auto deploys to Vercel / Railway
         ↓
11. Sentry confirms error stops occurring in production
         ↓
12. Close the Linear issue
```

---

## Build + deploy pipeline

From idea to live URL:

```
1. ChatGPT        → Research
2. Claude         → Architecture, concepts, brand
3. Cursor         → Full build and debug
4. Local          → Test everything before shipping
5. Gitea          → Local git commit
6. GitHub         → Cloud git push
7. Railway        → Backend auto deploys
   Vercel         → Frontend auto deploys
8. UptimeRobot    → Auto-monitors the new live URL
9. AWS / Supabase → Storage if needed
10. Sentry        → Watching for errors in production
```

---

## Platform rules

One place per job — no guessing where things live:

| What | Where |
|------|-------|
| Frontend (React, Next.js, static sites) | Vercel |
| Backend (APIs, servers, workers) | Railway |
| Database (PostgreSQL) | Railway |
| File storage | AWS S3 |
| Error tracking | Sentry |
| Uptime monitoring | UptimeRobot |
| Bug + task tracking | Linear |
| Team alerts | Slack |

---

## Account structure

- **Vercel** — One account per billing entity (your projects vs client projects).
- **Railway** — One account per billing entity.
- **Credentials** — All in Bitwarden; never in plain text.
- **Notes** — One Obsidian note per project (see PROJECT-TEMPLATE.md).

---

## Pre-demo checklist

Before showing any project to anyone:

- [ ] **Live URL** — Open it; confirm it loads.
- [ ] **Linear** — Check the backlog; know what’s broken before they see it.
- [ ] **User flow** — Test the main path end to end.
- [ ] **UptimeRobot** — No recent downtime.
- [ ] **Data** — Demo data or test accounts are ready.

---

## The one habit that holds it all together

> When you find a bug — open Linear and write one line before you close your laptop.  
> Don’t fix it now. Just log it. **Memory is not a system.**

---

*KGC Dev System — March 2026*
