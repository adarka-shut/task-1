# Bird Leaderboard — Report

## Overview

This project reimplements a corporate employee contribution leaderboard as a fun, data-driven **Bird Leaderboard** — ranking 10 real bird species across five measurable categories using actual ornithological data.

The live app is deployed on GitHub Pages: **[Link to deployed app]**

---

## Approach

### 1. Analyzing the Original UI

The original leaderboard had these key UI elements:

- **Podium** for the top 3 performers (gold/silver/bronze pedestals with avatars, names, and total scores)
- **Filters** — year, quarter, category dropdowns + a search bar
- **Ranked list** — each row showing position, avatar, name, role, category icons with counts, and total score
- **Expandable detail panel** — showing individual activities with category tags, dates, and point values

Every element was replicated in the bird version while preserving the visual hierarchy and interaction patterns.

### 2. Data Replacement Strategy

All confidential employee data was replaced with a bird-themed dataset:

| Original Field | Bird Replacement |
|---|---|
| Employee name | Bird species name (English) |
| Job title / Unit | Nesting country (Belarus, Poland, Uzbekistan, UK, USA) |
| Profile photo | Custom SVG illustration of each bird |
| Contribution categories | 5 ornithological metrics: Max Speed, Weight, Lifespan, Eggs per clutch, Population |
| Points (arbitrary) | Rank-based scores 1–10 derived from real data |
| Years | 2000 vs 2025 (real population comparison) |
| Quarters | Seasonal lifecycle: Q1 Migration, Q2 Nesting, Q3 Breeding, Q4 Fall Migration |
| Activities | Real biological facts per bird per category |

### 3. Bird Selection Criteria

10 birds were chosen to maximize visual and biological contrast:

- **Peregrine Falcon** (UK) — fastest animal on Earth, 389 km/h stoop
- **White Stork** (Belarus) — national symbol, large migratory wader
- **Golden Eagle** (Poland) — powerful raptor, longest-lived on the list
- **Bald Eagle** (USA) — conservation success story (+351% population recovery)
- **Common Swift** (Belarus) — spends 10 months airborne, tiny 44g body
- **Atlantic Puffin** (UK) — charming seabird, population declining sharply (−60%)
- **Wild Turkey** (USA) — heaviest bird on the list, prolific breeder (10–14 eggs)
- **Eurasian Hoopoe** (Uzbekistan) — iconic crest, butterfly-like flight
- **Barn Owl** (Poland) — silent nocturnal hunter, heart-shaped face
- **Turkestan Ground Jay** (Uzbekistan) — rare desert endemic, Near Threatened

### 4. Scoring System

Each bird was ranked 1–10 in each of the five categories based on real-world data. The scoring uses relative ranking within the group:

- **Max Speed**: Peregrine Falcon (10) → Turkestan Ground Jay (1)
- **Weight**: Wild Turkey (9) → Common Swift (1)
- **Lifespan**: Golden Eagle (10) → Wild Turkey/Barn Owl (1)
- **Eggs per clutch**: Wild Turkey (10) → Common Swift/Atlantic Puffin (1)
- **Population**: Common Swift (10) → Turkestan Ground Jay (1)

The **Population** category is the only one that changes between 2000 and 2025, creating meaningful ranking shifts when the user switches years. For example, the Bald Eagle jumps from rank 2 to rank 6 in population score due to its dramatic recovery.

### 5. Data Sources

All bird data was gathered from peer-reviewed and authoritative sources:
- BirdLife International species factsheets
- Cornell Lab of Ornithology (All About Birds)
- U.S. Fish & Wildlife Service (eagle population reports)
- NABU International White Stork Census (2024)
- Wikipedia (cross-referenced with primary sources)
- A-Z Animals, BioDB, Animalia.bio (aggregated metrics)

---

## Tools & Technologies

| Tool | Purpose |
|---|---|
| **React 18** | UI framework (functional components, hooks) |
| **Vite 5** | Build tool and dev server |
| **SVG** | Custom bird illustrations (hand-coded, no copyright issues) |
| **CSS-in-JS** | Inline styles for component isolation |
| **Google Fonts** | Crimson Pro (headings) + DM Sans (body text) |
| **GitHub Actions** | CI/CD pipeline for automatic deployment |
| **GitHub Pages** | Static hosting |
| **Claude AI** | Research assistant for gathering ornithological data, code generation |

---

## Key Design Decisions

1. **SVG bird portraits instead of photos** — avoids copyright issues entirely. Each bird has a unique, recognizable illustration with species-specific features (Puffin's colorful beak, Hoopoe's crest, Barn Owl's heart-shaped face, etc.).

2. **2000 vs 2025 year toggle** — instead of arbitrary time periods, uses real population data spanning 25 years. This makes the year filter meaningful: switching years reveals conservation stories (Bald Eagle recovery, Puffin decline).

3. **Seasons as quarters** — Q1–Q4 map to bird lifecycle stages (Migration → Nesting → Breeding → Fall Migration), giving the quarter filter ecological relevance.

4. **Warm, natural color palette** — earth tones with serif typography (Crimson Pro) to evoke a field guide aesthetic, differentiating from the corporate original.

5. **Podium always visible** — unlike the original where the podium might only show in default view, this version keeps the podium rendered under all filter combinations, dynamically updating the top 3.

---

## Project Structure

```
bird-leaderboard/
├── .github/workflows/deploy.yml   # GitHub Pages CI/CD
├── index.html                      # Entry point
├── package.json                    # Dependencies & scripts
├── vite.config.js                  # Vite configuration
├── report.md                       # This file
└── src/
    ├── main.jsx                    # React mount point
    └── App.jsx                     # Full application (single-file)
```

The entire app is a single React component (~800 lines) with no external UI libraries — just React, inline styles, and hand-drawn SVG.
