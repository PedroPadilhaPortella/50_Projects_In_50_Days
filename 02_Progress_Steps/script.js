const progress = document.getElementById('progress');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

nextButton.addEventListener('click', () => {
  if (currentActive < circles.length) currentActive++;
  updateDOM();
});

previousButton.addEventListener('click', () => {
  if (currentActive > 1) currentActive--;
  updateDOM();
});

function updateDOM() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const activeCircles = document.querySelectorAll('.active');
  const ProgressPercentage = ((activeCircles.length - 1) / (circles.length - 1)) * 100;
  progress.style.width = `${ProgressPercentage}%`;

  if (currentActive == 1) {
    previousButton.disabled = true;
  } else if (currentActive == circles.length) {
    nextButton.disabled = true;
  } else {
    previousButton.disabled = false;
    nextButton.disabled = false;
  }
}