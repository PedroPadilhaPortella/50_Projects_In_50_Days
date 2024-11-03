const API_URL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const user = search.value;

  if (user) {
    getUser(user);
    search.value = '';
  }
});

async function getUser(username) {
  try {
    const { data } = await axios(API_URL + username);
    createUserCard(data);
    getRepos(username);
  } catch (error) {
    if (error.response.status == 404) {
      createErrorCard('No profile with this username');
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(API_URL + username + '/repos?sort=created');
    addReposToCard(data);
  } catch (error) {
    console.warn(error);
    createErrorCard('Problem fetching repositories');
  }
}

function createUserCard(user) {
  const userId = user.name || user.login;
  const userBio = user.bio ? `<p>${user.bio}</p>` : '';

  const cardHtml = `
  <div class="card">
    <div>
      <img class="avatar" src="${user.avatar_url}" alt="${user.name}">
    </div>
    <div class="user-info">
      <h2>${userId}</h2>
      <p>${userBio}</p>

      <ul>
        <li>${user.followers} <strong>followers</strong></li>
        <li>${user.following} <strong>following</strong></li>
        <li>${user.public_repos} <strong>repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
  `;

  main.innerHTML = cardHtml;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos');

  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement('li');
    repoEl.classList.add('repo');
    repoEl.href = repo.html_url;
    repoEl.target = '_blank';
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });
}

function createErrorCard(message) {
  const errorCardEl = `
  <div class="card">
      <h1>${message}</h1>
  </div>
  `;
  main.innerHTML = errorCardEl
}