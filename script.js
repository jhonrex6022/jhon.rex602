/* ============================================
   MODERN DEVELOPER PORTFOLIO - JAVASCRIPT
   Version: 3.0
   ============================================ */

'use strict';

// ============================================
// PROJECT DATA
// ============================================
const projectsData = [
  {
    id: 1,
    title: 'Helpdesk System',
    image: 'helpdesk.png',
    description: 'A comprehensive ticketing system for managing internal and external issues.',
    fullDescription: 'An enterprise-level helpdesk system designed to streamline issue resolution for both internal company operations and external client concerns. This system enables organizations to efficiently track, categorize, and resolve technical and operational issues while maintaining clear communication channels with all stakeholders.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    features: [
      'Internal issue tracking for company operations',
      'External ticketing for client support',
      'Multi-level ticket categorization and prioritization',
      'Role-based access control (Admin, Agent, User)',
      'Real-time ticket status tracking and updates',
      'Comprehensive reporting and analytics dashboard',
      'Email notifications for ticket updates',
      'Attachment support for issue documentation'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'HRIS System',
    image: 'hris.mp4',
    description: 'Complete human resource information system for workforce management.',
    fullDescription: 'A robust Human Resource Information System that centralizes employee data and automates HR processes. This comprehensive solution handles everything from employee onboarding to performance management, leave tracking, and payroll integration, significantly improving HR operational efficiency.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    features: [
      'Employee database with complete profile management',
      'Attendance and leave management system',
      'Payroll processing and salary computation',
      'Performance evaluation and appraisal tracking',
      'Document management for HR files',
      'Employee self-service portal',
      'Comprehensive HR reports and analytics',
      'Organizational chart visualization'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Company Website',
    image: 'website.mp4',
    description: 'Modern corporate website with CMS for business presence.',
    fullDescription: 'A professional corporate website built to establish strong online presence and showcase company services. Features a custom content management system allowing non-technical staff to update content easily. Built with responsive design and optimized performance for excellent user experience.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    features: [
      'Custom CMS for easy content management',
      'Fully responsive design across all devices',
      'Contact form with inquiry management',
      'Service showcase and portfolio sections',
      'Company blog with category management',
      'Image gallery and media management',
      'Fast loading times and performance optimization',
      'Secure admin panel with user management'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    image: 'portfolio.jpg',
    description: 'Personal portfolio showcasing projects and technical expertise.',
    fullDescription: 'A modern, responsive portfolio website designed to showcase my development projects and technical skills. Built with clean code and best practices, featuring smooth animations, interactive elements, and optimized performance. Demonstrates proficiency in front-end development and attention to detail.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    features: [
      'Modern and clean design with smooth animations',
      'Fully responsive across all devices',
      'Interactive project showcase with modal details',
      'Animated skill bars and statistics',
      'Contact form with validation',
      'Optimized images and fast loading',
      'Dynamic content rendering',
      'Cross-browser compatibility'
    ],
    liveUrl: '#',
    githubUrl: '#'
  }
];

// ============================================
// STATE MANAGEMENT
// ============================================
const state = {
  currentProject: null,
  isModalOpen: false,
  isMenuOpen: false
};

// ============================================
// DOM ELEMENTS
// ============================================
const elements = {
  navbar: document.getElementById('navbar'),
  navToggle: document.getElementById('navToggle'),
  navMenu: document.getElementById('navMenu'),
  navLinks: document.querySelectorAll('.nav-link'),
  typingText: document.getElementById('typingText'),
  projectsGrid: document.getElementById('projectsGrid'),
  modal: document.getElementById('projectModal'),
  modalOverlay: document.getElementById('modalOverlay'),
  modalClose: document.getElementById('modalClose'),
  contactForm: document.getElementById('contactForm'),
  statNumbers: document.querySelectorAll('.stat-number'),
  skillCards: document.querySelectorAll('.skill-card')
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('%c🚀 Portfolio Loaded', 'color: #7b5858; font-size: 20px; font-weight: bold;');
  
  initNavigation();
  initTypingAnimation();
  initScrollEffects();
  initProjects();
  initModal();
  initContactForm();
  initStatsCounter();
  initSkillBars();
  initImageProtection();
});

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
  // Mobile menu toggle
  if (elements.navToggle) {
    elements.navToggle.addEventListener('click', toggleMenu);
  }
  
  // Close menu on link click
  elements.navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (state.isMenuOpen) {
        toggleMenu();
      }
      updateActiveLink(link);
    });
  });
  
  // Navbar scroll effect
  window.addEventListener('scroll', handleNavbarScroll);
  
  // Update active link on scroll
  window.addEventListener('scroll', updateActiveLinkOnScroll);
}

function toggleMenu() {
  state.isMenuOpen = !state.isMenuOpen;
  elements.navMenu.classList.toggle('active');
  elements.navToggle.classList.toggle('active');
}

function handleNavbarScroll() {
  if (window.scrollY > 50) {
    elements.navbar.classList.add('scrolled');
  } else {
    elements.navbar.classList.remove('scrolled');
  }
}

function updateActiveLink(activeLink) {
  elements.navLinks.forEach(link => link.classList.remove('active'));
  activeLink.classList.add('active');
}

function updateActiveLinkOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      if (correspondingLink) {
        updateActiveLink(correspondingLink);
      }
    }
  });
}

// ============================================
// TYPING ANIMATION
// ============================================
function initTypingAnimation() {
  if (!elements.typingText) return;
  
  const phrases = [
    'System Developer',
    'IT Support Specialist',
    'Problem Solver',
    'Code Enthusiast'
  ];
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      elements.typingText.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      elements.typingText.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let typingSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500;
    }
    
    setTimeout(type, typingSpeed);
  }
  
  type();
}

// ============================================
// SCROLL EFFECTS
// ============================================
function initScrollEffects() {
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe sections
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
}

// ============================================
// PROJECTS
// ============================================
function initProjects() {
  if (!elements.projectsGrid) return;
  
  renderProjects();
}

function renderProjects() {
  elements.projectsGrid.innerHTML = projectsData.map(project => {
    const isVideo = project.image.endsWith('.mp4');
    const mediaElement = isVideo 
      ? `<video src="${project.image}" class="project-image" muted loop autoplay playsinline></video>`
      : `<img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">`;
    
    return `
    <article class="project-card" data-project-id="${project.id}">
      ${mediaElement}
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <a href="#" class="project-link" data-project-id="${project.id}">
          View Details →
        </a>
      </div>
    </article>
  `;
  }).join('');
  
  // Add click handlers
  document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = parseInt(e.target.dataset.projectId);
      openProjectModal(projectId);
    });
  });
  
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.classList.contains('project-link')) {
        const projectId = parseInt(card.dataset.projectId);
        openProjectModal(projectId);
      }
    });
  });
}

// ============================================
// MODAL
// ============================================
function initModal() {
  if (!elements.modal) return;
  
  // Close button
  if (elements.modalClose) {
    elements.modalClose.addEventListener('click', closeModal);
  }
  
  // Overlay click
  if (elements.modalOverlay) {
    elements.modalOverlay.addEventListener('click', closeModal);
  }
  
  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.isModalOpen) {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;
  
  state.currentProject = project;
  state.isModalOpen = true;
  
  // Populate modal - Handle both images and videos
  const modalImageContainer = document.querySelector('.modal-content');
  const oldMedia = modalImageContainer.querySelector('.modal-image, .modal-video');
  const isVideo = project.image.endsWith('.mp4');
  
  if (oldMedia) {
    oldMedia.remove();
  }
  
  let mediaElement;
  if (isVideo) {
    mediaElement = document.createElement('video');
    mediaElement.className = 'modal-image modal-video';
    mediaElement.src = project.image;
    mediaElement.controls = true;
    mediaElement.autoplay = true;
    mediaElement.loop = true;
  } else {
    mediaElement = document.createElement('img');
    mediaElement.className = 'modal-image';
    mediaElement.src = project.image;
    mediaElement.alt = project.title;
  }
  
  modalImageContainer.insertBefore(mediaElement, modalImageContainer.querySelector('.modal-body'));
  
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalDescription').textContent = project.fullDescription;
  
  // Tags
  const tagsContainer = document.getElementById('modalTags');
  tagsContainer.innerHTML = project.tags.map(tag => 
    `<span class="modal-tag">${tag}</span>`
  ).join('');
  
  // Features
  const featuresList = document.getElementById('modalFeatures');
  featuresList.innerHTML = project.features.map(feature => 
    `<li>${feature}</li>`
  ).join('');
  
  // Links
  document.getElementById('modalLiveLink').href = project.liveUrl;
  document.getElementById('modalGithubLink').href = project.githubUrl;
  
  // Show modal
  elements.modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Focus trap
  const focusableElements = elements.modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (focusableElements.length > 0) {
    focusableElements[0].focus();
  }
}

function closeModal() {
  state.isModalOpen = false;
  state.currentProject = null;
  
  elements.modal.classList.remove('active');
  document.body.style.overflow = '';
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
  if (!elements.contactForm) return;
  
  elements.contactForm.addEventListener('submit', handleFormSubmit);
  
  // Real-time validation
  const inputs = elements.contactForm.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
  });
}

function validateField(field) {
  const value = field.value.trim();
  let isValid = true;
  let errorMessage = '';
  
  if (field.hasAttribute('required') && !value) {
    isValid = false;
    errorMessage = 'This field is required';
  } else if (field.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = 'Please enter a valid email';
    }
  }
  
  // Remove existing error
  const existingError = field.parentElement.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }
  
  // Add error if invalid
  if (!isValid) {
    field.style.borderColor = 'var(--color-error)';
    const error = document.createElement('small');
    error.className = 'error-message';
    error.style.color = 'var(--color-error)';
    error.style.fontSize = '0.85rem';
    error.style.marginTop = '4px';
    error.style.display = 'block';
    error.textContent = errorMessage;
    field.parentElement.appendChild(error);
  } else {
    field.style.borderColor = 'var(--color-success)';
    setTimeout(() => {
      field.style.borderColor = '';
    }, 2000);
  }
  
  return isValid;
}

function handleFormSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(elements.contactForm);
  
  // Validate all fields
  const inputs = elements.contactForm.querySelectorAll('input, textarea');
  let allValid = true;
  
  inputs.forEach(input => {
    if (!validateField(input)) {
      allValid = false;
    }
  });
  
  if (!allValid) {
    showNotification('Please fix the errors in the form', 'error');
    return;
  }
  
  // Send data via AJAX
  fetch('contact.php', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    console.log('Response status:', response.status);
    if (!response.ok) {
      throw new Error('HTTP error ' + response.status);
    }
    return response.text();
  })
  .then(text => {
    console.log('Response text:', text);
    try {
      const data = JSON.parse(text);
      if (data.success) {
        showNotification(data.message, 'success');
        elements.contactForm.reset();
      } else {
        // Show debug info in console if available
        if (data.debug) {
          console.error('Server error:', data.debug);
        }
        showNotification(data.message, 'error');
      }
    } catch (e) {
      console.error('JSON parse error:', e);
      console.error('Response was:', text);
      showNotification('Server error. Please check console for details.', 'error');
    }
  })
  .catch(error => {
    console.error('Fetch error:', error);
    showNotification('Connection error: ' + error.message, 'error');
  });
}

function showNotification(message, type = 'success') {
  // Remove existing notification
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();
  
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.style.cssText = `
    position: fixed;
    top: 90px;
    right: 20px;
    padding: 16px 24px;
    background: ${type === 'success' ? 'var(--color-success)' : 'var(--color-error)'};
    color: white;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-lg);
    z-index: 10000;
    animation: slideInRight 0.3s ease;
    font-weight: 500;
    max-width: 400px;
  `;
  notification.textContent = message;
  
  // Add animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(100%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes slideOutRight {
      from {
        opacity: 1;
        transform: translateX(0);
      }
      to {
        opacity: 0;
        transform: translateX(100%);
      }
    }
  `;
  document.head.appendChild(style);
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 4000);
}

// ============================================
// STATS COUNTER
// ============================================
function initStatsCounter() {
  if (elements.statNumbers.length === 0) return;
  
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted');
        animateCounter(entry.target);
      }
    });
  }, observerOptions);
  
  elements.statNumbers.forEach(stat => observer.observe(stat));
}

function animateCounter(element) {
  const target = parseInt(element.dataset.target);
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;
  
  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };
  
  updateCounter();
}

// ============================================
// SKILL BARS
// ============================================
function initSkillBars() {
  if (elements.skillCards.length === 0) return;
  
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animate')) {
        entry.target.classList.add('animate');
        const progressBar = entry.target.querySelector('.skill-progress');
        if (progressBar) {
          const progress = progressBar.dataset.progress;
          progressBar.style.width = progress + '%';
        }
      }
    });
  }, observerOptions);
  
  elements.skillCards.forEach(card => observer.observe(card));
}

// ============================================
// IMAGE PROTECTION
// ============================================
function initImageProtection() {
  // Disable right-click on images
  document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
      return false;
    }
  });
  
  // Disable drag on images
  document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
      return false;
    }
  });
  
  // Disable common keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + S (Save)
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      return false;
    }
    
    // Ctrl/Cmd + U (View Source)
    if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
      e.preventDefault();
      return false;
    }
  });
}

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#' || href === '#!') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// PORTFOLIO SCREENSHOT GENERATOR
// ============================================
function generatePortfolioThumbnail() {
  // Check if portfolio.jpg already exists by trying to load it
  const portfolioProject = projectsData.find(p => p.id === 4);
  if (!portfolioProject) return;
  
  const img = new Image();
  img.src = 'portfolio.jpg';
  
  img.onerror = () => {
    // If image doesn't exist, create a placeholder canvas
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 450;
    const ctx = canvas.getContext('2d');
    
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 800, 450);
    gradient.addColorStop(0, '#7b5858');
    gradient.addColorStop(1, '#ac6969');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 450);
    
    // Add text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 48px Poppins, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Portfolio Website', 400, 200);
    
    ctx.font = '24px Poppins, sans-serif';
    ctx.fillText('Jhon Rex Benavente', 400, 250);
    
  ctx.font = '18px Poppins, sans-serif';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.fillText('System Developer & IT Support Specialist', 400, 290);
    
    // Update the project image with canvas data
    portfolioProject.image = canvas.toDataURL('image/jpeg', 0.9);
    
    // Re-render projects to show the generated image
    renderProjects();
  };
}

// ============================================
// PERFORMANCE MONITORING
// ============================================
window.addEventListener('load', () => {
  if (window.performance && window.performance.timing) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`%c✅ Page loaded in ${pageLoadTime}ms`, 'color: var(--color-success); font-weight: bold;');
  }
  
  // Generate portfolio thumbnail if needed
  setTimeout(generatePortfolioThumbnail, 500);
});

// ============================================
// ERROR HANDLING
// ============================================
window.addEventListener('error', (e) => {
  console.error('Error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
});

// ============================================
// UTILITY FUNCTIONS
// ============================================
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Optimize scroll handlers
window.addEventListener('scroll', throttle(handleNavbarScroll, 100));
window.addEventListener('scroll', throttle(updateActiveLinkOnScroll, 100));

// ============================================
// END OF SCRIPT
// ============================================