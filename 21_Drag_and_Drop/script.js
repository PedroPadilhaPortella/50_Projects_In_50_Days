const emptyElements = document.querySelectorAll('.empty');
const fillElement = document.querySelector('.fill');

fillElement.addEventListener('dragstart', dragStart);
fillElement.addEventListener('dragend', dragEnd);

for (const emptyElement of emptyElements) {
  emptyElement.addEventListener('dragover', dragOver);
  emptyElement.addEventListener('dragenter', dragEnter);
  emptyElement.addEventListener('dragleave', dragLeave);
  emptyElement.addEventListener('drop', dragDrop);
}

function dragStart() {
  this.className += ' hold';
  setTimeout(() => {
    this.className = 'invisible';
  }, 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fillElement);
}