const magicButton = document.getElementById('magicButton');
const boxContainer = document.getElementById('boxes');

magicButton.addEventListener('click', () => boxes.classList.toggle('big'));

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxContainer.appendChild(box);
    }
  }
}

createBoxes();