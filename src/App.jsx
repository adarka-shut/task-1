import { useState, useMemo } from "react";

// ─── SVG Bird Illustrations ───
const BirdSVG = ({ bird, size = 60 }) => {
  const birds = {
    "Peregrine Falcon": (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <defs><radialGradient id="pf-bg" cx="50%" cy="40%"><stop offset="0%" stopColor="#e8f4fd"/><stop offset="100%" stopColor="#b8d4e8"/></radialGradient></defs>
        <circle cx="50" cy="50" r="48" fill="url(#pf-bg)"/>
        <path d="M50 15 C40 15 30 25 28 40 C26 55 35 70 50 85 C65 70 74 55 72 40 C70 25 60 15 50 15Z" fill="#4a5568" stroke="#2d3748" strokeWidth="1"/>
        <path d="M50 15 C45 15 38 22 36 32 C50 28 50 28 64 32 C62 22 55 15 50 15Z" fill="#2d3748"/>
        <circle cx="43" cy="35" r="4" fill="#fbd38d"/><circle cx="43" cy="35" r="2" fill="#1a202c"/>
        <circle cx="57" cy="35" r="4" fill="#fbd38d"/><circle cx="57" cy="35" r="2" fill="#1a202c"/>
        <path d="M47 42 Q50 46 53 42" fill="#f6ad55" stroke="#dd6b20" strokeWidth="1"/>
        <path d="M28 40 Q15 55 10 45" fill="#4a5568" stroke="#2d3748" strokeWidth="0.5"/>
        <path d="M72 40 Q85 55 90 45" fill="#4a5568" stroke="#2d3748" strokeWidth="0.5"/>
        <path d="M35 55 C38 65 45 75 50 85 C55 75 62 65 65 55" fill="#e2e8f0" stroke="#a0aec0" strokeWidth="0.5"/>
        <text x="50" y="98" textAnchor="middle" fontSize="6" fill="#4a5568" fontWeight="bold">⚡ 389 km/h</text>
      </svg>
    ),
    "White Stork": (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <defs><radialGradient id="ws-bg" cx="50%" cy="40%"><stop offset="0%" stopColor="#fef9f0"/><stop offset="100%" stopColor="#fde8c8"/></radialGradient></defs>
        <circle cx="50" cy="50" r="48" fill="url(#ws-bg)"/>
        <line x1="45" y1="70" x2="42" y2="95" stroke="#e53e3e" strokeWidth="3"/>
        <line x1="55" y1="70" x2="58" y2="95" stroke="#e53e3e" strokeWidth="3"/>
        <ellipse cx="50" cy="55" rx="18" ry="20" fill="white" stroke="#e2e8f0" strokeWidth="1"/>
        <path d="M32 50 Q20 40 15 50" fill="#1a202c"/>
        <path d="M68 50 Q80 40 85 50" fill="#1a202c"/>
        <circle cx="50" cy="32" r="12" fill="white" stroke="#e2e8f0" strokeWidth="0.5"/>
        <circle cx="46" cy="30" r="2.5" fill="#1a202c"/><circle cx="46" cy="29.5" r="0.8" fill="white"/>
        <circle cx="54" cy="30" r="2.5" fill="#1a202c"/><circle cx="54" cy="29.5" r="0.8" fill="white"/>
        <path d="M50 34 L58 36 L50 37Z" fill="#e53e3e"/>
      </svg>
    ),
    "Golden Eagle": (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <defs><radialGradient id="ge-bg" cx="50%" cy="40%"><stop offset="0%" stopColor="#fefcbf"/><stop offset="100%" stopColor="#ecc94b"/></radialGradient></defs>
        <circle cx="50" cy="50" r="48" fill="url(#ge-bg)"/>
        <path d="M50 20 C38 20 25 35 25 55 C25 70 38 85 50 85 C62 85 75 70 75 55 C75 35 62 20 50 20Z" fill="#744210" stroke="#5a3410" strokeWidth="1"/>
        <path d="M50 20 C43 20 35 28 33 38 C42 35 58 35 67 38 C65 28 57 20 50 20Z" fill="#d69e2e"/>
        <circle cx="42" cy="38" r="4" fill="#fefcbf"/><circle cx="42" cy="38" r="2.2" fill="#1a202c"/>
        <circle cx="58" cy="38" r="4" fill="#fefcbf"/><circle cx="58" cy="38" r="2.2" fill="#1a202c"/>
        <path d="M47 45 Q50 49 53 45" fill="#d69e2e" stroke="#b7791f" strokeWidth="1.5"/>
        <path d="M25 45 Q8 35 5 50" fill="#744210" stroke="#5a3410" strokeWidth="0.5"/>
        <path d="M75 45 Q92 35 95 50" fill="#744210" stroke="#5a3410" strokeWidth="0.5"/>
      </svg>
    ),
    "Bald Eagle": (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <defs><radialGradient id="be-bg" cx="50%" cy="40%"><stop offset="0%" stopColor="#ebf8ff"/><stop offset="100%" stopColor="#bee3f8"/></radialGradient></defs>
        <circle cx="50" cy="50" r="48" fill="url(#be-bg)"/>
        <path d="M50 30 C35 30 22 45 22 60 C22 75 35 88 50 88 C65 88 78 75 78 60 C78 45 65 30 50 30Z" fill="#2d3748"/>
        <path d="M22 55 Q5 42 3 55" fill="#2d3748"/><path d="M78 55 Q95 42 97 55" fill="#2d3748"/>
        <circle cx="50" cy="28" r="14" fill="white"/>
        <circle cx="44" cy="26" r="3" fill="#2b6cb0"/><circle cx="44" cy="26" r="1.5" fill="#1a202c"/>
        <circle cx="56" cy="26" r="3" fill="#2b6cb0"/><circle cx="56" cy="26" r="1.5" fill="#1a202c"/>
        <path d="M47 33 L55 35 L47 36Z" fill="#ecc94b" stroke="#d69e2e" strokeWidth="0.5"/>
        <path d="M42 85 L40 98" stroke="#ecc94b" strokeWidth="3"/><path d="M58 85 L60 98" stroke="#ecc94b" strokeWidth="3"/>
      </svg>
    ),
    "Common Swift": (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <defs><radialGradient id="cs-bg" cx="50%" cy="40%"><stop offset="0%" stopColor="#e9d8fd"/><stop offset="100%" stopColor="#d6bcfa"/></radialGradient></defs>
        <circle cx="50" cy="50" r="48" fill="url(#cs-bg)"/>
        <path d="M50 30 C45 30 40 35 38 45 C36 55 42 65 50 70 C58 65 64 55 62 45 C60 35 55 30 50 30Z" fill="#2d3748"/>
        <path d="M38 42 Q10 30 5 55" fill="#4a5568" stroke="#2d3748" strokeWidth="0.5"/>
        <path d="M62 42 Q90 30 95 55" fill="#4a5568" stroke="#2d3748" strokeWidth="0.5"/>
        <path d="M45 65 L50 85 L55 65" fill="#4a5568"/>
        <circle cx="46" cy="38" r="2" fill="white"/><circle cx="46" cy="38" r="1" fill="#1a202c"/>
        <circle cx="54" cy="38" r="2" fill="white"/><circle cx="54" cy="38" r="1" fill="#1a202c"/>
        <path d="M48 43 Q50 45 52 43" fill="#4a5568" stroke="#2d3748" strokeWidth="0.8"/>
      </svg>
    ),
    "Atlantic Puffin": (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <defs><radialGradient id="ap-bg" cx="50%" cy="40%"><stop offset="0%" stopColor="#fff5f5"/><stop offset="100%" stopColor="#fed7d7"/></radialGradient></defs>
        <circle cx="50" cy="50" r="48" fill="url(#ap-bg)"/>
        <ellipse cx="50" cy="60" rx="16" ry="22" fill="#1a202c"/>
        <ellipse cx="50" cy="62" rx="10" ry="18" fill="white"/>
        <circle cx="50" cy="35" r="14" fill="#1a202c"/>
        <path d="M36 30 C36 25 50 20 50 30" fill="white"/>
        <path d="M64 30 C64 25 50 20 50 30" fill="white"/>
        <circle cx="43" cy="32" r="3.5" fill="white"/><circle cx="43" cy="32" r="2" fill="#1a202c"/>
        <circle cx="57" cy="32" r="3.5" fill="white"/><circle cx="57" cy="32" r="2" fill="#1a202c"/>
        <path d="M45 38 L50 42 L55 38 L58 40 L50 46 L42 40Z" fill="#e53e3e" stroke="#c53030" strokeWidth="0.5"/>
        <path d="M50 42 L50 46" stroke="#ecc94b" strokeWidth="2"/>
        <path d="M42 80 L40 95" stroke="#e53e3e" strokeWidth="3"/><path d="M58 80 L60 95" stroke="#e53e3e" strokeWidth="3"/>
      </svg>
    ),
    "Wild Turkey": (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <defs><radialGradient id="wt-bg" cx="50%" cy="40%"><stop offset="0%" stopColor="#fefcbf"/><stop offset="100%" stopColor="#f6e05e"/></radialGradient></defs>
        <circle cx="50" cy="50" r="48" fill="url(#wt-bg)"/>
        <path d="M30 45 Q25 25 35 20 Q40 25 38 35 Q45 20 50 22 Q48 30 45 38 Q55 18 60 22 Q55 28 52 38 Q62 22 65 25 Q60 32 55 40 Q68 28 70 35 Q65 38 60 42" fill="#744210" stroke="#5a3410" strokeWidth="0.5"/>
        <ellipse cx="50" cy="60" rx="20" ry="22" fill="#744210"/>
        <ellipse cx="50" cy="62" rx="14" ry="16" fill="#975a16"/>
        <circle cx="50" cy="38" r="10" fill="#e53e3e"/>
        <path d="M48 32 L52 32 L53 28 L47 28Z" fill="#e53e3e"/>
        <circle cx="46" cy="36" r="2" fill="#1a202c"/><circle cx="54" cy="36" r="2" fill="#1a202c"/>
        <path d="M48 41 L50 44 L52 41" fill="#ecc94b" stroke="#d69e2e" strokeWidth="0.8"/>
        <path d="M40 78 L38 96" stroke="#975a16" strokeWidth="3"/><path d="M60 78 L62 96" stroke="#975a16" strokeWidth="3"/>
      </svg>
    ),
    "Eurasian Hoopoe": (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <defs><radialGradient id="eh-bg" cx="50%" cy="40%"><stop offset="0%" stopColor="#feebc8"/><stop offset="100%" stopColor="#fbd38d"/></radialGradient></defs>
        <circle cx="50" cy="50" r="48" fill="url(#eh-bg)"/>
        <line x1="42" y1="8" x2="44" y2="28" stroke="#dd6b20" strokeWidth="2.5"/><circle cx="42" cy="6" r="3" fill="#1a202c"/>
        <line x1="47" y1="5" x2="48" y2="26" stroke="#dd6b20" strokeWidth="2.5"/><circle cx="47" cy="3" r="3" fill="#1a202c"/>
        <line x1="52" y1="5" x2="52" y2="26" stroke="#dd6b20" strokeWidth="2.5"/><circle cx="52" cy="3" r="3" fill="#1a202c"/>
        <line x1="57" y1="8" x2="56" y2="28" stroke="#dd6b20" strokeWidth="2.5"/><circle cx="57" cy="6" r="3" fill="#1a202c"/>
        <circle cx="50" cy="38" r="14" fill="#dd6b20"/>
        <circle cx="44" cy="36" r="2.5" fill="white"/><circle cx="44" cy="36" r="1.3" fill="#1a202c"/>
        <circle cx="56" cy="36" r="2.5" fill="white"/><circle cx="56" cy="36" r="1.3" fill="#1a202c"/>
        <path d="M50 42 L62 44 L50 45Z" fill="#2d3748"/>
        <ellipse cx="50" cy="62" rx="16" ry="18" fill="#dd6b20"/>
        <path d="M34 55 L50 55 L66 55" stroke="#1a202c" strokeWidth="1.5" fill="none"/>
        <path d="M34 60 L66 60" stroke="#1a202c" strokeWidth="1.5"/>
        <path d="M34 65 L66 65" stroke="#1a202c" strokeWidth="1.5"/>
        <path d="M36 70 L64 70" stroke="#1a202c" strokeWidth="1.5"/>
        <path d="M42 80 L40 95" stroke="#4a5568" strokeWidth="2.5"/><path d="M58 80 L60 95" stroke="#4a5568" strokeWidth="2.5"/>
      </svg>
    ),
    "Barn Owl": (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <defs><radialGradient id="bo-bg" cx="50%" cy="40%"><stop offset="0%" stopColor="#f7fafc"/><stop offset="100%" stopColor="#e2e8f0"/></radialGradient></defs>
        <circle cx="50" cy="50" r="48" fill="url(#bo-bg)"/>
        <ellipse cx="50" cy="60" rx="18" ry="22" fill="#c4a35a"/>
        <ellipse cx="50" cy="62" rx="12" ry="16" fill="#fefcf0"/>
        <path d="M50 25 C32 25 25 40 25 50 C25 62 35 65 50 65 C65 65 75 62 75 50 C75 40 68 25 50 25Z" fill="#fefcf0" stroke="#e2e8f0" strokeWidth="0.5"/>
        <path d="M30 35 C30 28 50 22 50 35" fill="#faf5eb" stroke="#e2d5b0" strokeWidth="0.5"/>
        <path d="M70 35 C70 28 50 22 50 35" fill="#faf5eb" stroke="#e2d5b0" strokeWidth="0.5"/>
        <ellipse cx="40" cy="42" rx="8" ry="9" fill="#c4a35a" stroke="#a0845a" strokeWidth="0.5"/>
        <ellipse cx="60" cy="42" rx="8" ry="9" fill="#c4a35a" stroke="#a0845a" strokeWidth="0.5"/>
        <circle cx="40" cy="42" r="5" fill="#1a202c"/><circle cx="40" cy="41" r="1.5" fill="white"/>
        <circle cx="60" cy="42" r="5" fill="#1a202c"/><circle cx="60" cy="41" r="1.5" fill="white"/>
        <path d="M48 52 Q50 55 52 52" fill="#c4a35a" stroke="#a0845a" strokeWidth="0.8"/>
      </svg>
    ),
    "Turkestan Ground Jay": (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <defs><radialGradient id="tgj-bg" cx="50%" cy="40%"><stop offset="0%" stopColor="#fefce8"/><stop offset="100%" stopColor="#e8dcc8"/></radialGradient></defs>
        <circle cx="50" cy="50" r="48" fill="url(#tgj-bg)"/>
        <path d="M45 70 L30 95" stroke="#4a5568" strokeWidth="3"/><path d="M55 70 L70 95" stroke="#4a5568" strokeWidth="3"/>
        <ellipse cx="50" cy="58" rx="16" ry="18" fill="#c4b5a0"/>
        <path d="M34 52 Q25 45 20 52" fill="#90afc5" stroke="#7b9bb5" strokeWidth="0.5"/>
        <path d="M66 52 Q75 45 80 52" fill="#90afc5" stroke="#7b9bb5" strokeWidth="0.5"/>
        <circle cx="50" cy="38" r="12" fill="#c4b5a0"/>
        <path d="M50 55 L50 60" stroke="#1a202c" strokeWidth="4"/>
        <circle cx="45" cy="36" r="2.5" fill="white"/><circle cx="45" cy="36" r="1.3" fill="#1a202c"/>
        <circle cx="55" cy="36" r="2.5" fill="white"/><circle cx="55" cy="36" r="1.3" fill="#1a202c"/>
        <path d="M48 42 L55 43 L48 44Z" fill="#2d3748"/>
        <path d="M40 75 L50 88 L60 75" fill="#c4b5a0" stroke="#a09080" strokeWidth="0.5"/>
      </svg>
    ),
  };
  return birds[bird] || <svg viewBox="0 0 100 100" width={size} height={size}><circle cx="50" cy="50" r="48" fill="#e2e8f0"/></svg>;
};

// ─── Category icons ───
const CategoryIcon = ({ category, size = 16 }) => {
  const icons = {
    "Max Speed": <svg viewBox="0 0 24 24" width={size} height={size}><path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" fill="#f6ad55" stroke="#dd6b20" strokeWidth="1"/></svg>,
    "Weight": <svg viewBox="0 0 24 24" width={size} height={size}><circle cx="12" cy="14" r="8" fill="none" stroke="#68d391" strokeWidth="2"/><path d="M12 6v8M8 14h8" stroke="#68d391" strokeWidth="2"/></svg>,
    "Lifespan": <svg viewBox="0 0 24 24" width={size} height={size}><circle cx="12" cy="12" r="9" fill="none" stroke="#63b3ed" strokeWidth="2"/><path d="M12 7v5l3 3" stroke="#63b3ed" strokeWidth="2" strokeLinecap="round"/></svg>,
    "Eggs": <svg viewBox="0 0 24 24" width={size} height={size}><ellipse cx="12" cy="13" rx="7" ry="9" fill="none" stroke="#f687b3" strokeWidth="2"/></svg>,
    "Population": <svg viewBox="0 0 24 24" width={size} height={size}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" fill="none" stroke="#b794f4" strokeWidth="2" strokeLinecap="round"/></svg>,
  };
  return icons[category] || null;
};

// ─── Data ───
const BIRDS = [
  {
    name: "Peregrine Falcon", country: "United Kingdom", flag: "🇬🇧",
    stats: { speed: 389, weight: 0.8, lifespan: 15, eggs: 4, pop2000: 100000, pop2025: 340000 },
    scores2000: { speed: 10, weight: 4, lifespan: 7, eggs: 5, population: 3 },
    scores2025: { speed: 10, weight: 4, lifespan: 7, eggs: 5, population: 5 },
    activities: [
      { name: "Highest recorded stoop dive speed", category: "Max Speed", season: "Q4", points: 10, detail: "389 km/h" },
      { name: "Average weight (male/female)", category: "Weight", season: "Q2", points: 4, detail: "0.33–1.5 kg" },
      { name: "Maximum recorded lifespan", category: "Lifespan", season: "Q3", points: 7, detail: "~19 years" },
      { name: "Typical clutch size", category: "Eggs", season: "Q2", points: 5, detail: "3–4 eggs" },
      { name: "Population recovery post-DDT ban", category: "Population", season: "Q1", points: 5, detail: "100K → 340K" },
    ]
  },
  {
    name: "White Stork", country: "Belarus", flag: "🇧🇾",
    stats: { speed: 45, weight: 3.5, lifespan: 25, eggs: 4, pop2000: 500000, pop2025: 700000 },
    scores2000: { speed: 4, weight: 6, lifespan: 9, eggs: 6, population: 5 },
    scores2025: { speed: 4, weight: 6, lifespan: 9, eggs: 6, population: 7 },
    activities: [
      { name: "Soaring migration speed", category: "Max Speed", season: "Q1", points: 4, detail: "~45 km/h" },
      { name: "Average adult weight", category: "Weight", season: "Q3", points: 6, detail: "~3.5 kg" },
      { name: "Long-lived wading bird", category: "Lifespan", season: "Q3", points: 9, detail: "~25 years" },
      { name: "Seasonal clutch", category: "Eggs", season: "Q2", points: 6, detail: "3–5 eggs" },
      { name: "Population growth (wetland restoration)", category: "Population", season: "Q1", points: 7, detail: "500K → 700K" },
    ]
  },
  {
    name: "Golden Eagle", country: "Poland", flag: "🇵🇱",
    stats: { speed: 320, weight: 4.5, lifespan: 30, eggs: 2, pop2000: 130000, pop2025: 130000 },
    scores2000: { speed: 9, weight: 7, lifespan: 10, eggs: 2, population: 4 },
    scores2025: { speed: 9, weight: 7, lifespan: 10, eggs: 2, population: 4 },
    activities: [
      { name: "Hunting stoop speed", category: "Max Speed", season: "Q4", points: 9, detail: "~320 km/h" },
      { name: "Powerful build", category: "Weight", season: "Q3", points: 7, detail: "~4.5 kg" },
      { name: "Longest-lived eagle species", category: "Lifespan", season: "Q3", points: 10, detail: "~30 years" },
      { name: "Small clutch, high investment", category: "Eggs", season: "Q2", points: 2, detail: "1–3 eggs" },
      { name: "Stable global population", category: "Population", season: "Q1", points: 4, detail: "~130K (stable)" },
    ]
  },
  {
    name: "Bald Eagle", country: "United States", flag: "🇺🇸",
    stats: { speed: 160, weight: 5.0, lifespan: 20, eggs: 2, pop2000: 70000, pop2025: 316000 },
    scores2000: { speed: 8, weight: 8, lifespan: 8, eggs: 3, population: 2 },
    scores2025: { speed: 8, weight: 8, lifespan: 8, eggs: 3, population: 6 },
    activities: [
      { name: "Diving flight speed", category: "Max Speed", season: "Q4", points: 8, detail: "~160 km/h" },
      { name: "Heavy raptor build", category: "Weight", season: "Q3", points: 8, detail: "~5 kg" },
      { name: "Long lifespan for raptors", category: "Lifespan", season: "Q3", points: 8, detail: "~20 years" },
      { name: "Small clutch, careful parenting", category: "Eggs", season: "Q2", points: 3, detail: "1–3 eggs" },
      { name: "Greatest conservation comeback", category: "Population", season: "Q1", points: 6, detail: "70K → 316K (+351%)" },
    ]
  },
  {
    name: "Common Swift", country: "Belarus", flag: "🇧🇾",
    stats: { speed: 112, weight: 0.044, lifespan: 9, eggs: 2, pop2000: 150000000, pop2025: 130000000 },
    scores2000: { speed: 7, weight: 1, lifespan: 4, eggs: 1, population: 10 },
    scores2025: { speed: 7, weight: 1, lifespan: 4, eggs: 1, population: 10 },
    activities: [
      { name: "Fastest in level flight", category: "Max Speed", season: "Q1", points: 7, detail: "112 km/h" },
      { name: "Tiny aerial specialist", category: "Weight", season: "Q2", points: 1, detail: "44 grams" },
      { name: "10 months airborne", category: "Lifespan", season: "Q3", points: 4, detail: "~9 years" },
      { name: "Minimal clutch", category: "Eggs", season: "Q2", points: 1, detail: "2 eggs" },
      { name: "Massive but declining population", category: "Population", season: "Q4", points: 10, detail: "150M → 130M" },
    ]
  },
  {
    name: "Atlantic Puffin", country: "United Kingdom", flag: "🇬🇧",
    stats: { speed: 88, weight: 0.4, lifespan: 20, eggs: 1, pop2000: 12000000, pop2025: 4800000 },
    scores2000: { speed: 6, weight: 3, lifespan: 8, eggs: 1, population: 9 },
    scores2025: { speed: 6, weight: 3, lifespan: 8, eggs: 1, population: 8 },
    activities: [
      { name: "Rapid wing-beat flight", category: "Max Speed", season: "Q1", points: 6, detail: "~88 km/h" },
      { name: "Compact seabird build", category: "Weight", season: "Q2", points: 3, detail: "~400 grams" },
      { name: "Long-lived for its size", category: "Lifespan", season: "Q3", points: 8, detail: "~20 years" },
      { name: "Single egg specialist", category: "Eggs", season: "Q2", points: 1, detail: "1 egg" },
      { name: "Steep population decline", category: "Population", season: "Q4", points: 8, detail: "12M → 4.8M (−60%)" },
    ]
  },
  {
    name: "Wild Turkey", country: "United States", flag: "🇺🇸",
    stats: { speed: 89, weight: 5.5, lifespan: 4, eggs: 12, pop2000: 5600000, pop2025: 6200000 },
    scores2000: { speed: 5, weight: 9, lifespan: 1, eggs: 10, population: 7 },
    scores2025: { speed: 5, weight: 9, lifespan: 1, eggs: 10, population: 9 },
    activities: [
      { name: "Short-burst flight speed", category: "Max Speed", season: "Q4", points: 5, detail: "~89 km/h" },
      { name: "Heaviest bird on the list", category: "Weight", season: "Q3", points: 9, detail: "~5.5 kg" },
      { name: "Short wild lifespan", category: "Lifespan", season: "Q3", points: 1, detail: "3–5 years" },
      { name: "Prolific breeder", category: "Eggs", season: "Q2", points: 10, detail: "10–14 eggs" },
      { name: "Conservation success story", category: "Population", season: "Q1", points: 9, detail: "5.6M → 6.2M" },
    ]
  },
  {
    name: "Eurasian Hoopoe", country: "Uzbekistan", flag: "🇺🇿",
    stats: { speed: 44, weight: 0.068, lifespan: 10, eggs: 8, pop2000: 10000000, pop2025: 7500000 },
    scores2000: { speed: 3, weight: 2, lifespan: 5, eggs: 9, population: 8 },
    scores2025: { speed: 3, weight: 2, lifespan: 5, eggs: 9, population: 8 },
    activities: [
      { name: "Butterfly-like undulating flight", category: "Max Speed", season: "Q1", points: 3, detail: "~44 km/h" },
      { name: "Lightweight with long bill", category: "Weight", season: "Q2", points: 2, detail: "~68 grams" },
      { name: "Moderate lifespan", category: "Lifespan", season: "Q3", points: 5, detail: "~10 years" },
      { name: "Large clutch breeder", category: "Eggs", season: "Q2", points: 9, detail: "7–8 eggs" },
      { name: "Declining due to habitat loss", category: "Population", season: "Q4", points: 8, detail: "10M → 7.5M" },
    ]
  },
  {
    name: "Barn Owl", country: "Poland", flag: "🇵🇱",
    stats: { speed: 32, weight: 0.5, lifespan: 4, eggs: 6, pop2000: 4000000, pop2025: 3600000 },
    scores2000: { speed: 2, weight: 3, lifespan: 1, eggs: 8, population: 6 },
    scores2025: { speed: 2, weight: 3, lifespan: 1, eggs: 8, population: 6 },
    activities: [
      { name: "Silent low-flight hunter", category: "Max Speed", season: "Q4", points: 2, detail: "~32 km/h" },
      { name: "Light-boned nocturnal hunter", category: "Weight", season: "Q2", points: 3, detail: "~500 grams" },
      { name: "High first-year mortality", category: "Lifespan", season: "Q3", points: 1, detail: "2–4 years avg" },
      { name: "Prolific when food is abundant", category: "Eggs", season: "Q2", points: 8, detail: "4–7 eggs" },
      { name: "Slight population decline", category: "Population", season: "Q4", points: 6, detail: "4M → 3.6M" },
    ]
  },
  {
    name: "Turkestan Ground Jay", country: "Uzbekistan", flag: "🇺🇿",
    stats: { speed: 24, weight: 0.09, lifespan: 8, eggs: 5, pop2000: 50000, pop2025: 30000 },
    scores2000: { speed: 1, weight: 2, lifespan: 3, eggs: 7, population: 1 },
    scores2025: { speed: 1, weight: 2, lifespan: 3, eggs: 7, population: 1 },
    activities: [
      { name: "Primarily runs, rarely flies", category: "Max Speed", season: "Q1", points: 1, detail: "~24 km/h (running)" },
      { name: "Desert-adapted small corvid", category: "Weight", season: "Q2", points: 2, detail: "~90 grams" },
      { name: "Moderate desert survivor", category: "Lifespan", season: "Q3", points: 3, detail: "~8 years" },
      { name: "Desert nester", category: "Eggs", season: "Q2", points: 7, detail: "3–5 eggs" },
      { name: "Near Threatened, declining", category: "Population", season: "Q4", points: 1, detail: "50K → 30K (−40%)" },
    ]
  },
];

const CATEGORIES = ["Max Speed", "Weight", "Lifespan", "Eggs", "Population"];
const SEASONS = [
  { value: "all", label: "All Seasons" },
  { value: "Q1", label: "Q1 · Migration" },
  { value: "Q2", label: "Q2 · Nesting" },
  { value: "Q3", label: "Q3 · Breeding" },
  { value: "Q4", label: "Q4 · Fall Migration" },
];
const COUNTRIES = ["All Countries", "Belarus", "Poland", "Uzbekistan", "United Kingdom", "United States"];

const formatPop = (n) => {
  if (n >= 1e9) return (n / 1e9).toFixed(1) + "B";
  if (n >= 1e6) return (n / 1e6).toFixed(0) + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(0) + "K";
  return n.toString();
};

const getTotal = (bird, year) => {
  const s = year === "2000" ? bird.scores2000 : bird.scores2025;
  return s.speed + s.weight + s.lifespan + s.eggs + s.population;
};

const getCatCounts = (bird) => {
  const counts = {};
  CATEGORIES.forEach(c => { counts[c] = 0; });
  bird.activities.forEach(a => { counts[a.category] = (counts[a.category] || 0) + 1; });
  return counts;
};

// ─── App ───
export default function BirdLeaderboard() {
  const [year, setYear] = useState("2025");
  const [season, setSeason] = useState("all");
  const [category, setCategory] = useState("All Categories");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);

  const ranked = useMemo(() => {
    // Step 1: Score and rank ALL birds globally
    let all = BIRDS.map(b => {
      let total = getTotal(b, year);
      if (category !== "All Categories") {
        const s = year === "2000" ? b.scores2000 : b.scores2025;
        const key = category === "Max Speed" ? "speed" : category === "Weight" ? "weight" : category === "Lifespan" ? "lifespan" : category === "Eggs" ? "eggs" : "population";
        total = s[key];
      }
      return { ...b, total };
    });
    all.sort((a, b) => b.total - a.total);
    all = all.map((b, i) => ({ ...b, rank: i + 1 }));

    // Step 2: Filter for display, but keep global ranks
    if (search.trim()) {
      const q = search.toLowerCase();
      all = all.filter(b => b.name.toLowerCase().includes(q) || b.country.toLowerCase().includes(q));
    }
    return all;
  }, [year, season, category, search]);

  const top3 = ranked.slice(0, 3);
  const podiumOrder = top3.length >= 3 ? [top3[1], top3[0], top3[2]] : top3;

  const popChangeLabel = (b) => {
    const pct = ((b.stats.pop2025 - b.stats.pop2000) / b.stats.pop2000 * 100).toFixed(0);
    return pct > 0 ? `+${pct}%` : `${pct}%`;
  };

  const catColors = {
    "Max Speed": { bg: "#fff8f0", text: "#c05621", border: "#fbd38d" },
    "Weight": { bg: "#f0fff4", text: "#276749", border: "#9ae6b4" },
    "Lifespan": { bg: "#ebf8ff", text: "#2b6cb0", border: "#90cdf4" },
    "Eggs": { bg: "#fff5f7", text: "#97266d", border: "#fbb6ce" },
    "Population": { bg: "#faf5ff", text: "#6b46c1", border: "#d6bcfa" },
  };

  return (
    <div style={{
      fontFamily: "'Crimson Pro', 'Georgia', serif",
      background: "linear-gradient(180deg, #f7f5f0 0%, #ede8df 50%, #e8e2d6 100%)",
      minHeight: "100vh",
      color: "#2d3748",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .card-hover:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,0,0,0.12) !important; }
        .select-style {
          appearance: none;
          border: 1.5px solid #d4cdc0;
          border-radius: 8px;
          padding: 8px 32px 8px 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #4a5568;
          background: white url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 5l3 3 3-3' fill='none' stroke='%234a5568' stroke-width='1.5'/%3E%3C/svg%3E") no-repeat right 10px center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .select-style:hover { border-color: #a0845a; }
        .select-style:focus { outline: none; border-color: #a0845a; box-shadow: 0 0 0 3px rgba(160,132,90,0.15); }
        .search-input {
          border: 1.5px solid #d4cdc0;
          border-radius: 8px;
          padding: 8px 12px 8px 36px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #4a5568;
          background: white;
          width: 100%;
          transition: all 0.2s;
        }
        .search-input:hover { border-color: #a0845a; }
        .search-input:focus { outline: none; border-color: #a0845a; box-shadow: 0 0 0 3px rgba(160,132,90,0.15); }
        .expand-btn {
          width: 32px; height: 32px;
          border-radius: 50%;
          border: 1.5px solid #d4cdc0;
          background: white;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .expand-btn:hover { border-color: #a0845a; background: #faf8f4; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .activity-row { animation: fadeIn 0.3s ease-out; }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .podium-bird { animation: slideUp 0.5s ease-out both; }
        @media (max-width: 640px) {
          .select-style { font-size: 12px; padding: 7px 28px 7px 10px; flex: 1 1 calc(50% - 5px); min-width: 0; }
          .search-input { font-size: 12px; padding: 7px 10px 7px 32px; }
          .filter-bar { flex-wrap: wrap !important; }
          .podium-wrap { gap: 6px !important; padding: 12px 0 0 !important; }
          .podium-bird svg { max-width: 52px; max-height: 52px; }
          .bird-name-podium { font-size: 11px !important; }
          .bird-country-podium { font-size: 10px !important; }
          .bird-score-podium { font-size: 15px !important; }
          .pillar-number { font-size: 32px !important; }
          .list-row { padding: 10px 12px !important; gap: 8px !important; }
          .bird-name-list { font-size: 13px !important; }
          .cat-icons-row { display: none !important; }
          .activity-grid { grid-template-columns: 1fr !important; gap: 4px !important; }
          .activity-cat, .activity-season { display: inline-block; margin-right: 8px; }
          .activity-points { text-align: left !important; }
          .page-header { font-size: 28px !important; }
          .page-container { padding-left: 16px !important; padding-right: 16px !important; }
        }
        @media (max-width: 400px) {
          .podium-wrap { gap: 4px !important; }
          .podium-bird svg { max-width: 44px; max-height: 44px; }
          .bird-name-podium { font-size: 10px !important; }
          .pillar-number { font-size: 24px !important; }
        }
      `}</style>

      {/* Header */}
      <div className="page-container" style={{ padding: "32px 24px 0", maxWidth: 900, margin: "0 auto" }}>
        <h1 className="page-header" style={{
          fontFamily: "'Crimson Pro', serif",
          fontSize: 36, fontWeight: 700, letterSpacing: "-0.5px",
          color: "#2d3748", marginBottom: 4,
        }}>
          🐦 Leaderboard
        </h1>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14, color: "#718096", fontWeight: 400,
        }}>
          Top performers based on ornithological data and real-world characteristics
        </p>
      </div>

      {/* Filters */}
      <div style={{
        padding: "16px 24px",
        maxWidth: 900, margin: "0 auto",
      }}>
        <div className="filter-bar" style={{
          background: "white",
          borderRadius: 12,
          padding: "14px 16px",
          display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          border: "1px solid #e8e2d6",
        }}>
          <select className="select-style" value={year} onChange={e => setYear(e.target.value)}>
            <option value="2000">Year 2000</option>
            <option value="2025">Year 2025</option>
          </select>
          <select className="select-style" value={season} onChange={e => setSeason(e.target.value)}>
            {SEASONS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
          <select className="select-style" value={category} onChange={e => setCategory(e.target.value)}>
            <option>All Categories</option>
            {CATEGORIES.map(c => <option key={c}>{c}</option>)}
          </select>
          <div style={{ flex: 1, minWidth: 180, position: "relative" }}>
            <svg viewBox="0 0 24 24" width={16} height={16} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", opacity: 0.4 }}>
              <circle cx="11" cy="11" r="7" fill="none" stroke="#4a5568" strokeWidth="2"/>
              <path d="M16 16l4 4" stroke="#4a5568" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              className="search-input"
              placeholder="Search bird or country..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Podium */}
      {ranked.length >= 3 && (
        <div style={{
          maxWidth: 900, margin: "0 auto", padding: "8px 24px 0",
        }}>
          <div className="podium-wrap" style={{
            display: "flex", justifyContent: "center", alignItems: "flex-end",
            gap: 12, padding: "20px 0 0",
          }}>
            {/* Display order: [2nd, 1st, 3rd] = Silver left, Gold center, Bronze right */}
            {podiumOrder.map((bird, idx) => {
              // idx 0 = left (2nd place), idx 1 = center (1st place), idx 2 = right (3rd place)
              const actualRank = idx === 0 ? 2 : idx === 1 ? 1 : 3;
              const isGold = actualRank === 1;
              const isSilver = actualRank === 2;
              const isBronze = actualRank === 3;
              const pillarHeight = isGold ? 180 : isSilver ? 140 : 120;
              const badgeColor = isGold ? "#ecc94b" : isSilver ? "#a0aec0" : "#c4956a";
              const pillarBg = isGold
                ? "linear-gradient(180deg, #fefcbf 0%, #f6e05e 100%)"
                : isSilver
                  ? "linear-gradient(180deg, #edf2f7 0%, #cbd5e0 100%)"
                  : "linear-gradient(180deg, #feebc8 0%, #f6ad55 30%, #dd6b20 100%)";
              const numColor = isGold ? "#975a16" : isSilver ? "#4a5568" : "#7b341e";
              return (
                <div key={bird.name} className="podium-bird" style={{
                  display: "flex", flexDirection: "column", alignItems: "center",
                  animationDelay: `${idx * 0.15}s`,
                  flex: isGold ? 1.2 : 1,
                }}>
                  <div style={{ position: "relative", marginBottom: 4 }}>
                    <div style={{
                      borderRadius: "50%",
                      border: `3px solid ${badgeColor}`,
                      padding: 3,
                      background: "white",
                      boxShadow: isGold ? "0 0 20px rgba(236,201,75,0.4)" : "0 2px 8px rgba(0,0,0,0.1)",
                    }}>
                      <BirdSVG bird={bird.name} size={isGold ? 72 : 60} />
                    </div>
                    <div style={{
                      position: "absolute", bottom: -4, right: -4,
                      width: 24, height: 24, borderRadius: "50%",
                      background: badgeColor,
                      color: "white", fontWeight: 700, fontSize: 12,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "'DM Sans', sans-serif",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                    }}>{actualRank}</div>
                  </div>
                  <div className="bird-name-podium" style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13, fontWeight: 600, color: "#2d3748",
                    textAlign: "center", marginBottom: 2, lineHeight: 1.2,
                  }}>{bird.name}</div>
                  <div className="bird-country-podium" style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11, color: "#718096", marginBottom: 6,
                  }}>{bird.flag} {bird.country}</div>
                  <div style={{
                    display: "flex", alignItems: "center", gap: 4,
                    marginBottom: 8,
                  }}>
                    <span style={{ color: "#ecc94b", fontSize: 16 }}>★</span>
                    <span className="bird-score-podium" style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 700, fontSize: 18, color: "#2b6cb0",
                    }}>{bird.total}</span>
                  </div>
                  <div style={{
                    width: "100%",
                    height: pillarHeight,
                    background: pillarBg,
                    borderRadius: "12px 12px 0 0",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "inset 0 2px 4px rgba(255,255,255,0.3)",
                  }}>
                    <span className="pillar-number" style={{
                      fontFamily: "'Crimson Pro', serif",
                      opacity: 0.25, color: numColor,
                    }}>{actualRank}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Year comparison banner */}
      <div style={{
        maxWidth: 900, margin: "16px auto 0", padding: "0 24px",
      }}>
        <div style={{
          background: year === "2000" ? "linear-gradient(90deg, #faf5ff 0%, #e9d8fd 100%)" : "linear-gradient(90deg, #ebf8ff 0%, #bee3f8 100%)",
          borderRadius: 10, padding: "10px 16px",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13, color: year === "2000" ? "#553c9a" : "#2b6cb0",
          fontWeight: 500,
          display: "flex", alignItems: "center", gap: 8,
          border: `1px solid ${year === "2000" ? "#d6bcfa" : "#90cdf4"}`,
        }}>
          <span style={{ fontSize: 16 }}>{year === "2000" ? "📜" : "🌍"}</span>
          Viewing data for <strong>{year}</strong> — {year === "2000" ? "populations at the turn of the millennium" : "current population estimates and conservation status"}
        </div>
      </div>

      {/* Full List */}
      <div style={{ maxWidth: 900, margin: "16px auto", padding: "0 24px 40px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {ranked.map(bird => {
            const isExpanded = expanded === bird.name;
            const catCounts = getCatCounts(bird);
            const filteredActs = season === "all" ? bird.activities : bird.activities.filter(a => a.season === season);
            return (
              <div key={bird.name} className="card-hover" style={{
                background: "white",
                borderRadius: 12,
                border: isExpanded ? "1.5px solid #a0845a" : "1px solid #e8e2d6",
                boxShadow: isExpanded ? "0 4px 16px rgba(0,0,0,0.1)" : "0 1px 3px rgba(0,0,0,0.04)",
                transition: "all 0.25s ease",
                overflow: "hidden",
              }}>
                {/* Main row */}
                <div className="list-row" style={{
                  display: "flex", alignItems: "center", padding: "12px 16px", gap: 12,
                  cursor: "pointer",
                }} onClick={() => setExpanded(isExpanded ? null : bird.name)}>
                  {/* Rank */}
                  <div style={{
                    fontFamily: "'Crimson Pro', serif",
                    fontSize: 20, fontWeight: 700, color: "#a0aec0",
                    width: 28, textAlign: "center", flexShrink: 0,
                  }}>{bird.rank}</div>

                  {/* Avatar */}
                  <div style={{ flexShrink: 0 }}>
                    <BirdSVG bird={bird.name} size={48} />
                  </div>

                  {/* Name + Country */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="bird-name-list" style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 15, fontWeight: 600, color: "#2d3748",
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                    }}>{bird.name}</div>
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12, color: "#a0aec0", fontWeight: 400,
                    }}>{bird.flag} {bird.country}</div>
                  </div>

                  {/* Category icons with counts */}
                  <div className="cat-icons-row" style={{
                    display: "flex", gap: 8, alignItems: "center", flexShrink: 0,
                  }}>
                    {CATEGORIES.filter(c => catCounts[c] > 0).slice(0, 3).map(c => (
                      <div key={c} style={{
                        display: "flex", flexDirection: "column", alignItems: "center", gap: 1,
                      }}>
                        <CategoryIcon category={c} size={16} />
                        <span style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 9, color: "#a0aec0",
                        }}>{catCounts[c]}</span>
                      </div>
                    ))}
                  </div>

                  {/* Total score */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: 4, flexShrink: 0,
                  }}>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 10, color: "#a0aec0", fontWeight: 500, textTransform: "uppercase",
                    }}>Total</span>
                    <div style={{
                      display: "flex", alignItems: "center", gap: 3,
                    }}>
                      <span style={{ color: "#4299e1", fontSize: 16 }}>★</span>
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 700, fontSize: 18, color: "#2b6cb0",
                      }}>{bird.total}</span>
                    </div>
                  </div>

                  {/* Expand button */}
                  <button className="expand-btn" onClick={e => { e.stopPropagation(); setExpanded(isExpanded ? null : bird.name); }}>
                    <svg viewBox="0 0 24 24" width={14} height={14} style={{
                      transform: isExpanded ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 0.25s ease",
                    }}>
                      <path d="M6 9l6 6 6-6" fill="none" stroke="#4a5568" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>

                {/* Expanded Activities */}
                {isExpanded && (
                  <div className="activity-row" style={{
                    borderTop: "1px solid #edf2f7",
                    padding: "12px 16px 16px",
                    background: "#faf9f7",
                  }}>
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11, fontWeight: 600, color: "#a0aec0",
                      textTransform: "uppercase", letterSpacing: "0.5px",
                      marginBottom: 10,
                    }}>Recent Activity</div>

                    {/* Table header */}
                    <div className="activity-grid" style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 110px 70px 60px",
                      gap: 8, padding: "0 0 6px",
                      borderBottom: "1px solid #e2e8f0",
                      marginBottom: 6,
                    }}>
                      {["Activity", "Category", "Season", "Points"].map(h => (
                        <span key={h} style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 10, fontWeight: 600, color: "#a0aec0",
                          textTransform: "uppercase", letterSpacing: "0.5px",
                          textAlign: h === "Points" ? "right" : "left",
                        }}>{h}</span>
                      ))}
                    </div>

                    {/* Rows */}
                    {filteredActs.map((act, i) => (
                      <div key={i} className="activity-row activity-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 110px 70px 60px",
                        gap: 8, padding: "8px 0",
                        borderBottom: i < filteredActs.length - 1 ? "1px solid #f7f5f0" : "none",
                        alignItems: "center",
                        animationDelay: `${i * 0.05}s`,
                      }}>
                        <div>
                          <div style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 13, fontWeight: 500, color: "#2d3748",
                          }}>{act.name}</div>
                          <div style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 11, color: "#a0aec0",
                          }}>{act.detail}</div>
                        </div>
                        <div>
                          <span style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 11, fontWeight: 500,
                            padding: "3px 8px", borderRadius: 6,
                            background: catColors[act.category]?.bg,
                            color: catColors[act.category]?.text,
                            border: `1px solid ${catColors[act.category]?.border}`,
                          }}>{act.category}</span>
                        </div>
                        <div style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 12, color: "#718096",
                        }}>{SEASONS.find(s => s.value === act.season)?.label.split(" · ")[1] || act.season}</div>
                        <div style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 14, fontWeight: 700,
                          color: act.points >= 8 ? "#38a169" : act.points >= 5 ? "#d69e2e" : "#e53e3e",
                          textAlign: "right",
                        }}>+{act.points}</div>
                      </div>
                    ))}

                    {/* Pop change footnote */}
                    <div style={{
                      marginTop: 10, padding: "8px 12px",
                      background: "white", borderRadius: 8,
                      border: "1px solid #e8e2d6",
                      display: "flex", alignItems: "center", gap: 8,
                    }}>
                      <span style={{ fontSize: 14 }}>📊</span>
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 12, color: "#718096",
                      }}>
                        Population change (2000→2025): <strong style={{
                          color: bird.stats.pop2025 > bird.stats.pop2000 ? "#38a169" : "#e53e3e"
                        }}>{popChangeLabel(bird)}</strong> ({formatPop(bird.stats.pop2000)} → {formatPop(bird.stats.pop2025)})
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
