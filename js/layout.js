/**
 * Shared header/footer — production site (no demo/proposal chrome).
 */
(function () {
  const base = document.body.getAttribute('data-base') || '';
  const b = (path) => (path.startsWith('http') ? path : base + path);

  const LOGO = b('assets/brand/logo.jpeg');
  const PHONE = '(503) 410-0422';
  const PHONE_TEL = '+15034100422';

  const nav = [
    { label: 'Home', href: 'index.html' },
    { label: 'About', href: 'about.html' },
    {
      label: 'Services',
      children: [
        { label: 'All Services', href: 'services/index.html' },
        { label: 'Installation', href: 'services/installation.html' },
        { label: 'Sanding & Refinishing', href: 'services/refinishing.html' },
        { label: 'Staining', href: 'services/staining.html' },
        { label: 'Repair', href: 'services/repair.html' },
        { label: 'Maintenance', href: 'services/maintenance.html' },
        { label: 'Custom Designs', href: 'services/custom-designs.html' },
        { label: 'Commercial', href: 'services/commercial.html' },
        { label: 'Residential', href: 'services/residential.html' },
      ],
    },
    { label: 'Projects', href: 'projects.html' },
    {
      label: 'Areas',
      children: [
        { label: 'All service areas', href: 'service-areas.html' },
        { label: 'Columbia County', href: 'areas/columbia-county.html' },
        { label: 'Cowlitz County', href: 'areas/cowlitz-county.html' },
        { label: 'Clatsop County', href: 'areas/clatsop-county.html' },
        { label: 'Multnomah County', href: 'areas/multnomah-county.html' },
        { label: 'Clark County', href: 'areas/clark-county.html' },
      ],
    },
    { label: 'Tools & Tips', href: 'blog/index.html' },
    { label: 'Our Values', href: 'our-values.html' },
    { label: 'Contact', href: 'contact.html' },
  ];

  function navHtml() {
    return nav
      .map((item) => {
        if (item.children) {
          const kids = item.children
            .map((c) => `<li><a href="${b(c.href)}">${c.label}</a></li>`)
            .join('');
          return `<li class="nav__item nav__item--has-sub">
            <button type="button" class="nav__parent" aria-expanded="false">${item.label}</button>
            <ul class="nav__sub">${kids}</ul>
          </li>`;
        }
        return `<li class="nav__item"><a href="${b(item.href)}">${item.label}</a></li>`;
      })
      .join('');
  }

  const header = `
    <header class="site-header" id="top">
      <div class="container site-header__inner">
        <a href="${b('index.html')}" class="site-logo">
          <img src="${LOGO}" alt="Local Guys Hardwood Flooring" width="56" height="56">
          <span class="site-logo__text">Local Guys Hardwood Flooring</span>
        </a>
        <a class="header-phone hide-mobile" href="tel:${PHONE_TEL}">${PHONE}</a>
        <button type="button" class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="site-nav">
          <span></span><span></span><span></span>
          <span class="sr-only">Menu</span>
        </button>
        <nav class="site-nav" id="site-nav" aria-label="Main">
          <ul class="nav__list">${navHtml()}</ul>
          <a class="btn btn--primary nav-cta" href="tel:${PHONE_TEL}">Call now</a>
        </nav>
      </div>
    </header>`;

  const footer = `
    <footer class="site-footer">
      <div class="site-footer__overlay"></div>
      <div class="container footer-grid">
        <div class="footer-brand">
          <div class="footer-logo-wrap">
            <img src="${LOGO}" alt="Local Guys Hardwood Flooring" width="72" height="72">
            <div>
              <p style="margin:0;font-weight:900;text-transform:uppercase;letter-spacing:0.06em;font-size:1rem;">Local Guys Hardwood Flooring</p>
              <p style="margin:0.25rem 0 0;opacity:0.85;font-size:0.85rem;">Since 2017 · OR &amp; WA</p>
            </div>
          </div>
          <p class="footer-tagline">Premium flooring services for Columbia, Cowlitz, Clatsop, Multnomah, and Clark Counties.</p>
        </div>
        <div>
          <h3>Office address</h3>
          <p>26742 Wonderly Rd<br>Rainier, OR 97048</p>
          <p><a href="tel:${PHONE_TEL}">${PHONE}</a></p>
          <p><a href="mailto:b.hadlock@localguysflooring.com">b.hadlock@localguysflooring.com</a></p>
        </div>
        <div>
          <h3>Quality services</h3>
          <p>CCB: 215089 · UBI: 604-544-841</p>
          <p>Oregon BIN: 01770411-0</p>
          <p>Washington UBI: 604-544-841</p>
        </div>
        <div>
          <h3>Business hours</h3>
          <dl class="hours-list">
            <div><dt>Mon – Fri</dt><dd>8:00 AM – 5:00 PM</dd></div>
            <div><dt>Saturday</dt><dd>Closed</dd></div>
            <div><dt>Sunday</dt><dd>Closed</dd></div>
          </dl>
        </div>
      </div>
      <div class="container footer-areas">
        <h3>Service areas</h3>
        <p>
          <a href="${b('areas/columbia-county.html')}">Columbia</a> ·
          <a href="${b('areas/cowlitz-county.html')}">Cowlitz</a> ·
          <a href="${b('areas/clatsop-county.html')}">Clatsop</a> ·
          <a href="${b('areas/multnomah-county.html')}">Multnomah</a> ·
          <a href="${b('areas/clark-county.html')}">Clark</a>
        </p>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <p>© ${new Date().getFullYear()} Local Guys Hardwood Flooring · Licensed, bonded &amp; insured</p>
        </div>
      </div>
    </footer>
    <a href="#top" class="back-to-top" id="back-to-top" aria-label="Back to top">↑</a>`;

  const h = document.getElementById('site-header');
  const f = document.getElementById('site-footer');
  if (h) h.innerHTML = header;
  if (f) f.innerHTML = footer;
})();
