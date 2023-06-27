const btnLogin = document.getElementById('btnLogin');
const emailForm = document.getElementById('emailForm');
const passwordForm = document.getElementById('passwordForm');
const charCount = document.getElementById('counter');
const textComments = document.getElementById('textarea');
const btnSubmit = document.getElementById('submit-btn');
const checkBox = document.getElementById('agreement');

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
  if (Number(charCount.innerText) <= 20) {
    charCount.style.color = 'red';
  } else {
    charCount.style.color = 'black';
  }
});

checkBox.addEventListener('change', () => {
  if(checkBox.checked === false) {
    btnSubmit.disabled =true;
  } else {
    btnSubmit.disabled = false;
}
});
