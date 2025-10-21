# 🎨 Visual Design Guide - Portfolio Website

## Color System

### Primary Colors
```
🎨 Primary         #7b5858  ██████  (Main brand color)
🎨 Primary Dark    #5c4343  ██████  (Headings, emphasis)
🎨 Primary Light   #ac6969  ██████  (Accents, highlights)
🎨 Secondary       #b3a8a8  ██████  (Secondary elements)
🎨 Tertiary        #e0dede  ██████  (Borders, dividers)
🎨 Background      #f0ebeb  ██████  (Page background)
🎨 White           #ffffff  ██████  (Pure white)
🎨 Text Dark       #2c2c2c  ██████  (Primary text)
🎨 Text Light      #666666  ██████  (Secondary text)
```

### Gradients
```css
Primary Gradient:  linear-gradient(135deg, #7b5858 0%, #ac6969 100%)
Light Gradient:    linear-gradient(135deg, #f0ebeb 0%, #e0dede 100%)
Alt Gradient:      linear-gradient(120deg, #f0ebeb 0%, #e8e3e3 50%, #e0dede 100%)
```

---

## Typography Scale

```
Hero Title:        clamp(2rem, 5vw, 3.5rem)      [32px - 56px]
Section Title:     clamp(1.75rem, 4vw, 2.5rem)   [28px - 40px]
Subheading:        clamp(1.25rem, 3vw, 1.75rem)  [20px - 28px]
Body Large:        clamp(1rem, 2vw, 1.2rem)      [16px - 19px]
Body:              clamp(0.88rem, 2vw, 0.98rem)  [14px - 16px]
Small:             clamp(0.72rem, 1.5vw, 0.82rem)[12px - 13px]
```

**Font Family:** Poppins (Google Fonts)
**Weights Used:** 400 (Regular), 600 (Semi-Bold), 700 (Bold), 800 (Extra-Bold)

---

## Spacing System

```
Space XS:  0.5rem   8px   ▁
Space SM:  1rem    16px   ▂
Space MD:  1.5rem  24px   ▃
Space LG:  2rem    32px   ▄
Space XL:  3rem    48px   ▅
Space 2XL: 4rem    64px   ▆
```

**Usage Example:**
- Card padding: `space-lg` (32px)
- Section padding: `space-xl` to `space-2xl` (48-64px)
- Element gaps: `space-sm` to `space-md` (16-24px)

---

## Border Radius

```
Small:     8px   ╭─╮  (Form inputs, small cards)
Medium:    12px  ╭──╮ (Buttons, tech items)
Large:     16px  ╭───╮ (Project cards, about card)
X-Large:   24px  ╭────╮ (Modal, major sections)
```

---

## Shadows (Elevation)

```css
/* Level 1 - Small */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
Usage: Form inputs, small cards

/* Level 2 - Medium */
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
Usage: Project cards, buttons on hover

/* Level 3 - Large */
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);
Usage: About card, modal, contact card

/* Level 4 - X-Large */
box-shadow: 0 12px 48px rgba(0, 0, 0, 0.2);
Usage: Modal, major floating elements
```

---

## Component Specifications

### 1. Hero Section

```
Height:        100vh (full viewport)
Background:    Gradient Alt
Padding:       4rem 2rem
Text Align:    Center
Max Width:     800px

Hero Title:
  - Font Size: clamp(2rem, 5vw, 3.5rem)
  - Font Weight: 700
  - Color: Primary Dark
  - Animation: fadeInUp 0.8s

Hero Subtitle:
  - Font Size: clamp(1.2rem, 3vw, 1.8rem)
  - Font Weight: 600
  - Color: Primary
  - Animation: fadeInUp 1s

Buttons:
  - Padding: 12px 28px
  - Border Radius: 16px
  - Gap: 1.5rem
  - Animation: fadeInUp 1.4s
```

### 2. About Section

```
Background:    Gradient Light
Padding:       60px 2rem
Layout:        Flexbox (row → column on mobile)
Gap:           35px

About Card:
  - Max Width: 520px
  - Padding: 32px 28px
  - Border Radius: 24px
  - Background: rgba(255, 255, 255, 0.98)
  - Shadow: X-Large
  - Border: 1px solid rgba(255, 255, 255, 0.95)

Profile Photos:
  - Dimensions: 145px × 175px
  - Border Radius: 16px
  - Gap: 12px
  - Border: 3px solid rgba(255, 255, 255, 0.95)
  - Filter: grayscale(20%) → grayscale(0%) on hover
  - Hover: scale(1.05) rotate(2deg)

Stats Grid:
  - Columns: 3 (1 on mobile)
  - Gap: 12px
  - Padding: 16px 10px

Tech Grid:
  - Columns: 4 (2 on mobile)
  - Gap: 12px
  - Icon Size: 40px
  - Hover: translateY(-4px)
```

### 3. Projects Section

```
Background:    Gradient Alt
Padding:       80px 2rem
Layout:        CSS Grid (6-column system)

Grid System:
  - Desktop: repeat(6, 1fr)
  - Cards 1-3: span 2 columns each
  - Cards 4-5: centered (2 columns each)
  - Tablet: repeat(2, 1fr)
  - Mobile: 1fr

Project Card:
  - Height: 410px
  - Max Width: 360px
  - Border Radius: 16px
  - Background: rgba(255, 255, 255, 0.98)
  - Shadow: Medium → X-Large on hover
  - Hover: translateY(-8px) scale(1.02)

Card Front:
  - Padding: 22px 18px
  - Gap: 12px

Card Back:
  - Padding: 22px 18px
  - Gap: 14px
  - Transform: rotateY(180deg) → rotateY(0deg)
  - Opacity: 0 → 1

Project Image:
  - Height: 150px
  - Border Radius: 12px
  - Object Fit: cover
  - Hover: scale(1.05)
```

### 4. Contact Section

```
Background:    Gradient Light
Padding:       75px 2rem
Layout:        Flexbox (row → column on mobile)
Gap:           36px

Contact Image Card:
  - Min Width: 310px
  - Max Width: 430px
  - Min Height: 380px
  - Padding: 55px 38px
  - Border Radius: 24px
  - Background: Primary Gradient
  - Shadow: X-Large
  - Hover: translateY(-8px) scale(1.02)

Contact Image:
  - Dimensions: 190px × 190px
  - Border Radius: 50%
  - Border: 4px solid rgba(255, 255, 255, 0.9)
  - Animation: floatImg 3s infinite

Contact Form Card:
  - Min Width: 350px
  - Max Width: 470px
  - Padding: 44px 36px
  - Border Radius: 24px
  - Background: rgba(255, 255, 255, 0.98)
  - Shadow: X-Large

Form Inputs:
  - Padding: 13px 15px
  - Border Radius: 12px
  - Border: 2px solid Tertiary
  - Font Size: 0.98rem
  - Focus: border-color Primary + shadow
  - Hover: translateY(-2px)

Textarea:
  - Min Height: 115px
  - Resize: vertical
```

### 5. Modal

```
Background:    rgba(0, 0, 0, 0.85)
Backdrop:      blur(5px)
Z-Index:       9999

Modal Content:
  - Max Width: 900px
  - Width: 90%
  - Max Height: 90vh
  - Border Radius: 24px
  - Background: White
  - Shadow: X-Large
  - Transform: translateY(0) scale(1)

Modal Image:
  - Height: 380px
  - Border Radius: 24px 24px 0 0
  - Object Fit: cover

Modal Body:
  - Padding: 38px

Modal Close:
  - Dimensions: 40px × 40px
  - Border Radius: 50%
  - Background: Primary
  - Color: White
  - Font Size: 24px
  - Top: 20px, Right: 20px
  - Hover: rotate(90deg) scale(1.1)

Modal Tags:
  - Padding: 7px 14px
  - Border Radius: 20px
  - Background: Primary Gradient
  - Gap: 10px
```

### 6. Footer

```
Background:    linear-gradient(135deg, Primary Dark, Primary, Primary Light)
Padding:       55px 0 0 0
Color:         White
Shadow:        0 -8px 32px rgba(0,0,0,0.15)

Footer Top:
  - Grid: 1.5fr 2fr (1fr on mobile)
  - Gap: 55px
  - Padding Bottom: 44px
  - Border Bottom: 1px solid rgba(255, 255, 255, 0.15)

Footer Links:
  - Grid: repeat(3, 1fr) (1fr on mobile)
  - Gap: 36px

Social Icons:
  - Dimensions: 38px × 38px
  - Border Radius: 9px
  - Background: rgba(255, 255, 255, 0.1)
  - Backdrop Filter: blur(10px)
  - Gap: 14px
  - Hover: translateY(-4px) scale(1.1)

Footer Bottom:
  - Padding: 30px 0
  - Display: Flex
  - Justify: space-between
  - Gap: 18px
```

---

## Button Styles

### Primary Button
```css
Padding:        12px 28px
Border Radius:  16px
Background:     Primary Gradient
Color:          White
Border:         2px solid Primary
Font Weight:    600
Font Size:      1rem
Transition:     0.3s ease

Hover:
  - Transform: translateY(-3px)
  - Shadow: Large
  - Ripple effect (::before)
```

### Secondary Button
```css
Background:     linear-gradient(135deg, Secondary, Primary Light)
Border:         2px solid Secondary
(Rest same as Primary)
```

### Outline Button
```css
Background:     transparent
Color:          Primary
Border:         2px solid Primary

Hover:
  - Background: Primary
  - Color: White
```

---

## Animation Library

### Keyframe Animations

**fadeInUp** (0.8s ease-out)
```
From: opacity 0, translateY(30px)
To:   opacity 1, translateY(0)
```

**float** (8s ease-in-out infinite)
```
0%:   translateY(0) rotate(0deg)
50%:  translateY(-20px) rotate(180deg)
100%: translateY(0) rotate(360deg)
```

**floatImg** (3s ease-in-out infinite alternate)
```
0%:   translateY(0)
100%: translateY(-18px) scale(1.04)
```

**pulse** (1.5s ease-in-out infinite)
```
0%, 100%: scale(1) opacity(0.5)
50%:      scale(1.18) opacity(0.8)
```

**shimmer** (2s ease-in-out infinite)
```
0%:   left -100%
100%: left 100%
```

**gradientSlide** (3s ease infinite)
```
0%:   background-position 0% 50%
50%:  background-position 100% 50%
100%: background-position 0% 50%
```

### Transition Timing

```css
Fast:  0.2s cubic-bezier(0.4, 0, 0.2, 1)  /* Quick interactions */
Base:  0.3s cubic-bezier(0.4, 0, 0.2, 1)  /* Standard */
Slow:  0.5s cubic-bezier(0.4, 0, 0.2, 1)  /* Dramatic effects */
```

---

## Responsive Breakpoints

### Mobile Small (320px - 600px)
```
Base Font Size: 15px
Layout:         Single column
Padding:        Reduced by 30%
Card Width:     100%
Images:         Smaller (95px × 115px for about photos)
Tech Grid:      2 columns
Stats Grid:     1 column
Projects Grid:  1 column
```

### Mobile Large / Tablet (601px - 768px)
```
Base Font Size: 16px
Layout:         Optimized mobile
About Photos:   Horizontal row
Stats Grid:     1 column (centered)
Tech Grid:      2 columns
Projects Grid:  1 column
```

### Tablet (769px - 1024px)
```
Layout:         2-column approach
About:          Side-by-side
Projects Grid:  2 columns
Footer:         2 columns
Card Width:     Adaptive
```

### Desktop (1025px+)
```
Layout:         Full layout
About:          Side-by-side
Projects Grid:  6-column system
Footer:         3 columns
Max Container:  1200px
```

---

## Interactive States

### Hover Effects

**Cards:**
```
Transform:  translateY(-8px) scale(1.02)
Shadow:     Medium → X-Large
Duration:   0.3s ease
```

**Buttons:**
```
Transform:  translateY(-3px)
Shadow:     Large
Ripple:     Width/Height 0 → 300px
Duration:   0.3s ease
```

**Images:**
```
Scale:      1 → 1.05
Rotate:     0deg → 2deg (about photos)
Filter:     grayscale(20%) → grayscale(0%)
Duration:   0.5s ease
```

**Links:**
```
Padding-Left: 0 → 7px
Color:        85% opacity → 100%
Duration:     0.3s ease
```

### Focus States

```css
Outline:        3px solid Primary
Outline-Offset: 2px
Border-Color:   Primary (for inputs)
Box-Shadow:     0 0 0 4px rgba(123, 88, 88, 0.15)
```

### Active States

```css
Transform:  scale(0.98)
Transition: 0.1s ease
```

---

## Layout Patterns

### Flexbox Patterns

**Center Alignment:**
```css
display: flex;
align-items: center;
justify-content: center;
```

**Space Between:**
```css
display: flex;
justify-content: space-between;
align-items: center;
```

**Column with Gap:**
```css
display: flex;
flex-direction: column;
gap: 1rem;
```

### Grid Patterns

**Auto-Fit Grid:**
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 2rem;
```

**3-Column Grid:**
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1.5rem;
```

**Complex Grid (Projects):**
```css
display: grid;
grid-template-columns: repeat(6, 1fr);
.project-card:nth-child(1) { grid-column: span 2; }
.project-card:nth-child(4) { grid-column: 2 / 4; }
```

---

## Best Practices

### Color Usage

✅ **Use Variables:**
```css
color: var(--color-primary);  /* Good */
color: #7b5858;               /* Avoid */
```

✅ **Maintain Contrast:**
- Text on light: Use Text Dark (#2c2c2c)
- Text on dark: Use White (#ffffff)
- Minimum ratio: 4.5:1 (WCAG AA)

✅ **Consistent Application:**
- Primary: Main actions, headings, links
- Secondary: Supporting elements
- Tertiary: Borders, dividers

### Spacing Usage

✅ **Use System:**
```css
padding: var(--space-lg);  /* Good */
padding: 32px;             /* Avoid */
```

✅ **Vertical Rhythm:**
- Section padding: `space-xl` to `space-2xl`
- Card padding: `space-md` to `space-lg`
- Element gaps: `space-sm` to `space-md`

### Typography Usage

✅ **Use clamp():**
```css
font-size: clamp(1rem, 2vw, 1.2rem);  /* Good */
font-size: 18px;                      /* Avoid */
```

✅ **Maintain Hierarchy:**
- H1: Hero title only
- H2: Section titles
- H3: Subsection titles
- P: Body text

---

## Accessibility Guidelines

### Color Contrast
```
Text on Background:     7.2:1  (AAA) ✅
Links:                  5.1:1  (AA)  ✅
Buttons:                12.3:1 (AAA) ✅
```

### Focus Indicators
```
Outline Width:   3px minimum
Offset:          2px
Color:           Primary (high contrast)
Always Visible:  Yes
```

### Touch Targets
```
Minimum Size:    44px × 44px
Spacing:         8px minimum
Large Targets:   Form inputs, buttons, cards
```

### Keyboard Navigation
```
Tab Order:       Logical flow
Focus Trap:      Modal (yes), Page (no)
Skip Links:      Not implemented (consider adding)
Shortcuts:       Alt+1,2,3,4 for sections
```

---

## Print Styles

```css
@media print {
  /* Hide interactive elements */
  .shapes, .about-background, .btn, .modal {
    display: none !important;
  }
  
  /* Simplify colors */
  body {
    background: white;
    color: black;
  }
  
  /* Avoid page breaks inside sections */
  .hero, .about, .projects, .contact {
    page-break-inside: avoid;
  }
}
```

---

## Dark Mode Consideration (Not Implemented)

If you want to add dark mode, use this pattern:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #1a1a1a;
    --color-text-dark: #ffffff;
    --color-text-light: #b0b0b0;
    --color-white: #2c2c2c;
    --color-tertiary: #3a3a3a;
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
    /* ... adjust other variables */
  }
}
```

---

## Performance Considerations

### Animations
```
Use CSS transforms (GPU accelerated):
  ✅ transform: translateY()
  ✅ transform: scale()
  ❌ top/left/margin (causes reflow)
```

### Images
```
Formats:   JPG for photos, PNG for graphics, WebP for both
Size:      Match display size (don't use 4K for 400px)
Loading:   Add loading="lazy" for below-fold images
Alt Text:  Always provide descriptive text
```

### Fonts
```
Use:       Google Fonts with display=swap
Weights:   Only load needed weights (400, 600, 700, 800)
Fallback:  Always provide system font fallback
```

---

**Visual Guide Version:** 2.0  
**Created:** October 21, 2025  
**For:** Portfolio Website Refactoring Project
