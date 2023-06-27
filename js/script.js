const btnLogin = document.getElementById('btnLogin');
const emailForm = document.getElementById('emailForm');
const passwordForm = document.getElementById('passwordForm');
const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const charCount = document.getElementById('counter');
const textComments = document.getElementById('textarea');

btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  if (emailForm.value === 'tryber@teste.com' && passwordForm.value === '123456') {
    alert('Olá, Tryber!');
  }
  else {
    alert('Email ou senha inválidos.');
  }
});

agreement.addEventListener('click', () => {
  if (agreement.checked) {
    submitBtn.disabled = false;
  }
  else {
    submitBtn.disabled = true;
  }
});

textComments.addEventListener('keyup', () => {
  charCount.innerText = eval(500 - textComments.value.length);
  if (charCount.innerText <= parseInt(20)) {
    charCount.style.color = 'red';
  }
  else {
    charCount.style.color = 'black';
  }
});
