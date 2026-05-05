// ── Product Data ──────────────────────────────────────────────
const products = [
  {
    id: 1,
    title: 'Positive Affirmationen für den Alltag',
    sub: 'Geführte Meditation zur Stärkung deiner inneren Kraft & Selbstvertrauen',
    img: 'images/product1.jpg',
    desc: 'Stärke dein Selbstvertrauen und deine innere Kraft mit dieser kraftvollen Affirmations-Meditation. Durch sanft geführte Visualisierungen und positive Glaubenssätze programmierst du dein Unterbewusstsein für Erfolg, Freude und innere Stärke – jeden Tag neu.'
  },
  {
    id: 2,
    title: 'Ich liebe und ehre mich selbst',
    sub: 'Geführte Meditation für Selbstachtung & innere Würde',
    img: 'images/product2.jpg',
    desc: 'Tauche ein in die tiefe Kraft der Selbstliebe. Finde Ruhe, Klarheit und eine tiefe Verbindung zu deinem wahren Selbst. Diese Meditation befreit dich von Selbstzweifeln und öffnet dein Herz für bedingungslose Selbstakzeptanz und innere Würde.'
  },
  {
    id: 3,
    title: 'Fülle und Wohlstand',
    sub: 'Geführte Neumond-Meditation zur Aktivierung von Fülle & Wohlstand',
    img: 'images/product3.jpg',
    desc: 'Nutze die transformative Kraft des Neumondes, um deine Manifestationskraft zu aktivieren. Diese Meditation öffnet deinen Energiekanal für Fülle, Wohlstand und Dankbarkeit – damit du im Einklang mit dem universellen Fluss des Lebens lebst.'
  },
  {
    id: 4,
    title: 'Ernährungs-Meditation',
    sub: 'Geführte Meditation: Dein Weg zum idealen Körper',
    img: 'images/product4.jpg',
    desc: 'Verändere deine Beziehung zum Essen und zu deinem Körper durch tiefgreifende Meditationsarbeit. Entwickle ein gesundes, liebevolles Verhältnis zu dir selbst und lerne, auf die natürlichen Signale deines Körpers zu hören – für ein Leben in Balance.'
  },
  {
    id: 5,
    title: 'Verbinde dich wieder mit deiner Intuition',
    sub: 'Geführte Meditation zur Verbindung mit deiner inneren Stimme und weibliche Klarheit',
    img: 'images/product5.jpg',
    desc: 'Entdecke die kraftvolle innere Stimme, die immer für dich da ist. Diese Meditation hilft dir, den Lärm des Alltags loszulassen und in tiefe Verbindung mit deiner weiblichen Intuition und inneren Klarheit zu treten – dein verlässlichster Kompass.'
  }
];

// ── Navbar scroll effect ──────────────────────────────────────
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ── Mobile burger menu ────────────────────────────────────────
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ── Scroll reveal ─────────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

// ── FAQ accordion ─────────────────────────────────────────────
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
    btn.setAttribute('aria-expanded', !isOpen);
  });
});

// ── Product page dynamic content ─────────────────────────────
if (document.querySelector('.product-page')) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id')) || 1;
  const prod = products.find(p => p.id === id) || products[0];

  document.getElementById('page-title').textContent = prod.title + ' – Göttinreise';
  document.getElementById('prod-img').src = prod.img;
  document.getElementById('prod-img').alt = prod.title;
  document.getElementById('prod-title').textContent = prod.title;
  document.getElementById('prod-sub').textContent = prod.sub;
  document.getElementById('prod-desc').textContent = prod.desc;

  // Related products (all except current)
  const grid = document.getElementById('related-products');
  if (grid) {
    products.filter(p => p.id !== id).slice(0, 4).forEach(p => {
      grid.innerHTML += `
        <div class="product-card">
          <img src="${p.img}" alt="${p.title}" class="product-card-img" />
          <div class="product-card-body">
            <h3 class="product-card-title">${p.title}</h3>
            <p class="product-card-sub">${p.sub}</p>
            <p class="product-card-price">29,00 €</p>
            <a href="produkt.html?id=${p.id}" class="btn btn-secondary">MEHR ERFAHREN</a>
          </div>
        </div>`;
    });
  }
}

// ── Add to cart feedback ──────────────────────────────────────
const cartBtn = document.getElementById('add-to-cart-btn');
if (cartBtn) {
  cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const orig = cartBtn.textContent;
    cartBtn.textContent = '✓ HINZUGEFÜGT!';
    cartBtn.style.background = 'var(--magenta-dark)';
    setTimeout(() => {
      cartBtn.textContent = orig;
      cartBtn.style.background = '';
    }, 2000);
  });
}

const bundleBtn = document.getElementById('bundle-buy-btn');
if (bundleBtn) {
  bundleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const orig = bundleBtn.textContent;
    bundleBtn.textContent = '✓ IN DEN WARENKORB!';
    bundleBtn.style.background = 'var(--magenta-dark)';
    setTimeout(() => {
      bundleBtn.textContent = orig;
      bundleBtn.style.background = '';
    }, 2000);
  });
}
