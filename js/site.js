(function () {
  document.querySelectorAll('.reveal').forEach(function (el, i) {
    if (i % 3 === 1) el.classList.add('reveal-delay-1');
    if (i % 3 === 2) el.classList.add('reveal-delay-2');
  });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(function (el) {
      io.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('.nav__parent').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.nav__item--has-sub');
      var open = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  document.querySelectorAll('[data-accordion]').forEach(function (root) {
    root.querySelectorAll('.accordion__trigger').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var panel = document.getElementById(trigger.getAttribute('aria-controls'));
        var expanded = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        if (panel) panel.hidden = expanded;
      });
    });
  });

  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var img = document.getElementById('lightbox-img');
    var close = document.getElementById('lightbox-close');
    function openLb(src, alt) {
      img.src = src;
      img.alt = alt || '';
      lightbox.classList.add('is-open');
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
    }
    function closeLb() {
      lightbox.classList.remove('is-open');
      lightbox.hidden = true;
      img.src = '';
      document.body.style.overflow = '';
    }
    document.querySelectorAll('[data-lightbox]').forEach(function (el) {
      el.addEventListener('click', function () {
        openLb(el.getAttribute('data-lightbox') || el.querySelector('img').src, el.querySelector('img')?.alt);
      });
    });
    if (close) close.addEventListener('click', closeLb);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLb();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLb();
    });
  }

  var btt = document.getElementById('back-to-top');
  if (btt) {
    window.addEventListener(
      'scroll',
      function () {
        btt.classList.toggle('is-visible', window.scrollY > 400);
      },
      { passive: true }
    );
  }
})();
