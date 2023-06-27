const btnLogin = document.getElementById('btnLogin');
const emailForm = document.getElementById('emailForm');
const passwordForm = document.getElementById('passwordForm');
const charCount = document.getElementById('counter');
const textComments = document.getElementById('textarea');

btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  if (emailForm.value === 'tryber@teste.com' && passwordForm.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

textComments.addEventListener('keyup', () => {
  charCount.innerText = (500 - textComments.value.length);
  if ((parseInt(charCount.innerText),10) <= 20) {
    charCount.style.color = 'red';
  } else {
    charCount.style.color = 'black';
  }
});
