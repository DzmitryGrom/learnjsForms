(function () {

  'use strict'

  const firstForm = document.forms['first'],
        inputs = document.querySelectorAll('input'),
        firstNameInput = firstForm.elements.firstName,
        secondNameInput = firstForm.elements.secondName,
        ageInput = firstForm.elements.age,
        i = [],
        emailInput = firstForm.elements.email,
        passwordInput = firstForm.elements.password,
        submitButton = firstForm.elements.submitButton,
        lettersRegexp = /^[A-ZА-Яа-яa-z]+$/,
        ageRegexp = /\d/,
        passwordRegexp = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  firstForm.addEventListener('input', event => {

    const val = event.target.value,
          id = event.target.id;

    for(let i = 0; i < inputs.length; i++) {
      if(inputs[i].value === '') {
        submitButton.setAttribute('disabled', '');
      } else {
        submitButton.removeAttribute('disabled', '');
      }
    }

    switch (id) {

      case 'email':

          if (emailRegexp.test(val)) {
            emailInput.classList.remove('error');
            emailInput.classList.add('valid');
          } else if (val === ''){
            event.target.nextElementSibling.innerText = '';
            event.target.nextElementSibling.innerText = 'enter the data';
            event.target.classList.add('error');
            emailInput.classList.remove('valid');
            submitButton.setAttribute('disabled', '');
          } else {
            emailInput.classList.add('error');
            emailInput.classList.remove('valid');
            event.target.nextElementSibling.innerText = '';
            event.target.nextElementSibling.innerText = 'wrong email';
            submitButton.setAttribute('disabled', '');
          }

          break;

      case 'firstName':

          if (lettersRegexp.test(val)) {
            firstNameInput.classList.remove('error');
            firstNameInput.classList.add('valid');
          } else if (val === ''){
            event.target.nextElementSibling.innerText = '';
            event.target.nextElementSibling.innerText = 'enter the data';
            event.target.classList.add('error');
            firstNameInput.classList.remove('valid');
            submitButton.setAttribute('disabled', '');
          } else {
            firstNameInput.classList.add('error');
            firstNameInput.classList.remove('valid');
            event.target.nextElementSibling.innerText = '';
            event.target.nextElementSibling.innerText = 'wrong first name';
            submitButton.setAttribute('disabled', '');
          }

          break;

      case 'secondName':

          if (lettersRegexp.test(val)) {
            secondNameInput.classList.remove('error');
            secondNameInput.classList.add('valid');
          } else if (val === ''){
            event.target.nextElementSibling.innerText = '';
            event.target.nextElementSibling.innerText = 'enter the data';
            event.target.classList.add('error');
            secondNameInput.classList.remove('valid');
            submitButton.setAttribute('disabled', '');
          } else {
            secondNameInput.classList.add('error');
            secondNameInput.classList.remove('valid');
            event.target.nextElementSibling.innerText = '';
            event.target.nextElementSibling.innerText = 'wrong second name';
            submitButton.setAttribute('disabled', '');
          }

          break;

      case 'age':

          if (ageRegexp.test(val)) {
            age.classList.remove('error');
            age.classList.add('valid');
          } else if (val === ''){
            event.target.nextElementSibling.innerText = '';
            event.target.nextElementSibling.innerText = 'enter the data';
            event.target.classList.add('error');
            age.classList.remove('valid');
            submitButton.setAttribute('disabled', '');
          } else {
            age.classList.add('error');
            age.classList.remove('valid');
            event.target.nextElementSibling.innerText = '';
            event.target.nextElementSibling.innerText = 'wrong age';
            submitButton.setAttribute('disabled', '');
          }

          break;

      case 'password':

          if (passwordRegexp.test(val)) {
            password.classList.remove('error');
            password.classList.add('valid');
          }  else if (val === ''){
            event.target.nextElementSibling.innerText = '';
            event.target.nextElementSibling.innerText = 'enter the data';
            event.target.classList.add('error');
            password.classList.remove('valid');
            submitButton.setAttribute('disabled', '');
          } else {
            password.classList.add('error');
            password.classList.remove('valid');
            event.target.nextElementSibling.innerText = '';
            event.target.nextElementSibling.innerText = 'wrong password';
            submitButton.setAttribute('disabled', '');
          }

          break;

    }

  });

})();