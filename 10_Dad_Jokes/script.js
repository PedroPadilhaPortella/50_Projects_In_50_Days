const jokeButton = document.getElementById('jokeButton');
const jokeEl = document.getElementById('joke');

jokeButton.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
  const config = { headers: { Accept: 'application/json' } };
  const response = await fetch('https://icanhazdadjoke.com', config);
  const data = await response.json();
  jokeEl.innerHTML = data.joke;
}