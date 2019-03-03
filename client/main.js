(function () {
  const CLASS_OPEN = 'open';
  const CLASS_PREPARE_OPEN = 'prepare-open';

  function updateClass(time, cb) {
    setTimeout(() => {
      requestAnimationFrame(() => {
        cb();
      });
    }, time);
  }

  const menu = document.querySelector('.burger-menu');
  const cookieBtn = document.querySelector('.cookie-button');
  const cookiePopup = document.querySelector('.cookie-popup');

  menu.addEventListener('click', () => {
    const pages = document.querySelector('.pages-container');

    if (pages.classList.contains(CLASS_OPEN)) {
      pages.classList.remove(CLASS_OPEN);

      updateClass(300, () => pages.classList.remove(CLASS_PREPARE_OPEN));
    } else {
      pages.classList.add(CLASS_PREPARE_OPEN);

      updateClass(0, () => pages.classList.add(CLASS_OPEN));
    }
  });

  cookieBtn.addEventListener('click', () => {
    localStorage.setItem('io.22px.cookieAccepted', 'yes');
    cookiePopup.style.setProperty('display', 'none', '');
  });

  cookiePopup.style.setProperty(
    'display',
    localStorage.getItem('io.22px.cookieAccepted') ? 'none' : 'block',
    ''
  );
}());
