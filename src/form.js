const inputField = (labelName, fieldType) => {
  const input = document.createElement('input');
  input.setAttribute('name', labelName);
  input.setAttribute('type', fieldType);
  input.setAttribute('placeholder', labelName);
  input.required = true;
  return input;
};

const button = (value) => {
  const btn = document.createElement('input');
  btn.setAttribute('type', 'submit');
  btn.setAttribute('value', value);
  btn.classList.add('btn');
  return btn;
};

const form = () => {
  const searchInput = inputField('City', 'text');
  const formDiv = document.createElement('form');

  formDiv.appendChild(searchInput);
  formDiv.appendChild(button('Search'));

  return formDiv;
};

export { form, button };
