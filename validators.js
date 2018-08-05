const form = document.forms['first'],
      submitButton = form.elements.submitButton,
      bigLet = /^[A-ZА-Я]/,
      litlLet = /[a-zа-я]/,
      notSpace = /\S/,
      notDigital = /\D/,
      pass = /[0-9]{8,}/,
      twoNumb = /^(?:100|[1-9]\d|[1-9])$/;


const inputRules = {
  firstName: [bigLet, litlLet,  notSpace,  notDigital],
  secondName: [bigLet,litlLet,  notSpace,  notDigital],
  age: [twoNumb, notSpace],
  email: [litlLet, notSpace],
  password: [pass, notSpace]
};

const formFields = {
  firstName: false,
  secondName: false,
  age: false,
  email: false,
  password: false
};

form.addEventListener("input", function (event) {
  var fieldName = event.target.getAttribute('name');
  var value = event.target.value;
  var valid = true;

  inputRules[fieldName].forEach(function (element) {
    if (valid) {
      console.clear();
      console.log(value, element.test(value));
      valid = element.test(value);
      formFields[fieldName] = valid;
    }
  });

  validateForm();
});


function validateForm() {
  for(field in formFields) {
    if (formFields[field] === false) {
      submitButton.setAttribute('disabled', '');
    } else {
      submitButton.removeAttribute('disabled', '');
    }
  }

}
