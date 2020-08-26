const inputField = (labelName, fieldType) => {
  const input = document.createElement('input');
  input.setAttribute('name', labelName);
  input.setAttribute('type', fieldType);
  input.setAttribute('placeholder', labelName);
  input.setAttribute('minLength', 3);
  input.required = true;
  return input;
};

const button = () => {
  const btn = document.createElement('input');
  btn.setAttribute('type', 'submit');
  btn.setAttribute('value', 'Search');
  btn.classList.add('btn');
  return btn;
};

const form = () => {
  const searchInput = inputField('City', 'text');
  const formDiv = document.createElement('form');

  formDiv.appendChild(searchInput);
  formDiv.appendChild(button());

  return formDiv;
};

export { form, button };
