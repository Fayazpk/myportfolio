  function showPage(name) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + name).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'instant' });
    initReveal();
  }
  function initReveal() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 80);
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
  }
  initReveal();
