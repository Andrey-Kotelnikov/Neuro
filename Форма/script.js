const form = document.querySelector('.form');
const password = form.querySelector('#password');
const confirmPassword = form.querySelector('#confirmPassword');



form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  console.log('submit');

  
  if (password.value !== confirmPassword.value) {
    alert('пароли не совпадают');
  }
})