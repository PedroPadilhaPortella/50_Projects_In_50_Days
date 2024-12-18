const openButton = document.querySelector('button.open-btn');
const closeButton = document.querySelector('button.close-btn');
const nestedNavs = document.querySelectorAll('.nav');

openButton.addEventListener('click', () => {
  nestedNavs.forEach((nav) => nav.classList.add('visible'));
});

closeButton.addEventListener('click', () => {
  nestedNavs.forEach((nav) => nav.classList.remove('visible'));
});