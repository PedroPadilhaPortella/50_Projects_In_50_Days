const screens = document.querySelectorAll('.screen');
const chooseInsectButtons = document.querySelectorAll('.choose-insect-btn');
const startButton = document.getElementById('start-btn');
const gameContainer = document.getElementById('game-container');

const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.getElementById('message');

let seconds = 0
let score = 0
let selectedInsect = {}

startButton.addEventListener('click', () => screens[0].classList.add('up'));

chooseInsectButtons.forEach((chooseInsectButton) => {
  chooseInsectButton.addEventListener('click', (e) => {
    const img = chooseInsectButton.querySelector('img');
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');

    selectedInsect = { src, alt };

    screens[1].classList.add('up');

    setTimeout(createInsect, 1000);

    startGame();
  });
});


function startGame() {
  setInterval(increaseTime, 1000);
}

function createInsect() {
  const insect = document.createElement('div');
  insect.classList.add('insect');
  const { x, y } = getRandomLocation();
  insect.style.top = `${y}px`;
  insect.style.left = `${x}px`;
  insect.innerHTML = `
    <img 
      src="${selectedInsect.src}" 
      alt="${selectedInsect.alt}" 
      style="transform: rotate(${Math.random() * 360}deg)"
    />
  `;

  insect.addEventListener('click', catchInsect);
  gameContainer.appendChild(insect);
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
}

function catchInsect() {
  increaseScore();
  this.classList.add('caught');
  setTimeout(() => this.remove(), 2000);
  addInsects();
}

function addInsects() {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
}

function increaseTime() {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEl.innerHTML = `Time: ${m}:${s}`;
  seconds++
}

function increaseScore() {
  score++;
  if (score > 50) message.classList.add('visible');
  scoreEl.innerHTML = `Score: ${score}`;
}