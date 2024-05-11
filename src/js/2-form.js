const form = document.querySelector('.feedback-form');

const list = 'feedback-form-state';

form.addEventListener('input', handleImput);
getText();

const formData = {
  email: '',
  message: '',
};

function handleImput(event) {
  const key = event.target.name;

  formData[key] = event.target.value;

  console.log(event.target);

  localStorage.setItem('list', JSON.stringify(formData));
}

function getText() {
  const data = JSON.parse(localStorage.getItem(list));

  if (!data) {
    return 'Fill please all fields';
  }

  const { email, message } = form.elements;

  email.value = data.email;
  message.value = data.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem('list');
  form.reset();
});
