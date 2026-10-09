/* ============================================================
   main.js — typewriter, scroll reveal, nav behavior, stat counters
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileMenu();
  initTypewriter();
  initReveal();
  initScrollSpy();
  // stat counters are triggered by the reveal observer
});

/* ---------- Navbar: add solid bg on scroll ---------- */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  const onScroll = () => navbar.classList.toggle("is-scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Mobile menu toggle ---------- */
function initMobileMenu() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (!toggle || !menu) return;

  const close = () => {
    toggle.classList.remove("is-open");
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });

  menu.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", close)
  );
}

/* ---------- Typewriter effect ---------- */
function initTypewriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;

  const words = [
    "Praktisi Pendidikan",
    "Owner PT. Seribelajar Indonesia",
  ];
  let w = 0, c = 0, deleting = false;

  const tick = () => {
    const word = words[w];
    el.textContent = word.slice(0, c);

    if (!deleting && c < word.length) {
      c++;
      setTimeout(tick, 90);
    } else if (deleting && c > 0) {
      c--;
      setTimeout(tick, 45);
    } else if (!deleting && c === word.length) {
      deleting = true;
      setTimeout(tick, 1600);
    } else {
      deleting = false;
      w = (w + 1) % words.length;
      setTimeout(tick, 300);
    }
  };
  tick();
}

/* ---------- Reveal on scroll + trigger stat counters ---------- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !items.length) {
    items.forEach((i) => i.classList.add("is-visible"));
    document.querySelectorAll(".stat__num").forEach(animateCount);
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        entry.target
          .querySelectorAll?.(".stat__num")
          .forEach(animateCount);
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach((item) => observer.observe(item));
}

/* ---------- Animated number counters ---------- */
function animateCount(el) {
  if (el.dataset.done) return;
  el.dataset.done = "1";

  const target = parseFloat(el.dataset.count || "0");
  const suffix = el.dataset.suffix || "";
  const duration = 1400;
  const start = performance.now();

  const step = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
    el.textContent = Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ---------- Scroll spy: highlight active nav link ---------- */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav__link");
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach((l) =>
          l.classList.toggle(
            "is-active",
            l.getAttribute("href") === `#${id}` && !l.classList.contains("nav__link--cta")
          )
        );
      });
    },
    { threshold: 0.5 }
  );
  sections.forEach((s) => observer.observe(s));
}
