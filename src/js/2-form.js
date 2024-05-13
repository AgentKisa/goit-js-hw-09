const form = document.querySelector('.feedback-form');

const lsFormData = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

initForm();

form.addEventListener('input', handleImput);
form.addEventListener('submit', handleSubmit);

function initForm() {
  const localStorageFormData = localStorage.getItem(lsFormData);
  if (!localStorageFormData) {
    return;
  }

  try {
    formData = JSON.parse(localStorageFormData);
  } catch (error) {
    console.log(error);
    return;
  }

  const { email, message } = form.elements;

  email.value = formData.email;
  message.value = formData.message;
}

function handleImput(event) {
  const key = event.target.name;

  formData[key] = event.target.value;

  console.log(event.target);

  localStorage.setItem(lsFormData, JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  formData = {
    email: '',
    message: '',
  };

  localStorage.removeItem(lsFormData);
  form.reset();
}
