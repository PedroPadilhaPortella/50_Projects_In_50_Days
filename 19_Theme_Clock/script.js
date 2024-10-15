const toggleButton = document.querySelector('.toggle');
const minutesElement = document.querySelector('.minute');
const secondsElement = document.querySelector('.second');
const hoursElement = document.querySelector('.hour');
const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggleButton.addEventListener('click', (event) => {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    toggleButton.innerHTML = 'Dark Mode';
  } else {
    html.classList.add('dark');
    toggleButton.innerHTML = 'Light Mode';
  }
});


function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hoursElement.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
  minutesElement.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
  secondsElement.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

  timeElement.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
  dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000);