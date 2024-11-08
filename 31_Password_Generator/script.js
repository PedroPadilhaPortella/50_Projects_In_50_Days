const resultEl = document.getElementById('result');

const lengthInput = document.getElementById('length');
const uppercaseInput = document.getElementById('uppercase');
const lowercaseInput = document.getElementById('lowercase');
const numbersInput = document.getElementById('numbers');
const symbolsInput = document.getElementById('symbols');

const generateButton = document.getElementById('generate');
const clipboardButton = document.getElementById('clipboard');

const randomFunctions = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

generateButton.addEventListener('click', () => {
  const length = +lengthInput.value;
  const upper = uppercaseInput.checked;
  const lower = lowercaseInput.checked;
  const number = numbersInput.checked;
  const symbol = symbolsInput.checked;

  resultEl.innerText = generatePassword(length, upper, lower, number, symbol);
});

clipboardButton.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEl.innerText;

  if (!password) return;

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard');
});

function generatePassword(length, upper, lower, number, symbol) {
  const typesCount = upper + lower + number + symbol;
  let password = '';

  const typesArr = [{ lower }, { upper }, { number }, { symbol }]
    .filter(item => Object.values(item)[0]);

  if (typesCount == 0) return '';

  for (let i = 0; i < length; i++) {

    const randomType = Object.keys(typesArr[Math.floor(Math.random() * typesArr.length)]);
    password += randomFunctions[randomType]();

    // typesArr.forEach((type) => {
    //   const functionName = Object.keys(type)[0];
    //   password += randomFunctions[functionName]();
    // });
  }

  return password;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%&+-*/=<>,._';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
