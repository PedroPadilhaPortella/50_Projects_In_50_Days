const navbar = document.querySelector('nav.nav');

window.addEventListener('scroll', fixNavbar);

function fixNavbar() {
  if (window.scrollY > navbar.offsetHeight + 150) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
}