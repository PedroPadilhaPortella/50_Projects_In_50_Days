const imageContainer = document.querySelector('.image-container');
const leftButton = document.querySelector('button#left');
const rightButton = document.querySelector('button#right');
const images = document.querySelectorAll('img');

let index = 0;

let interval = setInterval(run, 2000);

leftButton.addEventListener('click', () => {
  index--;
  changeImage();
  resetInterval();
});

rightButton.addEventListener('click', () => {
  index++;
  changeImage();
  resetInterval();
});

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

function run() {
  index++;
  changeImage();
}

function changeImage() {
  if (index > images.length - 1) {
    index = 0
  } else if (index < 0) {
    index = images.length - 1;
  }

  imageContainer.style.transform = `translateX(${-index * 500}px)`;
}