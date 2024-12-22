const todosFormEl = document.getElementById('form');
const todosInputEl = document.getElementById('input');
const todoListEl = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

todosFormEl.addEventListener('submit', (event) => {
  event.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) todoText = todo.text;

  if (todoText) {
    const todoEl = document.createElement('li');

    if (todo && todo.completed) {
      todoEl.classList.add('completed');
    }

    todoEl.innerText = todoText;

    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed')
      updateStorage();
    });

    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      todoEl.remove();
      updateStorage();
    });

    todoListEl.appendChild(todoEl);
    todosInputEl.value = '';

    updateStorage();
  }
}

function updateStorage() {
  const todosEl = document.querySelectorAll('li');
  const todos = [];
  todosEl.forEach((todoEl) => {
    todos.push({ text: todoEl.innerText, completed: todoEl.classList.contains('completed') });
  });

  localStorage.setItem('todos', JSON.stringify(todos));
}