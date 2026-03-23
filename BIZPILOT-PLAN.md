# BizPilot AI - Master Plan

## What Is This?
AI automation agency for small businesses.
You build custom AI systems (booking, customer response, dashboards, etc.) for local businesses using Claude Code.

---

## Current Status

### Done
- [x] Remote setup: WSL + Ubuntu + tmux + SSH + Tailscale
- [x] Claude Code installed in WSL (v2.1.81)
- [x] Phone access: Termius + Tailscale (IP: 100.65.47.88)
- [x] Auto-start on boot (SSH + Tailscale + WSL)
- [x] Website built (Next.js) - localhost working
- [x] Shortcut: `cc` = tmux attach/new

### Not Done Yet
- [ ] Deploy website to Vercel
- [ ] Connect form to email notifications
- [ ] Add Calendly link for booking meetings
- [ ] Buy domain (bizpilotai.com)
- [ ] Set up business email
- [ ] Google Business Profile
- [ ] Stripe account for payments
- [ ] First free client

---

## Priority Order (Do This In Order!)

### Phase 1: GO LIVE (This Week)
1. Deploy to Vercel (free)
2. Connect form → email notification (Formspree, free)
3. Add Calendly link (free)
4. Buy domain bizpilotai.com (~$12/yr)

### Phase 2: GET FIRST CLIENT (Week 2)
5. Walk into 3 local businesses in Flower Mound
6. Offer FREE automation for 1 business (portfolio piece)
7. Post in Facebook local groups (DFW, Flower Mound)
8. Post on Nextdoor app

### Phase 3: GET PAID (Week 3-4)
9. Set up Stripe
10. Get testimonial + Google review from free client
11. Start charging: $199-399/mo
12. Ask free client for referrals

### Phase 4: SCALE (Month 2+)
13. Google Business Profile
14. Instagram/TikTok content (show building process)
15. Google Ads ($5-10/day)
16. Hire help when you hit 10+ clients

---

## Remote Access Setup (For Reference)

### Desktop (US - always on, monitor ON for Blink camera)
- WSL Ubuntu with: tmux, SSH server, Tailscale, Claude Code
- Tailscale IP: 100.65.47.88
- Auto-starts on Windows boot (scheduled task: WSL-AutoStart)
- WSL auto-starts: SSH + Tailscale daemon

### Phone (Korea or anywhere)
- Tailscale app (connected)
- Termius app (SSH client)
- Blink camera app (monitor watching)

### Daily Usage
```
Open Termius → tap saved host → type "cc" → type "claude" → work!
Exit: Ctrl+B then D (tmux detach - work keeps running)
Reconnect: Termius → tap host → "cc" → everything still there!
```

### If PC Reboots
Everything auto-starts. Just reconnect from Termius.

### DNS Fix (Important!)
WSL resolv.conf is set to not auto-generate.
If DNS breaks: `sudo bash -c 'echo "nameserver 8.8.8.8" > /etc/resolv.conf'`

---

## Website Structure (Conversion-Optimized)

Built with Next.js at: `~/OneDrive/Desktop/bizpilot-ai/`

### Sections (Shopify/Stripe style):
1. Fixed navbar with CTA
2. Hero with urgency badge + double CTA
3. Social proof bar (500+, 12000+, 98%, 3.2x)
4. Problem section with stats (73%, 60%, $50K)
5. Services (6 cards)
6. Before/After comparison
7. Testimonials (3 cards with stars)
8. How It Works (3 steps)
9. Pricing (3 tiers: $199, $399, Custom)
10. Money-back guarantee
11. FAQ accordion
12. Contact form
13. Final CTA
14. Footer

---

## Revenue Projections

| Clients | Plan | Monthly Revenue |
|---------|------|-----------------|
| 5 | $200/mo avg | $1,000/mo |
| 20 | $200/mo avg | $4,000/mo |
| 50 | $200/mo avg | $10,000/mo |

Server costs: ~$20-50/mo (negligible)

---

## Services You Can Offer

| Service | For Who | Difficulty |
|---------|---------|------------|
| Booking system | Restaurants, salons, clinics | Easy |
| AI customer response | All businesses | Easy |
| Review booster | Local businesses | Easy |
| Custom website | All businesses | Easy |
| Business dashboard | All businesses | Medium |
| Workflow automation | All businesses | Medium |

---

## Sales Approach

### Best Channels (Free)
1. **Door-to-door** in Flower Mound - most effective!
2. **Facebook groups** - DFW business owners
3. **Nextdoor app** - local community
4. **Referrals** - ask happy clients to refer

### Script for First Visit
"Hi! I help local businesses save 20+ hours a week with AI automation.
I'm offering a free setup for one business in the area as a portfolio piece.
Would you be interested in a free 15-minute consultation?"

### Estimated Monthly Costs
- Domain: ~$1/mo
- Vercel hosting: $0
- Formspree: $0 (under 50 submissions)
- Calendly: $0 (basic plan)
- Claude Code subscription: existing plan
- Electricity (PC on 24/7): ~$10-15/mo
- **Total: ~$12-17/mo**

---

## How to Continue Working With Claude

### Option 1: From Desktop
Open Claude Code in terminal → reference this file:
```
claude
> read BIZPILOT-PLAN.md and let's continue where we left off
```

### Option 2: From Phone (Korea)
```
Termius → connect → cc → claude
> read BIZPILOT-PLAN.md and let's continue where we left off
```

### Key Files
- `~/OneDrive/Desktop/bizpilot-ai/` - website code
- `~/OneDrive/Desktop/bizpilot-ai/BIZPILOT-PLAN.md` - this file (master plan)

---

## CLAUDE.md Notes
When starting a new Claude Code session, tell Claude:
"I'm building BizPilot AI - an AI automation agency for small businesses.
Read BIZPILOT-PLAN.md for full context."

---

*Last updated: March 22, 2026*
