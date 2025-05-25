document.addEventListener('DOMContentLoaded', () => {
  // 1) Menu hamburger (mobile portrait)
  const navToggle = document.querySelector('.nav-toggle');
  const navUl     = document.querySelector('header nav ul');

  if (navToggle && navUl) {
    navToggle.addEventListener('click', () => {
      navUl.classList.toggle('open');
      navToggle.classList.toggle('open');
    });
  }

  // 2) Sections cliquables sur mobile portrait
  //    (permet d'afficher le contenu .section-content au clic)
    const isMobile = window.matchMedia('(max-width: 480px)');
  if (isMobile.matches) {
    document.querySelectorAll('.section').forEach(section => {
      section.addEventListener('click', () => {
        const content = section.nextElementSibling;
        if (content && content.classList.contains('section-content')) {
          content.classList.toggle('open'); // 👉 toggle au clic
        }
      });
    });
  }

  // Bonus : réagir au redimensionnement pour binder/débinder le clic
  mediaMobilePortrait.addEventListener('change', e => {
    // on pourrait recharger la page ou ajuster dynamiquement
    window.location.reload();
  });
});
