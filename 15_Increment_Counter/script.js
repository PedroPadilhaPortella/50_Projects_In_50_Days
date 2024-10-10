const stats = [
  { description: 'Twitter Followers', icon: 'twitter', stats: '12000' },
  { description: 'Youtube Subscribers', icon: 'youtube', stats: '9300' },
  { description: 'Facebook Fans', icon: 'facebook', stats: '11600' }
];

createCounter();

incrementCounter();

function createCounter() {
  stats.forEach((stat) => {

    // Create Counter Container
    const counterContainer = document.createElement('div');
    counterContainer.classList.add('counter-container');

    // Create Counter Icon
    const counterIcon = document.createElement('i');
    counterIcon.classList.add('fab', `fa-${stat.icon}`, 'fa-3x');

    // Create Counter Span
    const counterSpan = document.createElement('span');
    counterSpan.innerText = stat.description;

    // Create Counter
    const counter = document.createElement('div');
    counter.classList.add('counter');
    counter.dataset.target = stat.stats;
    counter.innerText = '0';

    // Append all to Counter Container and then, to body
    counterContainer.appendChild(counterIcon);
    counterContainer.appendChild(counter);
    counterContainer.appendChild(counterSpan);

    const body = document.querySelector('body');
    body.appendChild(counterContainer);

  });
}

function incrementCounter() {
  const counters = document.querySelectorAll('.counter');

  counters.forEach((counter) => {
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const c = +counter.innerText;
      const increment = target / 100;

      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 10);
      } else {
        counter.innerText = target;
      }
    }

    updateCounter();
  });
}
