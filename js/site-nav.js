(function () {
  function setActiveLink() {
    var links = document.querySelectorAll('.top-nav__link');
    if (!links.length) {
      return;
    }
    var path = window.location.pathname.split('/').pop() || 'index.html';
    links.forEach(function (link) {
      var href = link.getAttribute('href');
      var isIndex = href === 'index.html' && (path === '' || path === 'index.html');
      if (href === path || isIndex) {
        link.classList.add('top-nav__link--active');
      } else {
        link.classList.remove('top-nav__link--active');
      }
    });
  }

  window.addEventListener('DOMContentLoaded', setActiveLink);
})();
