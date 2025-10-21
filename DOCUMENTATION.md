# 📚 Technical Documentation - Portfolio Website v2.0

## Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [CSS Structure](#css-structure)
3. [JavaScript Modules](#javascript-modules)
4. [Component Documentation](#component-documentation)
5. [API Reference](#api-reference)
6. [Customization Guide](#customization-guide)
7. [Troubleshooting](#troubleshooting)

---

## Architecture Overview

### File Organization
```
Project follows separation of concerns principle:
- HTML: Structure and content
- CSS: All styling and animations
- JS: Behavior and interactivity
```

### Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Fonts**: Google Fonts (Poppins)
- **Layout**: CSS Grid & Flexbox
- **Animations**: CSS Keyframes + JavaScript
- **No Dependencies**: 100% vanilla code

---

## CSS Structure

### 1. **Design Tokens (Lines 9-46)**
Central design system with CSS custom properties:

```css
:root {
  /* Colors */
  --color-primary: #7b5858;
  --color-primary-dark: #5c4343;
  --color-primary-light: #ac6969;
  
  /* Spacing */
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  
  /* Transitions */
  --transition-base: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

**Usage:**
```css
.element {
  color: var(--color-primary);
  padding: var(--space-md);
  transition: all var(--transition-base);
}
```

### 2. **Reset & Base Styles (Lines 48-78)**
Normalizes browser defaults:
- Box-sizing: border-box
- Smooth scroll behavior
- Font smoothing for better rendering

### 3. **Image Protection (Lines 80-95)**
Security layer for images:
```css
img {
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
}
```

### 4. **Component Sections**

#### Hero Section (Lines 185-289)
- Full viewport height
- Gradient background
- Animated floating shapes
- Responsive typography with clamp()

**Key Classes:**
- `.hero` - Main container
- `.hero-title` - Main heading with animation
- `.hero-actions` - Button group
- `.shapes` - Animated background decorations

#### About Section (Lines 291-599)
- Optimized compact design
- Photo gallery with hover effects
- Animated statistics with Intersection Observer
- Tech stack grid with skill bars

**Key Classes:**
- `.about-card` - Main content card (max-width: 520px)
- `.about-photos img` - Profile images (145×175px)
- `.stats-grid` - 3-column statistics
- `.tech-grid` - 4-column (2 on mobile) tech stack

**Responsive Behavior:**
```css
/* Desktop: Side-by-side */
.about-container { display: flex; }

/* Mobile: Stacked */
@media (max-width: 768px) {
  .about-container { flex-direction: column; }
  .about-photos { flex-direction: row; }
}
```

#### Projects Section (Lines 601-899)
- 6-column grid layout
- Card flip animation
- Modal dialog system

**Grid System:**
```css
/* Desktop: 3 cards per row (2 cols each) */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}

.project-card:nth-child(1),
.project-card:nth-child(2),
.project-card:nth-child(3) {
  grid-column: span 2;
}

/* Cards 4-5 centered */
.project-card:nth-child(4) { grid-column: 2 / 4; }
.project-card:nth-child(5) { grid-column: 4 / 6; }
```

**Card Flip Mechanism:**
```css
.card-front,
.card-back {
  backface-visibility: hidden;
  transition: opacity 0.5s, transform 0.7s;
}

.project-card.flipped .card-front {
  opacity: 0;
  transform: rotateY(-180deg);
}

.project-card.flipped .card-back {
  opacity: 1;
  transform: rotateY(0deg);
}
```

#### Contact Section (Lines 1025-1205)
- Dual-card layout
- Form styling with focus states
- Animated image card with floating bubbles

#### Footer (Lines 1207-1354)
- Gradient background
- 3-column link grid
- Social media icons

### 5. **Animations (Lines 1356-1442)**

**Available Keyframes:**

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.18); opacity: 0.8; }
}
```

### 6. **Responsive Breakpoints (Lines 1444-1642)**

| Breakpoint | Target Devices | Key Changes |
|------------|---------------|-------------|
| 1024px | Tablets | 2-column projects grid |
| 768px | Mobile landscape | Stacked about section |
| 600px | Mobile portrait | Single column, optimized spacing |

---

## JavaScript Modules

### Module Structure

```javascript
1. Project Data (Lines 13-80)
2. Global State (Lines 82-87)
3. Initialization (Lines 89-114)
4. Hero Typing Animation (Lines 116-158)
5. Stats Counter (Lines 160-196)
6. Skill Bars (Lines 198-219)
7. Project Cards (Lines 221-272)
8. Modal System (Lines 274-383)
9. Form Validation (Lines 385-515)
10. Image Protection (Lines 517-598)
11. Keyboard Navigation (Lines 600-635)
12. Smooth Scroll (Lines 637-655)
13. Performance Monitoring (Lines 657-667)
14. Error Handling (Lines 669-680)
```

### 1. **Project Data Structure**

```javascript
const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    image: 'project1.jpg',
    shortDesc: 'Modern online shopping experience',
    fullDesc: 'Detailed description...',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    features: [
      'Secure user authentication',
      'Real-time inventory management',
      // ...
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  // ... more projects
];
```

**To Add a New Project:**
```javascript
projectsData.push({
  id: 6,
  title: 'Your Project Name',
  image: 'project6.jpg',
  shortDesc: 'Short description',
  fullDesc: 'Full description...',
  tags: ['Tech1', 'Tech2'],
  features: ['Feature 1', 'Feature 2'],
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com/user/repo'
});
```

### 2. **Initialization Flow**

```javascript
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  initHeroTyping();        // Start typing animation
  initStatsCounter();       // Setup intersection observer
  initSkillBars();          // Setup skill animations
  initProjectCards();       // Attach event listeners
  initModal();              // Setup modal handlers
  initFormValidation();     // Form validation
  initImageProtection();    // Security features
  initKeyboardNavigation(); // Accessibility
  initSmoothScroll();       // Smooth anchor links
}
```

### 3. **Hero Typing Animation**

```javascript
function initHeroTyping() {
  const phrases = [
    'System Developer',
    'Full Stack Engineer',
    'Problem Solver',
    'Code Enthusiast'
  ];
  
  // Types and deletes phrases in a loop
  // Speed: 100ms typing, 50ms deleting
  // Pause: 2s at end, 500ms before next
}
```

**Customization:**
```javascript
// Add/remove phrases
const phrases = [
  'Your Title 1',
  'Your Title 2',
  'Your Title 3'
];

// Adjust speeds
let typingSpeed = 150;  // Slower typing
let pauseAtEnd = 3000;  // Longer pause
```

### 4. **Stats Counter with Intersection Observer**

```javascript
function initStatsCounter() {
  const observerOptions = {
    threshold: 0.5,  // Trigger when 50% visible
    rootMargin: '0px'
  };
  
  // Counts from 0 to target over 2 seconds
  // Uses requestAnimationFrame for smooth animation
}
```

**HTML Structure Required:**
```html
<div class="stat-number" data-count="50">0+</div>
```

### 5. **Project Card Flip**

```javascript
function initProjectCards() {
  projectCards.forEach((card) => {
    // Click to flip
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.view-details')) {
        card.classList.toggle('flipped');
      }
    });
    
    // Keyboard support (Enter/Space)
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        card.classList.toggle('flipped');
      }
    });
  });
}
```

### 6. **Modal System**

```javascript
function openModal(project) {
  // Populate content
  document.getElementById('modalImage').src = project.image;
  document.getElementById('modalTitle').textContent = project.title;
  
  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Focus trap for accessibility
  // Escape key to close
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}
```

**Event Listeners:**
- Click close button
- Click outside modal (overlay)
- Press Escape key

### 7. **Form Validation**

```javascript
function initFormValidation() {
  // Input sanitization
  const sanitizeInput = (input) => {
    return input.replace(/[<>]/g, '').trim();
  };
  
  // Email validation
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  // Real-time validation on blur
  // Submit validation
  // Success/error notifications
}
```

**Validation Rules:**
- **Name**: Minimum 2 characters
- **Email**: Valid email format
- **Message**: Minimum 10 characters

### 8. **Image Protection**

```javascript
function initImageProtection() {
  // Disable right-click on images
  document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
      showNotification('Image downloads are disabled', 'error');
    }
  });
  
  // Disable drag
  // Disable Ctrl+S (Save)
  // Disable F12 (DevTools)
  // Disable Ctrl+U (View Source)
}
```

**Protected Shortcuts:**
- `Ctrl+S` / `Cmd+S` - Save
- `Ctrl+Shift+I` / `Cmd+Option+I` - DevTools
- `F12` - DevTools
- `Ctrl+U` / `Cmd+U` - View Source

### 9. **Keyboard Navigation**

```javascript
// Alt+Number shortcuts
Alt+1 → Hero section
Alt+2 → About section
Alt+3 → Projects section
Alt+4 → Contact section

// Modal navigation
Escape → Close modal
Tab → Navigate focusable elements
Shift+Tab → Reverse navigation
```

---

## Component Documentation

### Button Component

**Classes:**
```css
.btn              /* Base button */
.btn-primary      /* Primary action (gradient) */
.btn-secondary    /* Secondary action */
.btn-outline      /* Outline style */
```

**HTML:**
```html
<a href="#contact" class="btn btn-primary">Get In Touch</a>
<button class="btn btn-outline">Learn More</button>
```

**States:**
- Default: Gradient background
- Hover: translateY(-3px) + shadow
- Before: Ripple effect on hover

### Project Card Component

**HTML Structure:**
```html
<div class="project-card">
  <div class="card-front">
    <img src="project.jpg" class="project-image" alt="Project">
    <h3>Project Title</h3>
  </div>
  <div class="card-back">
    <h3>Project Title</h3>
    <p>Description...</p>
    <button class="btn btn-primary view-details">View Details</button>
  </div>
</div>
```

**Behavior:**
1. Click card → Flip to back
2. Click "View Details" → Open modal
3. Click again → Flip to front

### Modal Component

**HTML Structure:**
```html
<div id="projectModal" class="modal">
  <div class="modal-content">
    <button class="modal-close">&times;</button>
    <img id="modalImage" class="modal-image" src="" alt="">
    <div class="modal-body">
      <h2 id="modalTitle"></h2>
      <p id="modalDescription"></p>
      <div id="modalTags" class="modal-tags"></div>
      <div class="modal-features">
        <h3>Key Features:</h3>
        <ul id="modalFeatures"></ul>
      </div>
      <div class="modal-actions">
        <a id="modalLiveBtn" class="btn btn-primary">View Live</a>
        <a id="modalGithubBtn" class="btn btn-outline">GitHub</a>
      </div>
    </div>
  </div>
</div>
```

**JavaScript Population:**
```javascript
document.getElementById('modalImage').src = project.image;
document.getElementById('modalTitle').textContent = project.title;
// ... etc
```

---

## API Reference

### Public Functions

#### `initializeApp()`
Initializes all features. Called on DOMContentLoaded.

**Returns:** void

---

#### `openModal(project)`
Opens the project modal with project data.

**Parameters:**
- `project` (Object) - Project data from projectsData array

**Returns:** void

**Example:**
```javascript
openModal(projectsData[0]);
```

---

#### `closeModal()`
Closes the currently open modal.

**Returns:** void

---

#### `showNotification(message, type)`
Displays a temporary notification.

**Parameters:**
- `message` (String) - Notification text
- `type` (String) - 'success' or 'error'

**Returns:** void

**Example:**
```javascript
showNotification('Form submitted successfully!', 'success');
```

---

#### `scrollToSection(sectionId)`
Smoothly scrolls to a section.

**Parameters:**
- `sectionId` (String) - ID or class name of section

**Returns:** void

**Example:**
```javascript
scrollToSection('about');
```

---

### Global Variables

```javascript
let currentProject = null;    // Currently viewed project
let isModalOpen = false;      // Modal state
```

---

## Customization Guide

### Changing Colors

**1. Update CSS Variables:**
```css
:root {
  --color-primary: #your-color;
  --color-primary-dark: #darker-shade;
  --color-primary-light: #lighter-shade;
}
```

**2. Colors Used:**
- Buttons, links, headings → primary
- Gradients → primary + primary-light
- Text emphasis → primary-dark

### Adding a New Section

**1. HTML:**
```html
<section class="your-section">
  <div class="container">
    <h2 class="section-title">Section Title</h2>
    <!-- Content -->
  </div>
</section>
```

**2. CSS:**
```css
.your-section {
  padding: 80px var(--space-lg);
  background: var(--gradient-light);
}
```

**3. JavaScript (if needed):**
```javascript
function initYourSection() {
  // Your code
}

// Add to initializeApp()
```

### Modifying Animations

**Speed:**
```css
:root {
  --transition-fast: 0.2s;   /* Faster */
  --transition-base: 0.3s;   /* Normal */
  --transition-slow: 0.5s;   /* Slower */
}
```

**Disable Animations:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Responsive Customization

**Add Custom Breakpoint:**
```css
@media (max-width: 900px) {
  .your-element {
    /* Your styles */
  }
}
```

**Fluid Typography:**
```css
.heading {
  font-size: clamp(min, preferred, max);
  /* Example: clamp(1.5rem, 3vw, 2.5rem) */
}
```

---

## Troubleshooting

### Common Issues

#### 1. **Images Not Loading**

**Problem:** `<img src="project1.jpg">` shows broken image

**Solution:**
```html
<!-- Use correct path -->
<img src="assets/project1.jpg" alt="Project">

<!-- Or absolute path -->
<img src="/rex/assets/project1.jpg" alt="Project">
```

#### 2. **Styles Not Applying**

**Problem:** Custom styles don't work

**Check:**
1. CSS file is linked: `<link rel="stylesheet" href="styles.css">`
2. File path is correct
3. CSS selector specificity
4. Browser cache (Ctrl+F5 to hard refresh)

**Solution:**
```html
<!-- Verify link in <head> -->
<link rel="stylesheet" href="styles.css">

<!-- Check browser console for 404 errors -->
```

#### 3. **JavaScript Not Working**

**Problem:** Animations/interactions don't work

**Check:**
1. JS file is linked: `<script src="script.js"></script>`
2. Placed before `</body>` (after HTML content)
3. Browser console for errors (F12)

**Solution:**
```html
<!-- Place before closing body tag -->
<script src="script.js"></script>
</body>
```

#### 4. **Modal Not Opening**

**Problem:** Click "View Details" but nothing happens

**Check:**
1. Modal HTML exists with correct ID: `<div id="projectModal">`
2. JavaScript is loaded
3. Button has correct class: `.view-details`

**Debug:**
```javascript
// Add console log to check
document.querySelector('.view-details').addEventListener('click', () => {
  console.log('Button clicked');
});
```

#### 5. **Form Not Submitting**

**Problem:** Form submission doesn't work

**Explanation:** Form is client-side only. No backend integration.

**To Add Backend:**
```javascript
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };
  
  // Send to your backend
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  if (response.ok) {
    showNotification('Message sent!', 'success');
  }
});
```

#### 6. **Stats Counter Not Animating**

**Problem:** Numbers don't count up

**Check:**
1. Elements have `data-count` attribute
2. Class is `.stat-number`
3. Scroll to section (uses Intersection Observer)

**HTML:**
```html
<div class="stat-number" data-count="50">0+</div>
```

#### 7. **Mobile Layout Issues**

**Problem:** Layout breaks on mobile

**Check:**
1. Viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
2. No fixed widths (use max-width, %, rem)
3. Test at different screen sizes (F12 → Device Toolbar)

**Solution:**
```css
/* Use flexible units */
.element {
  width: 100%;
  max-width: 500px;  /* Instead of width: 500px */
  padding: 5vw;      /* Responsive padding */
}
```

---

## Performance Tips

### 1. **Image Optimization**
- Use appropriate formats (JPG for photos, PNG for graphics)
- Compress images (TinyPNG, ImageOptim)
- Use correct dimensions (don't load 4K images for 400px display)

### 2. **CSS Optimization**
```css
/* Use shorthand */
padding: 10px 20px; /* Instead of padding-top, padding-right, etc. */

/* Combine selectors */
.btn-primary,
.btn-secondary {
  /* Shared styles */
}
```

### 3. **JavaScript Optimization**
```javascript
// Cache DOM queries
const modal = document.getElementById('projectModal'); // Once
// Instead of repeated document.getElementById()

// Use event delegation
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('project-card')) {
    // Handle
  }
});
```

### 4. **Lazy Loading**
```html
<img src="image.jpg" loading="lazy" alt="Description">
```

---

## Testing Checklist

### Desktop (1920×1080)
- [ ] All sections render correctly
- [ ] Animations smooth (60fps)
- [ ] Hover effects work
- [ ] Modal opens/closes
- [ ] Form validation works

### Tablet (768×1024)
- [ ] Layout adapts properly
- [ ] Touch interactions work
- [ ] Images scale correctly
- [ ] Text remains readable

### Mobile (375×667)
- [ ] Single column layout
- [ ] Touch targets 44px+ (accessibility)
- [ ] Forms easy to fill
- [ ] No horizontal scroll

### Accessibility
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Focus indicators visible
- [ ] Alt text on images
- [ ] Headings in logical order (H1 → H2 → H3)
- [ ] Color contrast meets WCAG AA (4.5:1 for text)

### Performance
- [ ] Load time < 3s
- [ ] No console errors
- [ ] Smooth scrolling
- [ ] No layout shifts

---

## Browser DevTools Tips

### Inspect Animations
```
1. F12 → More Tools → Animations
2. View timeline of all animations
3. Slow down to debug
```

### Check Responsiveness
```
1. F12 → Toggle Device Toolbar (Ctrl+Shift+M)
2. Select device preset or custom dimensions
3. Test portrait/landscape
```

### Performance Profiling
```
1. F12 → Performance tab
2. Click Record
3. Interact with page
4. Stop recording
5. Analyze FPS, paint times
```

### Accessibility Audit
```
1. F12 → Lighthouse tab
2. Select "Accessibility"
3. Generate report
4. Fix issues
```

---

## Maintenance

### Regular Tasks

**Weekly:**
- Check for broken links
- Test form submission
- Verify images load

**Monthly:**
- Update dependencies (if any added)
- Review browser compatibility
- Performance audit

**Quarterly:**
- Content updates (projects, bio)
- Design refresh (colors, layout)
- Security review

---

## Support & Resources

### Documentation
- **CSS Reference:** [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **JavaScript Guide:** [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **Accessibility:** [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Tools
- **Validator:** [W3C Markup Validation](https://validator.w3.org/)
- **Performance:** [PageSpeed Insights](https://pagespeed.web.dev/)
- **Color Contrast:** [Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

**Document Version:** 2.0  
**Last Updated:** October 21, 2025  
**Author:** Jhon Rex Benavente
