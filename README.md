# AUREX — Premium Automotive Showcase

An exclusive digital destination celebrating automotive design, engineering, performance, and craftsmanship.

Designed and developed with dark editorial aesthetics, architectural compositions, high-mass cinematic vehicle physics, and a custom Web Audio API acoustics engine.

---

## Brand Identity & Creative Direction

- **Brand**: AUREX
- **Positioning**: Curated independent digital archive and exhibition celebrating peerless automotive design, motorsport engineering rigor, and aesthetic mastery.
- **Palette**:
  - Near-Black Canvas: `#090A0B`
  - Secondary Surfaces: `#111214` & `#171819`
  - Elevated Cards & Borders: `#1E2023` & `rgba(242, 240, 236, 0.08)`
  - Primary Typography: Warm White `#F2F0EC`
  - Secondary Muted Text: Neutral Gray `#8E9094`
  - Accent Color: Deep Automotive Red `#A5262D` / `#C72F37`
- **Typography**:
  - Display: *Syne* (Oversized editorial headlines and wordmark)
  - Interface: *Plus Jakarta Sans* (Legible, contemporary body copy)
  - Telemetry: *Space Mono* (Technical specifications and data labels)

---

## Sections Implemented

1. **Section 1 — Cinematic Hero**:
   - Signature Entrance Animation: The flagship hypercar enters from the side, decelerates with natural inertia, and comes to a controlled photographic stop.
   - Canvas-driven atmospheric smoke and volumetric rim light sweeps.
   - Immediate interactivity: "EXPLORE THE COLLECTION" (primary CTA), "DISCOVER AUREX" (secondary CTA), "REPLAY ENTRANCE", and "THROTTLE REV".
2. **Section 2 — Brand Manifesto**:
   - *"ENGINEERED TO MOVE YOU. A different perspective on automotive excellence."*
   - Asymmetric architectural editorial layout with core tenets: Purity, Aerodynamics, Rigor.
3. **Section 3 — The Collection**:
   - Curated gallery of 6 iconic machines (Bugatti Chiron Pur Sport, Porsche 911 GT3 RS, Ferrari 296 GTB, McLaren 750S Spider, Aston Martin Valkyrie AMR Pro, Mercedes-AMG GT Black Series).
   - Working category filter pills (ALL, HYPERCAR, SUPERCAR, TRACK FOCUSED, GRAND TOURER).
   - Interactive cards with quick metrics, hover transitions, and "VIEW DETAILS" interaction.
4. **Section 4 — Featured Machine**:
   - Dedicated spotlight on *AUREX PROTOTYPE 01* (*"THE ART OF PERFORMANCE. BUILT TO BE REMEMBERED."*).
   - Interactive 4-perspective angle switcher (Exterior Profile, Aerodynamics & Wing, Monoblock Brake, Analog Cockpit).
   - Architectural engineering breakdown cards.
5. **Section 5 — Craft & Engineering**:
   - 4 editorial disciplines: Powertrain Alchemy, Fluid Dynamics, Composite Mastery, Analog Precision.
   - Quantitative engineering metrics (9,800 RPM Redline, 1,100 KG Downforce, 52,000 Nm/deg Rigidity, 100% Tactile switchgear).
6. **Section 6 — Automotive Visual Journal**:
   - Curated medium-format photographic exhibition with click-to-inspect Lightbox.
   - Photographic metadata (Camera body, Lens, Focal length, Shutter/Aperture, Location).
7. **Section 7 — Brand Statement**:
   - High-contrast typography epilogue (*"NOT JUST A MACHINE. AN EXPERIENCE IN MOTION."*) with nocturnal atmospheric backdrop.
8. **Section 8 — Refined Footer**:
   - Oversized AUREX sculptural wordmark, section anchors, live Modena studio telemetry, summit scroll button, non-affiliation notice, and 2026 copyright.

---

## Functional Features & Modals

- **Vehicle Dossier Modal**: Comprehensive modal with verified powertrain specifications, multi-angle gallery selector, engineering highlights, and synthesized throttle rev acoustics. Keyboard accessible (ESC to close, backdrop click).
- **Photo Lightbox Modal**: High-resolution image viewer with camera EXIF data and keyboard navigation (Left/Right arrows, ESC to close).
- **Web Audio API Engine**: Zero-dependency acoustics synthesizer generating deep V12 rumble, acceleration harmonics, throttle revs, and arrival chimes with mute toggle.
- **Motion Control**: Respects `prefers-reduced-motion` by default, with a dedicated navbar toggle ("MOTION: FULL / STATIC") to preview both modes.
- **Responsive Mobile Navigation**: Slide-out backdrop-blur drawer with staggered links and touch-friendly controls.

---

## Technology Stack

- **Framework**: React 19 with Vite 8 & TypeScript
- **Styling**: Tailwind CSS with custom editorial configuration & bespoke CSS animations
- **Icons**: Lucide React
- **Sound**: Web Audio API (real-time procedural oscillator synthesis)
- **Local Assets**: All automotive photography stored locally in `public/images/` for instant zero-latency loading.

---

## How to Run Locally

```bash
# Navigate to project directory
cd aurex-showcase

# Install dependencies (if not already installed)
npm install

# Start Vite development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```
