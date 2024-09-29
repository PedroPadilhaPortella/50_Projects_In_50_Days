const searchContainer = document.querySelector('.search');
const searchButton = document.querySelector('.btn');
const searchInput = document.querySelector('.input');


searchButton.addEventListener('click', () => {
  searchContainer.classList.toggle('active');
  searchInput.focus();
})