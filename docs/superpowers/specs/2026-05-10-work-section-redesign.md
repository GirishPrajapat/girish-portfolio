# Work Section Redesign — Design Spec
Date: 2026-05-10

## Goal
Replace the placeholder Projects accordion with a services + process section that builds trust and drives visitors to book a call.

## Section Identity
- Mono label: `• HOW IT WORKS`
- Heading: `THE PROCESS.` (Clash Display 700, clamp 56px→110px)
- Distinct from StackingCards which owns "WHAT I Build."

## Process Steps (4, vertical stack)
Each step is a horizontal row: large cyan number left, title + description right, thin separator between rows.

| # | Title | Description |
|---|-------|-------------|
| 01 | Discovery | I get to know your business — the industry, your workflow, the problems you're facing, and what success looks like. |
| 02 | Diagnosis | I map where AI fits — what to automate, what to assist, and what to build first. |
| 03 | Build | Your custom AI system, built and integrated. Timeline depends on complexity — typically 1 to 4 weeks. |
| 04 | Deliver & Onboard | Fully working system handed off to you. I onboard your team and stay available for iterations. |

## Service Cards (2 cards, below steps)
- `Custom AI Agents` — One agent, one job, done right. Lead qualification, outreach, research, reporting.
- `Multi-Agent Systems` — Multiple agents working as a team across your entire workflow end-to-end.
- Websites: subtle de-emphasized tag/pill only, not a full card.

## CTA Row (bottom of section)
- Text: "Ready to automate your business?"
- Button: `Book a Call →` (cyan fill, cream hover)

## Visual Style
- Follows existing portfolio tokens: `--font-display`, `--font-serif`, `--font-mono`, `--font-body`
- Cyan `#00D4FF` for step numbers and CTA button
- Cream `#F1EFE8` for all text
- Dark card background `#141412` for service cards
- Thin separators: `rgba(255,255,255,0.06)`
- Section padding: `py-24`, max-width `1280px`

## Out of Scope
- Proof of work (handled by StackingCards)
- Detailed case studies (handled by StackingCards)
- Mobile-specific layout changes beyond responsive text sizing
