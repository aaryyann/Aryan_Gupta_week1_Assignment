const form = document.getElementById('contactForm');
const thankYouMessage = document.getElementById('thankYouMessage');
const resetButton = document.getElementById('resetButton');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  let isValid = true;

  if (name === '') {
    showError('name', 'Name is required');
    isValid = false;
  } else {
    hideError('name');
  }

  if (email === '') {
    showError('email', 'Email is required');
    isValid = false;
  } else if (!email.includes('@') || !email.includes('.')) {
    showError('email', 'Please enter a valid email');
    isValid = false;
  } else {
    hideError('email');
  }

  if (subject === '') {
    showError('subject', 'Subject is required');
    isValid = false;
  } else {
    hideError('subject');
  }

  if (message === '') {
    showError('message', 'Message is required');
    isValid = false;
  } else {
    hideError('message');
  }

  if (isValid) {
    form.classList.add('hidden');
    thankYouMessage.classList.remove('hidden');
  }
});

function showError(fieldId, message) {
  const input = document.getElementById(fieldId);
  const error = input.nextElementSibling;
  error.textContent = message;
  error.classList.remove('hidden');
  input.classList.add('border-red-500');
}

function hideError(fieldId) {
  const input = document.getElementById(fieldId);
  const error = input.nextElementSibling;
  error.textContent = '';
  error.classList.add('hidden');
  input.classList.remove('border-red-500');
}

resetButton.addEventListener('click', function () {
  form.reset();
  thankYouMessage.classList.add('hidden');
  form.classList.remove('hidden');

  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(function (error) {
    error.classList.add('hidden');
  });

  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(function (input) {
    input.classList.remove('border-red-500');
  });
});
