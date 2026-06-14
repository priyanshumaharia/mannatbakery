/* ═══════════════════════════════════════════════════════════════
   MANNAT BAKERY — MAIN JAVASCRIPT
═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  // ─── 1. NAVBAR SCROLL EFFECT ────────────────────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ─── 2. HAMBURGER MENU ──────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close nav on link click (mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // ─── 3. HERO PARTICLE CANVAS ───────────────────────────────
  const canvas = document.getElementById('particleCanvas');
  const ctx    = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const PARTICLE_COUNT = 80;
  const particles = [];

  class Particle {
    constructor() { this.reset(true); }
    reset(init = false) {
      this.x    = Math.random() * canvas.width;
      this.y    = init ? Math.random() * canvas.height : canvas.height + 10;
      this.r    = Math.random() * 3 + 1;
      this.speedY = -(Math.random() * 0.6 + 0.2);
      this.speedX =  (Math.random() - 0.5) * 0.4;
      this.alpha  =  Math.random() * 0.5 + 0.1;
      this.shape  = Math.random() > 0.5 ? 'circle' : 'square';
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.y < -10) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle   = '#F5D5C0';
      if (this.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
      }
      ctx.restore();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  // ─── 4. MENU TABS ───────────────────────────────────────────
  const tabBtns  = document.querySelectorAll('.tab-btn');
  const menuGrids = document.querySelectorAll('.menu-grid');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('active'));
      menuGrids.forEach(g => g.classList.remove('active'));

      btn.classList.add('active');
      const activeGrid = document.getElementById('tab-' + target);
      if (activeGrid) activeGrid.classList.add('active');
    });
  });

  // ─── 5. ADD TO CART TOAST ───────────────────────────────────
  const cartToast = document.getElementById('cartToast');

  function showToast(msg = '🛒 Added to cart!') {
    cartToast.textContent = msg;
    cartToast.classList.add('show');
    setTimeout(() => cartToast.classList.remove('show'), 2800);
  }

  document.querySelectorAll('.btn-add').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card  = e.target.closest('.menu-card');
      const name  = card ? card.querySelector('h3').textContent : 'Item';
      showToast(`🛒 "${name}" added to cart!`);
    });
  });

  // ─── 6. TESTIMONIAL SLIDER ──────────────────────────────────
  const testimonials = document.querySelectorAll('.testimonial-card');
  const dots         = document.querySelectorAll('.dot');
  let currentSlide   = 0;
  let autoSlide;

  function goToSlide(index) {
    testimonials[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (index + testimonials.length) % testimonials.length;
    testimonials[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function startAutoSlide() {
    autoSlide = setInterval(() => goToSlide(currentSlide + 1), 4000);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(autoSlide);
      goToSlide(parseInt(dot.dataset.index));
      startAutoSlide();
    });
  });

  startAutoSlide();

  // ─── 7. SCROLL REVEAL ───────────────────────────────────────
  const revealEls = document.querySelectorAll(
    '.about-container, .feature-card, .menu-card, .gallery-item, .testimonial-card, .contact-grid'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));

  // ─── 8. SMOOTH SCROLL FOR ANCHOR LINKS ──────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    });
  });

  // ─── 9. ACTIVE NAV LINK ON SCROLL ───────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.id;
      }
    });
    navAnchors.forEach(a => {
      a.style.color = '';
      if (a.getAttribute('href') === '#' + current) {
        a.style.color = 'var(--rose)';
      }
    });
  });

});

// ─── 10. CONTACT FORM SUBMIT ─────────────────────────────────
function submitForm() {
  const name    = document.getElementById('fname').value.trim();
  const phone   = document.getElementById('fphone').value.trim();
  const email   = document.getElementById('femail').value.trim();
  const message = document.getElementById('fmessage').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in your name, email, and message.');
    return;
  }

  // Hide form, show success
  document.querySelector('.contact-form').style.display = 'none';
  document.getElementById('form-success').classList.remove('hidden');

  // Reset after 4 seconds
  setTimeout(() => {
    document.querySelector('.contact-form').style.display = 'flex';
    document.getElementById('form-success').classList.add('hidden');
    document.getElementById('fname').value = '';
    document.getElementById('fphone').value = '';
    document.getElementById('femail').value = '';
    document.getElementById('fsubject').value = '';
    document.getElementById('fmessage').value = '';
  }, 4000);
}
