formValidators = {
  'name': [],
  'email': []
}

function nameTest() {
  return 'name wrong'
}


validators['name'].push(nameTest);



function onEvent(event) {
  let validators = formValidators[event.target.getAttribute('name')];

  validators.map(validator => validator(event.target.value));
...
}