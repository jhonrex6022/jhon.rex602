/* ============================================
   REX BENAVENTE — PORTFOLIO JAVASCRIPT
   ============================================ */

"use strict";

// ============================================
// NAVBAR: scroll shadow + active link
// ============================================
(function initNavbar() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  function onScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > 20);

    let current = "";
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 100) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

// ============================================
// MOBILE MENU TOGGLE
// ============================================
(function initMobileMenu() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMobile");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen);
  });

  menu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();

// ============================================
// HERO TYPING EFFECT
// ============================================
(function initTyping() {
  const el = document.getElementById("heroTyped");
  if (!el) return;

  const phrases = [
    "Junior Technical Support",
    "System Developer",
    "Linux & Server Admin",
    "IT Problem Solver",
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;
  const TYPING_SPEED = 75;
  const DELETING_SPEED = 40;
  const PAUSE_END = 2000;
  const PAUSE_START = 400;

  function tick() {
    const current = phrases[phraseIndex];
    if (!deleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, PAUSE_END);
        return;
      }
      setTimeout(tick, TYPING_SPEED);
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, PAUSE_START);
        return;
      }
      setTimeout(tick, DELETING_SPEED);
    }
  }

  tick();
})();

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
(function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  items.forEach((item) => observer.observe(item));
})();

// ============================================
// CONTACT FORM
// ============================================
(function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const submit = document.getElementById("formSubmit");
  if (!form || !status || !submit) return;

  function showStatus(message, type) {
    status.textContent = message;
    status.className = "form-status " + type;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    showStatus("", "");

    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const subject = form.querySelector('[name="subject"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    if (!name || !email || !subject || !message) {
      showStatus("Please fill in all fields.", "error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showStatus("Please enter a valid email address.", "error");
      return;
    }

    submit.disabled = true;
    submit.textContent = "Sending...";

    try {
      const res = await fetch(form.action || "contact.php", {
        method: "POST",
        body: new FormData(form),
      });
      if (res.ok) {
        showStatus(
          "Message sent! I'll get back to you within 24 hours.",
          "success",
        );
        form.reset();
      } else {
        showStatus("Something went wrong. Please email me directly.", "error");
      }
    } catch (_) {
      showStatus("Network error. Please email me directly.", "error");
    } finally {
      submit.disabled = false;
      submit.innerHTML =
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message';
    }
  });
})();
