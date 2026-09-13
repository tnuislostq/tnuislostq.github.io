(() => {
  "use strict";

  /* ----------------------------------------------------------
     Footer year
  ---------------------------------------------------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ----------------------------------------------------------
     Theme toggle (persisted)
  ---------------------------------------------------------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const THEME_KEY = "tkv-portfolio-theme";

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
      themeToggle.setAttribute("aria-label", theme === "light" ? "Switch to dark theme" : "Switch to light theme");
    }
  }

  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(savedTheme || (prefersLight ? "light" : "dark"));

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }

  /* ----------------------------------------------------------
     Mobile nav
  ---------------------------------------------------------- */
  const navToggle = document.getElementById("nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    mobileNav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        mobileNav.classList.remove("is-open");
        navToggle.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ----------------------------------------------------------
     Scroll reveal (single IntersectionObserver, staggered
     slightly by DOM order within each section)
  ---------------------------------------------------------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    // Arm the hidden state only now that we know it will be lifted —
    // keeps the page fully visible if JS is slow, blocked, or errors.
    revealEls.forEach((el, i) => {
      el.classList.add("reveal-armed");
      el.style.transitionDelay = `${Math.min(i % 4, 4) * 70}ms`;
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  /* ----------------------------------------------------------
     Photo carousel — auto-changing photo in the hero frame.
     To change the rotation, add/remove <img> tags with class
     "slide" inside #photo-carousel in index.html, pointing at
     files in assets/photos/. Order in the DOM = display order.
  ---------------------------------------------------------- */
  const PHOTO_SLIDE_INTERVAL = 4000; // ms
  const carousel = document.getElementById("photo-carousel");
  if (carousel) {
    const slides = carousel.querySelectorAll(".slide");
    if (slides.length > 1) {
      let active = 0;
      setInterval(() => {
        slides[active].classList.remove("is-active");
        active = (active + 1) % slides.length;
        slides[active].classList.add("is-active");
      }, PHOTO_SLIDE_INTERVAL);
    }
  }

  /* ----------------------------------------------------------
     Custom cursor
  ---------------------------------------------------------- */
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (dot && ring && canHover) {
    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animateRing);
    }
    animateRing();

    const interactive = "a, button, .project-card, .cert-card, .chip-row li";
    document.querySelectorAll(interactive).forEach((el) => {
      el.addEventListener("mouseenter", () => ring.classList.add("is-active"));
      el.addEventListener("mouseleave", () => ring.classList.remove("is-active"));
    });

    document.body.style.cursor = "none";
    document.querySelectorAll("a, button").forEach((el) => (el.style.cursor = "none"));
  } else if (dot && ring) {
    dot.style.display = "none";
    ring.style.display = "none";
  }
})();
