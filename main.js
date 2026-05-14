// ── Product Data ──────────────────────────────────────────────
// STRIPE REDIRECT SETUP:
// Each product's stripeLink should redirect to its own danke page after payment.
// In your Stripe Dashboard → Payment Links → (select link) → After payment:
//   - Product 1 (Affirmationen) → danke-affirmationen.html
//   - Product 2–5 (other single meditations) → danke.html?purchased_id=N
//   - Bundle → danke-bundle.html
// Alternatively, append ?success_url= to the Stripe link URL below (Checkout only).

const products = [
  {
    id: 1,
    title: 'Positive Affirmationen für den Alltag',
    subtitle: 'Verändere dein Denken – und damit dein Leben',
    tagline: 'Deine sanfte, tägliche Transformation für mehr Selbstwert und innere Stärke',
    price: '19,90 €',
    img: 'images/product4.jpg',
    // ↓ In Stripe Dashboard, set this link's success URL to: danke-affirmationen.html
    stripeLink: 'https://buy.stripe.com/9B6dR85WxeZcawre0cds400',
    dankeUrl: 'danke-affirmationen.html',
    desc: 'Positive Affirmationen – Deine tägliche Neuausrichtung. Jeder Gedanke formt deine Realität – beginne bewusst neu zu wählen. Nutze kraftvolle Affirmationen, um deinen Geist Schritt für Schritt neu auszurichten. Löse dich von alten, begrenzenden Mustern und öffne dich für neue Möglichkeiten. Integriere die Praxis ganz einfach in deinen Alltag – jederzeit und überall. Spüre, wie sich dein Denken verändert und dein Leben sich neu ausrichtet.',
    forWhom: [
      'oft negativ denkst oder dich selbst blockierst',
      'mehr Selbstvertrauen und innere Stärke willst',
      'dich emotional ruhiger und klarer fühlen möchtest',
      'dein Leben bewusst verändern willst',
      'dich neu ausrichten und wachsen möchtest'
    ],
    howToUse: [
      'täglich beim Spazieren, Autofahren oder Entspannen',
      'wiederholt – für nachhaltige Veränderung',
      'wann immer du dich neu ausrichten willst',
      'Je öfter du sie hörst, desto stärker verändert sich dein Denken'
    ],
    whyItWorks: [
      'Dein Geist ist formbar – Wiederholung prägt dein Unterbewusstsein',
      'verändert Denkgewohnheiten langfristig',
      'Gewohnheiten formen deine Realität',
      'wirkt mit jeder Anwendung tiefer'
    ],
    whatChanges: [
      'mehr innere Ruhe',
      'stärkeres Selbstwertgefühl',
      'klarere Gedanken und bessere Entscheidungen',
      'ein positiveres Lebensgefühl'
    ]
  },
  {
    id: 2,
    title: 'Fülle und Wohlstand',
    subtitle: 'Erschaffe bewusst deine Zukunft',
    tagline: 'Visualisiere dein Leben neu und verbinde dich mit deinem zukünftigen Selbst',
    price: '19,90 €',
    img: 'images/product1.jpg',
    stripeLink: 'STRIPE_PAYMENT_LINK_PLACEHOLDER',
    dankeUrl: 'danke.html?purchased_id=2',
    desc: 'Vollmond-Meditation – Deine bewusste Transformation. Du bist nicht hier, um dein Leben nur zu beobachten – du bist hier, um es neu zu erschaffen. Lass die Vergangenheit los und öffne dich für eine neue Geschichte, die du selbst schreibst. Aktiviere einen kraftvollen inneren Prozess, der deinem Leben eine klare Richtung gibt. Nutze die Energie des Vollmonds, um Stress, alte Spannungen und emotionale Lasten loszulassen. Spüre, wie Ruhe, Klarheit und Heilung in dir entstehen.',
    forWhom: [
      'dein Leben und deine Zukunft bewusst gestalten möchtest',
      'dich für Fülle, Wohlstand und neue Möglichkeiten öffnen möchtest',
      'dich von deiner Vergangenheit lösen willst',
      'mehr Vertrauen und Richtung im Leben willst',
      'dein volles Potenzial entfalten möchtest'
    ],
    howToUse: [
      'besonders kraftvoll in Vollmondphasen',
      '10 Tage hintereinander oder zu jedem Vollmond im Jahr',
      'regelmäßig wiederholen für tiefere Wirkung',
      'mit jeder Anwendung wird deine Vision klarer'
    ],
    whyItWorks: [
      'Deine Realität entsteht in deinem Inneren',
      'Visualisierung beeinflusst dein Unterbewusstsein',
      'Gedanken formen deine Entscheidungen',
      'Entscheidungen formen dein Leben'
    ],
    whatChanges: [
      'mehr Klarheit über deine Zukunft',
      'stärkere innere Ausrichtung und mehr Selbstvertrauen',
      'bewusste Entscheidungen',
      'ein Leben, das du wirklich willst'
    ]
  },
  {
    id: 3,
    title: 'Annahme',
    subtitle: 'Finde Frieden mit dir selbst – und hör auf zu kämpfen',
    tagline: 'Der Moment, in dem du dich selbst und die anderen annimmst, verändert alles',
    price: '19,90 €',
    img: 'images/product3.jpg',
    stripeLink: 'STRIPE_PAYMENT_LINK_PLACEHOLDER',
    dankeUrl: 'danke.html?purchased_id=3',
    desc: 'Meditation – Annahme & Transformation. Der Moment, in dem du aufhörst zu kämpfen – und beginnst, wirklich anzunehmen. Erlaube dir, dich selbst und dein Leben so zu sehen, wie es ist – ohne Widerstand. Tauche tiefer und erkenne: In der Annahme liegt der Beginn jeder echten Transformation. Löse innere Spannungen und finde zurück in einen Zustand von Ruhe und Klarheit. Öffne dich für Leichtigkeit, Vertrauen und das Gefühl von innerer Fülle.',
    forWhom: [
      'aufhören willst, gegen dich selbst zu kämpfen',
      'dich selbst wirklich annehmen möchtest',
      'lernen möchtest, auch andere und das Leben anzunehmen',
      'inneren Frieden und Ruhe suchst',
      'dich oft kritisierst oder zweifelst',
      'dich emotional leichter und freier fühlen willst'
    ],
    howToUse: [
      'finde einen ruhigen Moment – nur für dich',
      'lass dich bewusst führen und sinke tiefer in dich hinein',
      'kehre immer wieder zurück – jedes Mal öffnet sich eine neue Ebene',
      'wirkt am stärksten, wenn du dich bewusst darauf einlässt'
    ],
    whyItWorks: [
      'Veränderung beginnt nicht im Tun – sondern im Loslassen',
      'solange du kämpfst, bleibt Spannung in dir',
      'wenn du annimmst, entsteht Raum',
      'genau in diesem Raum beginnt echte Transformation'
    ],
    whatChanges: [
      'du hörst auf, gegen dich selbst zu kämpfen',
      'du findest zurück in inneren Frieden',
      'du siehst dich selbst mit mehr Liebe und Verständnis',
      'du lässt inneren Druck und Widerstand los',
      'du spürst, dass du einfach sein darfst'
    ]
  },
  {
    id: 4,
    title: 'Ernährungs-Meditation',
    subtitle: 'Dein Weg zu deinem idealen Körper beginnt von innen',
    tagline: 'Verändere deine Gewohnheiten, dein Denken – und dein Körper folgt',
    price: '19,90 €',
    img: 'images/product2.jpg',
    stripeLink: 'STRIPE_PAYMENT_LINK_PLACEHOLDER',
    dankeUrl: 'danke.html?purchased_id=4',
    desc: 'Ernährungs-Meditation – Körper & Selbstwert in Balance. Es geht nicht nur darum, wie du dich ernährst – sondern darum, wie du dich selbst behandelst. Löse alte Muster und beginne, deinen Körper bewusst und liebevoll zu nähren. Nutze die Kraft von Visualisierung und innerer Ruhe, um neue Gewohnheiten tief in dir zu verankern. Spüre, wie sich dein Verhältnis zu deinem Körper verändert – leichter, klarer, bewusster.',
    forWhom: [
      'dein Essverhalten nachhaltig verändern möchtest',
      'dein Wunschgewicht erreichen willst – ohne Kampf',
      'dich wieder wohl in deinem Körper fühlen möchtest',
      'aus alten Mustern ausbrechen willst',
      'dich selbst besser spüren und verstehen möchtest'
    ],
    howToUse: [
      'regelmäßig hören – in ruhigen Momenten oder vor dem Schlafen',
      'Veränderung entsteht durch Wiederholung',
      'am besten täglich oder mehrmals pro Woche'
    ],
    whyItWorks: [
      'Dein Verhalten entsteht in deinem Unterbewusstsein',
      'du lernst im Zustand tiefer Entspannung (Alpha-Zustand)',
      'neue Gewohnheiten werden innerlich verankert',
      'dein Denken und dein Verhalten verändern sich automatisch'
    ],
    whatChanges: [
      'bewussteres Essverhalten und mehr Kontrolle',
      'leichterer Umgang mit Ernährung',
      'mehr Energie und Wohlbefinden',
      'ein Körper, in dem du dich wohlfühlst'
    ]
  },
  {
    id: 5,
    title: 'Verbindung zu deiner Intuition',
    subtitle: 'Aktiviere deine Intuition – und entdecke die Antworten, die bereits in dir sind',
    tagline: 'Deine innere Stimme kennt den Weg. Du musst nur wieder lernen, sie zu hören.',
    price: '19,90 €',
    img: 'images/product5.jpg',
    stripeLink: 'STRIPE_PAYMENT_LINK_PLACEHOLDER',
    dankeUrl: 'danke.html?purchased_id=5',
    desc: 'Meditation zur Verbindung mit deiner Intuition. Öffne den Zugang zu deiner inneren Weisheit und beginne, deiner Intuition bewusst zu vertrauen. Tauche unter die Oberfläche des Alltags und finde den Ort in dir, an dem Klarheit entsteht. Löse dich von äußeren Einflüssen und verbinde dich wieder mit deiner eigenen Wahrheit. Spüre, wie mit jeder Minute dein Vertrauen wächst und deine innere Stimme klarer wird.',
    forWhom: [
      'dich mit deiner inneren Führung verbinden willst',
      'klare Entscheidungen treffen willst',
      'dich oft unsicher oder blockiert fühlst',
      'weniger im Kopf und mehr im Gefühl sein möchtest',
      'spüren möchtest, dass du getragen und geführt bist'
    ],
    howToUse: [
      'finde einen ruhigen Moment nur für dich',
      'lass dich vollständig darauf ein',
      'tauche jedes Mal ein Stück tiefer',
      'mit jeder Anwendung wird deine innere Stimme klarer'
    ],
    whyItWorks: [
      'du verlässt bewusst den Kopf und tauchst in deinen inneren Raum ein',
      'durch tiefe Entspannung erreichst du dein Unterbewusstsein',
      'Bilder und innere Welten öffnen den Zugang zu deiner Intuition',
      'du verbindest dich mit deinem Herzzentrum – dem Ort deiner inneren Wahrheit'
    ],
    whatChanges: [
      'mehr Klarheit in deinem Leben',
      'sichere, intuitive Entscheidungen',
      'weniger Zweifel und Grübeln',
      'tiefes Vertrauen in dich selbst',
      'das Gefühl, innerlich geführt zu sein'
    ]
  }
];

const BUNDLE_STRIPE_LINK = 'STRIPE_PAYMENT_LINK_PLACEHOLDER';
// Bundle success URL → danke-bundle.html (set in Stripe Dashboard)

// ── Navbar: transparent over hero, solid on scroll ───────────
const navbar = document.getElementById('navbar');
if (navbar) {
  const checkScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 60);
  checkScroll();
  window.addEventListener('scroll', checkScroll, { passive: true });
}

// ── Mobile burger menu ────────────────────────────────────────
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// ── Scroll reveal ─────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

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

// ── Stripe: open payment link ─────────────────────────────────
function openStripe(link, e) {
  e.preventDefault();
  if (!link || link === 'STRIPE_PAYMENT_LINK_PLACEHOLDER') {
    alert('Zahlung wird in Kürze aktiviert. Bitte versuche es später erneut.');
    return;
  }
  window.location.href = link;
}

// ── Bundle buy button ─────────────────────────────────────────
const bundleBtn = document.getElementById('bundle-buy-btn');
if (bundleBtn) {
  bundleBtn.addEventListener('click', (e) => openStripe(BUNDLE_STRIPE_LINK, e));
}

// ── Homepage product card buy buttons ────────────────────────
document.querySelectorAll('[data-product-id]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const id = parseInt(btn.dataset.productId);
    const prod = products.find(p => p.id === id);
    if (prod) openStripe(prod.stripeLink, e);
  });
});

// ── Product detail page ───────────────────────────────────────
if (document.querySelector('.product-page')) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id')) || 1;
  const prod = products.find(p => p.id === id) || products[0];

  // Meta
  document.getElementById('page-title').textContent = prod.title + ' – Göttinreise';

  // Hero info
  document.getElementById('prod-img').src = prod.img;
  document.getElementById('prod-img').alt = prod.title;
  document.getElementById('prod-title').textContent = prod.title;
  document.getElementById('prod-sub').textContent = prod.subtitle;
  document.getElementById('prod-tagline').textContent = prod.tagline;
  document.getElementById('prod-price').textContent = prod.price;

  // Buy button
  const buyBtn = document.getElementById('prod-buy-btn');
  if (buyBtn) {
    buyBtn.textContent = 'Jetzt kaufen – ' + prod.price;
    buyBtn.addEventListener('click', (e) => openStripe(prod.stripeLink, e));
  }

  // Description
  document.getElementById('prod-desc').textContent = prod.desc;

  // For whom
  renderList('prod-for-whom', prod.forWhom);
  renderList('prod-how-to-use', prod.howToUse);
  renderList('prod-why-works', prod.whyItWorks);
  renderList('prod-what-changes', prod.whatChanges);

  // Related products — exclude the current product AND any bundle items
  const grid = document.getElementById('related-products');
  if (grid) {
    products
      .filter(p => p.id !== id && !p.isBundle)
      .slice(0, 4)
      .forEach(p => {
      grid.innerHTML += `
        <div class="product-card reveal">
          <img src="${p.img}" alt="${p.title}" class="product-card-img" />
          <div class="product-card-body">
            <h3 class="product-card-title">${p.title}</h3>
            <p class="product-card-sub">${p.subtitle}</p>
            <p class="product-card-price">${p.price}</p>
            <a href="produkt.html?id=${p.id}" class="btn btn-secondary">Mehr erfahren</a>
          </div>
        </div>`;
    });
    // Re-observe new cards
    grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  // Accordion sections on product page
  document.querySelectorAll('.product-section-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const sec = btn.closest('.product-section');
      const isOpen = sec.classList.contains('open');
      document.querySelectorAll('.product-section').forEach(s => s.classList.remove('open'));
      if (!isOpen) sec.classList.add('open');
    });
  });
  // Open first section by default
  const firstSection = document.querySelector('.product-section');
  if (firstSection) firstSection.classList.add('open');
}

function renderList(id, items) {
  const el = document.getElementById(id);
  if (!el || !items) return;
  el.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}

// ── Newsletter form (MailerLite) ──────────────────────────────
const newsletterForm = document.getElementById('newsletter-form');
const newsletterSuccess = document.getElementById('newsletter-success');
if (newsletterForm && newsletterSuccess) {
  newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = newsletterForm.querySelector('.newsletter-btn');
    const emailInput = document.getElementById('newsletter-email');

    // Loading state
    if (btn) { btn.disabled = true; btn.textContent = '…'; }

    try {
      // POST to MailerLite — mode:'no-cors' is required because their endpoint
      // doesn't expose CORS headers. The response will be opaque but the data
      // is received on their side and confirmation is sent by email.
      const formData = new FormData(newsletterForm);
      await fetch(newsletterForm.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      // Fire the MailerLite tracking pixel (as their embed code does)
      fetch('https://assets.mailerlite.com/jsonp/2330743/forms/186931456507905264/takel');

    } catch (err) {
      // Silent — network errors are non-fatal; MailerLite sends email confirmation anyway
      console.warn('Newsletter submit error:', err);
    }

    // Show success & reset
    newsletterSuccess.textContent = '🌸 Danke für deine Anmeldung!';
    newsletterSuccess.classList.add('visible');
    if (emailInput) emailInput.value = '';
    if (btn) { btn.disabled = false; btn.textContent = 'Abonnieren'; }
  });
}


