const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById('quiz');
const answersEl = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const submitButton = document.getElementById('submit');

const labelA = document.getElementById('labelA');
const labelB = document.getElementById('labelB');
const labelC = document.getElementById('labelC');
const labelD = document.getElementById('labelD');

let currentQuiz = 0;
let score = 0;

loadQuiz();


function loadQuiz() {
  deselectAnswers();
  removeAlertMessage();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  labelA.innerHTML = currentQuizData.a;
  labelB.innerHTML = currentQuizData.b;
  labelC.innerHTML = currentQuizData.c;
  labelD.innerHTML = currentQuizData.d;
}


function getSelectedAnswer() {
  let answer;

  answersEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}


function deselectAnswers() {
  answersEl.forEach((answerEl) => answerEl.checked = false);
}


submitButton.addEventListener('click', () => {
  const answer = getSelectedAnswer();

  if (answer) {
    if (answer == quizData[currentQuiz].correct) score++;
  } else {
    return showAlertMessage();
  }

  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `
      <h2>You answered ${score}/${quizData.length} questions correctly</h2>

      <button onclick="location.reload()">Reload</button>
    `;
  }
});


function showAlertMessage() {
  if (document.querySelector('.warning')) return;

  const message = document.createElement('span');
  message.textContent = 'Choose an answer before submit.';
  message.classList.add('warning');
  submitButton.parentNode.insertBefore(message, submitButton);
}

function removeAlertMessage() {
  const message = document.querySelector('.warning');
  if (message) {
    quiz.removeChild(message);
  }
}