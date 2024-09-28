const container = document.querySelector('.container');
const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');

openButton.addEventListener('click', () => {
  container.classList.add('show-nav')
});

closeButton.addEventListener('click', () => {
  container.classList.remove('show-nav')
});