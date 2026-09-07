(() => {
  const body = document.body;
  const menu = document.querySelector('.menu-button');
  if (menu) {
    menu.addEventListener('click', () => {
      const open = body.classList.toggle('nav-open');
      menu.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', (event) => {
      if (body.classList.contains('nav-open') && !event.target.closest('.sidebar') && !event.target.closest('.menu-button')) {
        body.classList.remove('nav-open');
        menu.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const current = body.dataset.page;
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.dataset.page === current) link.setAttribute('aria-current', 'page');
  });

  const nodes = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    nodes.forEach(node => node.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });
    nodes.forEach(node => observer.observe(node));
  }
})();

