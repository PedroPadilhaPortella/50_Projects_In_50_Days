const messageEl = document.getElementById('message');
const speedEl = document.getElementById('speed');
const textEl = document.getElementById('text');

let text = messageEl.value;
let speed = 300 / speedEl.value
let index = 0;

console.log(speed)

writeText();

messageEl.addEventListener('input', (event) => text = event.target.value);

speedEl.addEventListener('input', (event) => speed = 300 / event.target.value);

function writeText() {
  textEl.innerText = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 1;
  }

  setTimeout(writeText, speed);
}