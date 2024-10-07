const faqList = [
  {
    "question": "What is a microservice?",
    "answer": "A microservice is an architectural style where applications are structured as a collection of loosely coupled services, each responsible for a specific piece of functionality."
  },
  {
    "question": "What is .NET 6?",
    "answer": ".NET 6 is a unified development platform from Microsoft that supports building applications across multiple platforms, including web, desktop, mobile, cloud, and IoT."
  },
  {
    "question": "What is IdentityServer used for?",
    "answer": "IdentityServer is an OpenID Connect and OAuth 2.0 framework for ASP.NET Core that helps secure applications by managing authentication and authorization."
  },
  {
    "question": "What is the role of Ocelot in microservices?",
    "answer": "Ocelot is an API Gateway for .NET that provides a unified entry point for microservices, handling routing, aggregation, load balancing, and security features."
  },
  {
    "question": "What is OpenID Connect?",
    "answer": "OpenID Connect is an authentication protocol built on OAuth 2.0, allowing clients to verify the identity of users and obtain basic profile information in a secure way."
  },
  {
    "question": "How does React Router DOM work?",
    "answer": "React Router DOM is a library for routing in React applications. It enables dynamic routing based on the application's URL and is used to navigate between different components or views."
  },
  {
    "question": "What are the benefits of using microservices?",
    "answer": "Microservices provide better scalability, modular development, easier maintenance, independent deployment, and improved fault isolation, compared to monolithic architectures."
  },
  {
    "question": "How does Ocelot map routes to services?",
    "answer": "Ocelot maps incoming requests to downstream services by defining routes in its configuration. It forwards these requests to the appropriate service based on route configurations."
  },
  {
    "question": "How does OpenID Connect differ from OAuth 2.0?",
    "answer": "OAuth 2.0 is primarily an authorization protocol, while OpenID Connect extends OAuth 2.0 to provide authentication, allowing clients to verify user identity."
  },
  {
    "question": "What is an API Gateway?",
    "answer": "An API Gateway acts as a reverse proxy, routing requests from clients to various backend services. It provides a single point of entry for managing API services in microservice architectures."
  }
];

const createFaqWrapper = () => {
  const faqDivider = document.createElement('div');
  faqDivider.classList.add('faq');
  return faqDivider;
}

const createFaqQuestion = (question) => {
  const faqQuestion = document.createElement('h3');
  faqQuestion.classList.add('faq-question');
  faqQuestion.innerText = question;
  return faqQuestion;
}

const createFaqAnswer = (answer) => {
  const faqAnswer = document.createElement('p');
  faqAnswer.classList.add('faq-answer');
  faqAnswer.innerText = answer;
  return faqAnswer;
}

const createFaqToggle = () => {
  const chevronDownIcon = document.createElement('i')
  chevronDownIcon.classList.add('fas', 'fa-chevron-down');

  const chevronUpIcon = document.createElement('i')
  chevronUpIcon.classList.add('fas', 'fa-chevron-up');

  const faqToggle = document.createElement('button');
  faqToggle.classList.add('faq-toggle');

  faqToggle.appendChild(chevronDownIcon);
  faqToggle.appendChild(chevronUpIcon);

  faqToggle.addEventListener('click', () => {
    faqToggle.parentNode.classList.toggle('active');
  });

  return faqToggle;
}


const container = document.querySelector('.faq-container');

faqList.forEach((item) => {
  const faqWrapper = createFaqWrapper();
  const faqQuestion = createFaqQuestion(item.question);
  const faqAnswer = createFaqAnswer(item.answer);
  const faqToggle = createFaqToggle();

  faqWrapper.appendChild(faqQuestion);
  faqWrapper.appendChild(faqAnswer);
  faqWrapper.appendChild(faqToggle);

  container.appendChild(faqWrapper);
});