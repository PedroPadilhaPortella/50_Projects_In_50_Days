const resetButton = document.getElementById('reset');
const playButton = document.getElementById('play');
const timerEl = document.getElementById('timer');
const root = document.querySelector(':root');

const alertSound = new Audio('/51_Simple_Timer/sounds/clock-alarm.mp3');

// Initial Setup
const totalSeconds = 60;
let playing = false;
let currentSeconds = totalSeconds;

timerEl.innerText = formatTime(totalSeconds);

const timerInterval = setInterval(run, 1000);

playButton.addEventListener('click', () => {
  playing = !playing;
  playButton.classList.toggle('play');
  playButton.classList.toggle('bg-green-500');
  const playIcon = playButton.querySelector('i');
  playIcon.classList.toggle('fa-play');
  playIcon.classList.toggle('fa-pause');
});

resetButton.addEventListener('click', resetAll);

// Run the timer
function run() {
  if (playing) {
    currentSeconds -= 1;
    if (currentSeconds <= 0) {
      alertSound.play();
      clearInterval(timerInterval);
      resetAll();
    }

    timerEl.innerText = formatTime(currentSeconds);
    root.style.setProperty('--degrees', calcDeg());
  }
}

// Format Time
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const newSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`;
}

// Calculate the degrees
function calcDeg() {
  return `${360 - (currentSeconds / totalSeconds) * 360}deg`;
}

function resetAll() {
  playing = false;

  playButton.classList.remove('play');
  playButton.classList.remove('bg-green-500');
  const playIcon = playButton.querySelector('i');
  playIcon.classList.remove('fa-pause');
  playIcon.classList.add('fa-play');

  currentSeconds = totalSeconds;
  timerEl.innerText = formatTime(totalSeconds);
  root.style.setProperty('--degrees', '0deg');
}