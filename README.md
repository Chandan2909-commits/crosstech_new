# CrossTech Solutions — Official Corporate Website

This repository contains the official corporate website for **CrossTech Solutions**, built in strict accordance with the master source of truth ([`brain.md`](file:///s:/work/CrossTech-work/crosstech%20applications/crosstechsolutions%20website/brain.md)), the user's design constraints, and the provided editorial inspiration references ([`Homepage(hero section).png`](file:///s:/work/CrossTech-work/crosstech%20applications/crosstechsolutions%20website/inspiration/Homepage(hero%20section).png) and [`everypage except homepage hero section.png`](file:///s:/work/CrossTech-work/crosstech%20applications/crosstechsolutions%20website/inspiration/everypage%20except%20homepage%20hero%20section.png)).

---

## 🎨 Color Palette & Aesthetic Guidelines

The website follows the exact color specification requested:
- **Only Plush Pastel Accents:**
  - **Pastel Blue (`#C5E1F6` / `#7BB2DE`):** Highlights the **CrossTech Applications** business software branch.
  - **Pastel Pink & Blush (`#F8CAD8` / `#E18BA7`):** Highlights the **Conscious Living** wellness and lifestyle branch.
  - **Soft Pastel Lilac/Cloud (`#E4E0FB`):** Used as an occasional gentle bridge accent.
- **Monochrome Foundation:**
  - **Pure White Background (`#FFFFFF`):** Dominates the entire site for clean negative space.
  - **Deep Obsidian Black (`#0B0B0E`):** Used for typography and high-contrast feature cards.
- **Black Section Inversion Rule:**
  - When sections use a black background (such as the *"Built With Purpose"* philosophy section and the global footer), text is strictly rendered in **pure white** (`#FFFFFF`) with **pastel blue** and **pastel pink** accents, ensuring optimal contrast and visual hierarchy.

---

## 🏛️ Ecosystem Architecture

CrossTech Solutions functions as a parent holding brand operating two distinct product worlds:

```text
                         CROSS TECH SOLUTIONS (Parent Company)
                                      │
                 ┌────────────────────┴────────────────────┐
                 │                                         │
                 ▼                                         ▼
      CROSS TECH APPLICATIONS                       CONSCIOUS LIVING
        (Business & Software)                     (Wellness & Lifestyle)
                 │                                         │
    ┌────────────┼────────────┐               ┌────────────┼────────────┐
    │            │            │               │            │            │
EmployeeOS     CROS        UplyCRM        Mind Space   HoneyTrack     Mivo
BuildLedger  CollabOS      Synergy
```

---

## 🚀 Key Features

1. **Interactive Business Bifurcation Flowchart:**
   - Visualizes parent company hierarchy down to individual products.
   - Interactive branch filters (*All*, *CrossTech Applications*, *Conscious Living*) dynamically isolate and highlight paths.
   - Direct click-to-modal and external app links for all live products.
2. **Curated Product Portfolio Grid:**
   - 9 products featuring verified capabilities, status pills (*Live Production*, *In Development*), and verified direct launch links.
3. **Comprehensive Product Detail Modal:**
   - Deep-dive drawer displaying the *Operational Challenge*, *The CrossTech Solution*, *Core Architecture*, and direct production launch actions.
4. **Instant Global Search (`⌘K` / `Ctrl+K`):**
   - Real-time search across products, capabilities, and branch classifications.
5. **Right-Side Editorial Index Tracker:**
   - Seamlessly tracks page position (`01` through `06`) and dynamically flips between black and white when passing over dark sections.
6. **Legal & Compliance Trust Center:**
   - Full dialog modal covering Privacy Policy (aligned with **India's DPDP Act, 2023**), Terms of Service, Cookie Policy, Wellness Disclaimer, and WCAG 2.2 AA Accessibility.
7. **Contact & Partnership Engine:**
   - Built-in purpose selector, anti-spam honeypot verification, and instant confirmation feedback.

---

## 🛠️ Local Development & Preview

To preview the website locally:

```bash
# Option 1: Python Built-in Server
python -m http.server 8080

# Option 2: Node.js / npx
npx serve .
```

Open `http://localhost:8080/index.html` in your browser.

# crosstech_new
