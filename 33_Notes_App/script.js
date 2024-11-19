const addButton = document.getElementById('add');

addButton.addEventListener('click', () => addNewNote());

const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
  notes.forEach((note) => addNewNote(note));
}

function addNewNote(text = '') {
  const note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = `
  <div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash"></i></button>
  </div>
  <div class="main ${text ? '' : 'hidden'}"></div>
  <textarea class="${text ? 'hidden' : ''}"></textarea>
  `;

  const editButton = note.querySelector('.edit');
  const deleteButton = note.querySelector('.delete');
  const main = note.querySelector('.main');
  const textarea = note.querySelector('textarea');

  textarea.value = text;
  main.innerHTML = marked.parse(text);

  deleteButton.addEventListener('click', () => {
    note.remove();
    updateLocalStorage();
  });

  editButton.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
  });

  textarea.addEventListener('input', (event) => {
    const { value } = event.target;
    main.innerHTML = marked.parse(value);
    updateLocalStorage();
  })

  document.body.appendChild(note);
}

function updateLocalStorage() {
  const notesText = document.querySelectorAll('textarea');
  const notes = [];

  notesText.forEach((noteText) => notes.push(noteText.value));

  localStorage.setItem('notes', JSON.stringify(notes));
}