/* ══════════════════════════════════════
   PORTFOLIO — Rasyida Nur
   script.js
══════════════════════════════════════ */

/* ── CUSTOM CURSOR ── */
const cur  = document.getElementById('cur');
const ring = document.getElementById('ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

(function animCursor() {
  rx += (mx - rx) * .15;
  ry += (my - ry) * .15;
  cur.style.left  = mx + 'px';
  cur.style.top   = my + 'px';
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animCursor);
})();

document.querySelectorAll('a, button, .tag, .proj-card, .skill-icon-card').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-big'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-big'));
});

/* ── NAV SCROLL ── */
const navEl = document.getElementById('nav');
window.addEventListener('scroll', () => {
  navEl.classList.toggle('scrolled', scrollY > 50);
  highlightNav();
});

/* ── MOBILE MENU ── */
function toggleMenu() {
  document.getElementById('ham').classList.toggle('open');
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMobile() {
  document.getElementById('ham').classList.remove('open');
  document.getElementById('mobileMenu').classList.remove('open');
}

/* ── SCROLL REVEAL ── */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

/* ── ACTIVE NAV LINK ── */
function highlightNav() {
  const ids = ['hero', 'about', 'skills', 'projects', 'contact'];
  let current = '';
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el && scrollY >= el.offsetTop - 130) current = id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    const isActive = a.getAttribute('href') === '#' + current;
    a.classList.toggle('active', isActive);
  });
}

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ── HERO PHOTO FALLBACK ── */
const heroImg = document.getElementById('heroImg');
if (heroImg) {
  heroImg.addEventListener('error', () => {
    heroImg.parentElement.innerHTML =
      '<div class="hero-photo-fallback">RN</div>';
  });
}

/* ── ABOUT PHOTO FALLBACK ── */
const aboutImg = document.getElementById('aboutImg');
if (aboutImg) {
  aboutImg.addEventListener('error', () => {
    aboutImg.style.display = 'none';
  });
}

/* ── CONTACT FORM ── */
function sendForm() {
  const name    = document.getElementById('fName').value.trim();
  const email   = document.getElementById('fEmail').value.trim();
  const subject = document.getElementById('fSubject').value.trim();
  const msg     = document.getElementById('fMsg').value.trim();

  if (!name || !email || !subject || !msg) {
    showToast('⚠ Mohon isi semua kolom!', '#c0392b');
    return;
  }

  const mailto = `mailto:rasyida@example.com`
    + `?subject=${encodeURIComponent(subject)}`
    + `&body=${encodeURIComponent('Dari: ' + name + '\nEmail: ' + email + '\n\n' + msg)}`;
  window.location.href = mailto;

  showToast('✓ Membuka email client...');
  ['fName', 'fEmail', 'fSubject', 'fMsg'].forEach(id => {
    document.getElementById(id).value = '';
  });
}

function showToast(msg, borderColor = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.borderColor = borderColor || 'var(--gold)';
  t.classList.add('show');
  setTimeout(() => {
    t.classList.remove('show');
    t.style.borderColor = '';
  }, 3500);
}