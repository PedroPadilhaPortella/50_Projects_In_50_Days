const toggles = document.querySelectorAll('.toggle');

const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

toggles.forEach((toggle) => toggle.addEventListener('change', (event) => doTheTrick(event.target)));

function doTheTrick(clickedToggle) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === clickedToggle) fast.checked = false;

    if (cheap === clickedToggle) good.checked = false;

    if (fast === clickedToggle) cheap.checked = false;
  }
}