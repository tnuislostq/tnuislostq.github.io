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
     Custom cursor — terminal-style crosshair.
     Moves 1:1 with the pointer (no smoothing lag) for a crisp,
     precise feel; a small blinking caret rides alongside it,
     and hovering an interactive element expands the crosshair
     arms and shows a short mono label.
  ---------------------------------------------------------- */
  const crosshair = document.querySelector(".cursor-crosshair");
  const caret = document.querySelector(".cursor-caret");
  const label = document.querySelector(".ch-label");
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const HOVER_LABELS = [
    { selector: ".project-card, .cert-card", text: "view" },
    { selector: "a[download]", text: "get" },
    { selector: "a, button", text: "open" },
  ];

  if (crosshair && caret && canHover) {
    window.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;
      crosshair.style.transform = `translate(${x}px, ${y}px)`;
      caret.style.transform = `translate(${x + 16}px, ${y - 15}px)`;
    });

    document.querySelectorAll("a, button, .project-card, .cert-card, .chip-row li").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        crosshair.classList.add("is-active");
        if (label) {
          const match = HOVER_LABELS.find((h) => el.matches(h.selector));
          label.textContent = match ? match.text : "";
        }
      });
      el.addEventListener("mouseleave", () => crosshair.classList.remove("is-active"));
    });

    document.body.style.cursor = "none";
    document.querySelectorAll("a, button").forEach((el) => (el.style.cursor = "none"));
  } else if (crosshair && caret) {
    crosshair.style.display = "none";
    caret.style.display = "none";
  }
})();
