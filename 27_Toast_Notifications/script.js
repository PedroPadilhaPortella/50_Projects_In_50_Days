const configurations = {
  type: 'Success',
  position: 'Top and Left',
  timeout: 'Fixed',
  message: '',
  showCloseButton: false,
}

const toastTypes = {
  'Success': 'toast-success',
  'Info': 'toast-info',
  'Warning': 'toast-warning',
  'Danger': 'toast-danger',
}

const toastPositions = {
  'Top and Left': ['toast-top', 'toast-left'],
  'Top and Right': ['toast-top', 'toast-right'],
  'Bottom and Left': ['toast-bottom', 'toast-left'],
  'Bottom and Right': ['toast-bottom', 'toast-right'],
}

const toastTimeout = {
  'Fixed': 'fixed',
  '2 secs': 2000,
  '5 secs': 5000,
  '10 secs': 10000,
}

/** Set Toast Type */
const toastTypeButtons = document.querySelectorAll('[data-type="toast-type"]');

toastTypeButtons.forEach((toastTypeButton) => {
  toastTypeButton.addEventListener('click', setToastType);
});

function setToastType() {
  toastTypeButtons.forEach((btn) => btn.classList.remove('btn-selected'));
  this.classList.add('btn-selected');
  configurations.type = this.innerText;
}

/** Set Toast Position */
const toastPositionButtons = document.querySelectorAll('[data-type="toast-position"]');

toastPositionButtons.forEach((toastPositionButton) => {
  toastPositionButton.addEventListener('click', setToastPosition);
});

function setToastPosition() {
  toastPositionButtons.forEach((btn) => btn.classList.remove('btn-selected'));
  this.classList.add('btn-selected');
  configurations.position = this.innerText;
}

/** Set Toast Timeout */
const toastTimeoutButtons = document.querySelectorAll('[data-type="toast-timeout"]');

toastTimeoutButtons.forEach((toastTimeoutButton) => {
  toastTimeoutButton.addEventListener('click', setToastTimeout);
});

function setToastTimeout() {
  toastTimeoutButtons.forEach((btn) => btn.classList.remove('btn-selected'));
  this.classList.add('btn-selected');
  configurations.timeout = this.innerText;
}

/** Set Toast Close Button */
const showCloseButton = document.getElementById('showCloseButtonCheckbox');
showCloseButton.addEventListener('change', setToastCloseButton);

function setToastCloseButton() {
  configurations.showCloseButton = this.checked;
}


/** Set Toast Message */
const toastMessageInput = document.getElementById('toastMessage');
toastMessageInput.addEventListener('input', setToastMessage);

function setToastMessage(event) {
  configurations.message = event.target.value;
}


/** Display Toast */
const showToastButton = document.getElementById('showToast');
const body = document.querySelector('body');

showToastButton.addEventListener('click', createNotifications);

function createNotifications() {
  const toast = document.createElement('div');
  toast.classList.add('toast', toastTypes[configurations.type]);
  toastPositions[configurations.position].forEach((position) => toast.classList.add(position));
  toast.innerText = configurations.message;

  if (configurations.showCloseButton || isNaN(toastTimeout[configurations.timeout])) {
    toast.appendChild(addCloseIcon());
  }

  body.appendChild(toast);

  if (!isNaN(toastTimeout[configurations.timeout])) {
    setTimeout(() => {
      body.removeChild(toast);
    }, toastTimeout[configurations.timeout]);
  }
}

function addCloseIcon(toast) {
  const closeIcon = document.createElement('i');
  closeIcon.addEventListener('click', () => {
    body.removeChild(closeIcon.parentElement);
  })
  closeIcon.classList.add('fas', 'fa-times');
  return closeIcon;
}
