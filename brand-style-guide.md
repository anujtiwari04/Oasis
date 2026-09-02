# Brand Style Guide & Design Tokens: Oasis Securities Limited

> **Purpose:** Design prompt and specification sheet for UI/UX generation, design systems, Figma styling, and AI design tools (e.g., Google Stitch / generative design prompts).

---

## 1. Brand Identity & Visual Philosophy

- **Brand Essence:** Institutional Trust, Legacy & Financial Stability, Regulatory Prestige, Transparency.
- **Industry / Sector:** Non-Banking Financial Company (NBFC - Base Layer), Securities & Corporate Investments.
- **Aesthetic Direction:** Dignified, clean, authoritative institutional finance. High contrast data density paired with elegant serif accents and calm off-white/linen surfaces. Avoids noisy neon/fintech gradients.

---

## 2. Brand Color Matrix & Design Tokens

### 2.1 Primary Brand Palette

| Token Name | Hex Code | RGB | OKLCH / CSS Variable | Role & Usage Context |
| :--- | :--- | :--- | :--- | :--- |
| **`brand-green`** | `#1B4332` | `rgb(27, 67, 50)` | `var(--brand-green)` | **Primary Brand Color**: Navigation topbars, primary call-to-action buttons, high-impact section backgrounds (e.g. About hero), footer. |
| **`brand-green-light`** | `#2D6A4F` | `rgb(45, 106, 79)` | `var(--brand-green-light)` | **Hover & Interactive State**: Button hover states, active navigation pills, highlighted interactive states. |
| **`brand-green-lighter`** | `#40916C` | `rgb(64, 145, 108)` | `var(--brand-green-lighter)` | **Accents & Badges**: Trend indicators, verified/audit badges, progress bar accents. |
| **`brand-gold`** | `#B68D40` | `rgb(182, 141, 64)` | `var(--brand-gold)` | **Heritage & Regulatory Accent**: RBI registration badges, gold accent divider rules, section eyebrows, rating stars. |
| **`brand-gold-light`** | `#D4A853` | `rgb(212, 168, 83)` | `var(--brand-gold-light)` | **Soft Accent & Micro-glow**: Sub-headings, active tab indicator glows, subtle gradient borders. |

### 2.2 Neutral & Surface Palette

| Token Name | Hex Code | RGB | OKLCH / CSS Variable | Role & Usage Context |
| :--- | :--- | :--- | :--- | :--- |
| **`brand-charcoal`** | `#1C1C1C` | `rgb(28, 28, 28)` | `var(--brand-charcoal)` | **Primary Headings & Text**: H1-H4 headings, high-contrast statutory numbers, key figures. |
| **`brand-text`** | `#2C2C2C` | `rgb(44, 44, 44)` | `var(--brand-text)` | **Body & Paragraph Text**: Default paragraph text, table contents, address text (opacity 60%-75%). |
| **`brand-surface`** | `#FAFAF8` | `rgb(250, 250, 248)` | `var(--brand-surface)` | **Primary Background**: Warm off-white canvas, hero background, clean document layout base. |
| **`brand-surface-alt`** | `#F5F3EF` | `rgb(245, 243, 239)` | `var(--brand-surface-alt)` | **Secondary Surface**: Card backgrounds, table sub-headers, alternating disclosure rows. |
| **`white`** | `#FFFFFF` | `rgb(255, 255, 255)` | `oklch(1 0 0)` | **Pure White Container**: Table cards, modal containers, dropdown menus. |
| **`slate-header`** | `#0F172A` | `rgb(15, 23, 42)` | `bg-slate-900` | **Statutory Table Header**: Regulatory disclosure table headers with white uppercase text. |

### 2.3 Semantic Component Palette (OKLCH-Ready)

```css
:root {
  --background: oklch(1 0 0); /* Pure White */
  --foreground: oklch(0.129 0.042 264.695); /* Deep Charcoal */
  --primary: #1B4332; /* Brand Deep Forest Green */
  --primary-foreground: #FFFFFF;
  --secondary: #F5F3EF; /* Brand Linen Alt */
  --secondary-foreground: #1C1C1C;
  --muted: #F5F3EF;
  --muted-foreground: #64748B;
  --accent: #B68D40; /* Heritage Gold */
  --accent-foreground: #FFFFFF;
  --border: oklch(0.929 0.013 255.508); /* Crisp Subtle Border */
  --radius: 0.375rem; /* 6px Crisp Institutional Radius */
}
```

---

## 3. Typography Hierarchy & Font Rules

### 3.1 Font Families

1. **Serif (Display & Prestige):** `DM Serif Display`, Georgia, serif
   - *Google Fonts URL:* `https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap`
   - *Usage:* Hero title accent words, premium corporate taglines, editorial pull-quotes.
2. **Sans-Serif (Functional & Body):** `Inter`, system-ui, -apple-system, sans-serif
   - *Google Fonts URL:* `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap`
   - *Usage:* All UI navigation, headings, regulatory tables, data numbers, buttons, captions.

---

### 3.2 Typography Scale & Specification

| Level / Role | Font Family | Size (px / rem) | Weight | Line Height | Tracking (Letter Spacing) | Color & Styling |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display H1** | `Inter` + `DM Serif Display` | `48px` – `72px` (`3rem` – `4.5rem`) | `700` (Bold) / `400` (Italic Serif) | `1.08` | `-0.025em` (Tight) | `brand-charcoal` with accented words in `brand-green` Serif Italic. |
| **Page Title H1** | `Inter` | `32px` – `40px` (`2rem` – `2.5rem`) | `800` (ExtraBold) | `1.15` | `-0.02em` | `brand-charcoal` (`#1C1C1C`) or `slate-950`. |
| **Section Heading H2** | `Inter` | `28px` – `36px` (`1.75rem` – `2.25rem`) | `700` (Bold) | `1.2` | `-0.02em` | `brand-charcoal` (or `white` on dark green sections). |
| **Card / Subsection H3** | `Inter` | `18px` – `22px` (`1.125rem` – `1.375rem`) | `700` (Bold) | `1.3` | `-0.01em` | `brand-charcoal` or `white`. |
| **Eyebrow / Category Tag** | `Inter` | `11px` – `12px` (`0.6875rem` – `0.75rem`) | `600` (SemiBold) | `1.0` | `+0.15em` (Wide Uppercase) | `brand-gold` (`#B68D40`) with accompanying gold rule. |
| **Body Large / Lead** | `Inter` | `18px` – `20px` (`1.125rem` – `1.25rem`) | `400` (Regular) | `1.6` | `Normal` | `brand-text` at 70% opacity. |
| **Body Regular** | `Inter` | `14px` – `16px` (`0.875rem` – `1rem`) | `400` (Regular) / `500` (Medium) | `1.6` | `Normal` | `brand-text` (`#2C2C2C`). |
| **Table Header** | `Inter` | `12px` – `13px` (`0.75rem` – `0.8125rem`) | `600` (SemiBold) | `1.2` | `+0.05em` (Uppercase) | `white` on `slate-900` table headers. |
| **Table Cell Data** | `Inter` | `13px` – `14px` (`0.8125rem` – `0.875rem`) | `400` / `600` (Bold for totals) | `1.4` | `Normal` | `brand-charcoal` / `slate-800`. |
| **Button / Navigation** | `Inter` | `14px` (`0.875rem`) | `600` (SemiBold) | `1.0` | `Normal` | High-contrast white on dark green, or crisp slate. |
| **Caption / Legal Meta** | `Inter` | `10px` – `12px` (`0.625rem` – `0.75rem`) | `500` (Medium) | `1.4` | `+0.1em` (Uppercase) | White at 40%-60% opacity or `brand-text` at 50%. |

---

## 4. UI Components & Layout Geometry

### 4.1 Corner Radii & Elevation
- **Card / Container Radius:** `4px` to `8px` (`rounded-[4px]` or `rounded-lg`). Keep edges crisp, structured, and institutional (avoid oversized pill-shaped corners on corporate sections).
- **Button Radius:** `4px` to `6px` (`rounded-[4px]`).
- **Pills / Status Badges:** `9999px` (`rounded-full`).
- **Shadows / Elevation:**
  - Soft card shadow: `0 1px 3px 0 rgba(0, 0, 0, 0.05)`
  - Elevated modal/dropdown: `0 10px 25px -5px rgba(27, 67, 50, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.04)`

### 4.2 Key UI Component Styles

#### A. Primary Button (Call to Action)
- **Background:** `#1B4332` (`brand-green`)
- **Hover Background:** `#2D6A4F` (`brand-green-light`)
- **Text Color:** `#FFFFFF`
- **Typography:** `Inter`, `14px`, SemiBold
- **Padding:** `12px 28px` (`px-7 py-3.5`)
- **Border Radius:** `4px`

#### B. Secondary / Outline Button
- **Background:** `Transparent`
- **Border:** `1px solid rgba(27, 67, 50, 0.3)`
- **Hover Background:** `rgba(27, 67, 50, 0.05)`
- **Text Color:** `#1B4332` (`brand-green`)
- **Padding:** `12px 28px`
- **Border Radius:** `4px`

#### C. Regulatory Accreditation Badge
- **Background:** `#FFFFFF` with `border-left: 2px solid #B68D40` (`brand-gold`)
- **Icon:** Shield Check in `#1B4332`
- **Typography:** `Inter`, `12px`, Medium, text color `#2C2C2C` (70% opacity)
- **Text:** `Registered NBFC · Reg No: 13.0069`

#### D. Statutory Disclosure Table
- **Header Style:** `background: #0F172A` (`slate-900`), `color: #FFFFFF`, `12px uppercase font-semibold`, padding `16px 20px`.
- **Row Style:** Alternating white and `#FAFAF8`, `border-bottom: 1px solid #E2E8F0`, hover background `#F1F5F9`.
- **Action Button:** `#0F172A` background, white text, `Download` icon, padding `8px 14px`, radius `6px`.

---

## 5. Google Stitch / AI Prompt Template

When feeding this into **Google Stitch** or any AI UI Generator, use the prompt below:

```text
Design modern corporate investor relations and corporate governance web pages for "Oasis Securities Limited", an RBI-registered listed Non-Banking Financial Company (NBFC established 1986).

Color Scheme:
- Primary Brand: Deep Forest Green (#1B4332)
- Interactive Accent: Green Light (#2D6A4F)
- Regulatory & Heritage Accent: Muted Gold (#B68D40)
- Canvas Background: Warm Linen Surface (#FAFAF8)
- Secondary Surface: Soft Warm Gray (#F5F3EF)
- High Contrast Text & Headings: Charcoal (#1C1C1C)
- Table Header: Dark Slate Navy (#0F172A)

Typography Hierarchy:
- Headlines & Tagline Highlights: "DM Serif Display", serif, italic accents for key brand words.
- General UI, Navigation, Headings & Numerical Tables: "Inter", sans-serif (Weights: 400 Regular, 600 SemiBold, 700 Bold, 800 ExtraBold).
- Eyebrow Subheadings: 12px uppercase Inter with letter-spacing 0.15em in Gold (#B68D40).

Visual Style & UI Guidelines:
- Clean, structured, institutional banking aesthetic with high credibility and trust.
- Subtle 4px to 6px corner radii on buttons and cards.
- Sticky glassmorphism header with top utility bar showing "Call Us: 9257056969" and "CIN: L51900MH1986PLC041499".
- Crisp financial disclosure data tables with dark slate headers, download action icons, and search inputs.
- Badges with gold border accents highlighting "Registered NBFC · Reg No: 13.0069".
```

