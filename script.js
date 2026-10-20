(() => {
  const progress = document.getElementById('progress-bar');
  const backdrop = document.querySelector('.cinema-backdrop');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Progression globale et mouvement de caméra synchronisé au scroll.
  let ticking = false;
  const updateScrollScene = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progressValue = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
    if (progress) progress.style.width = progressValue + '%';

    if (backdrop && !reduceMotion) {
      const hero = document.querySelector('.cinema');
      const bounds = hero.getBoundingClientRect();
      const travel = Math.max(0, Math.min(1, -bounds.top / Math.max(1, bounds.height)));
      backdrop.style.transform = `scale(${1.04 + travel * 0.11}) translateY(${travel * 4}%)`;
    }
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollScene);
      ticking = true;
    }
  }, { passive: true });
  window.addEventListener('resize', updateScrollScene);
  updateScrollScene();

  // Révélation progressive des sections et projets.
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  // Navigation mobile accessible.
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
      menuButton.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Ouvrir le menu');
    }));
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();