const numbers = document.querySelectorAll('.numbers span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replayButton = document.getElementById('replay');

runAnimation();

replayButton.addEventListener('click', () => {
  resetDOM();
  runAnimation();
});

function resetDOM() {
  counter.classList.remove('hide');
  finalMessage.classList.remove('show');
  numbers.forEach((numberItem) => {
    numberItem.classList.value = '';
  });
  numbers[0].classList.add('in');
}

function runAnimation() {
  numbers.forEach((numberItem, index) => {
    const nextToLast = numbers.length - 1;

    numberItem.addEventListener('animationend', (event) => {
      if (event.animationName == 'goIn' && index !== nextToLast) {
        numberItem.classList.remove('in');
        numberItem.classList.add('out');
      } else if (event.animationName == 'goOut' && numberItem.nextElementSibling) {
        numberItem.nextElementSibling.classList.add('in');
      } else {
        counter.classList.add('hide');
        finalMessage.classList.add('show');
      }
    });
  });
}