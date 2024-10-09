const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navBar');

toggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});