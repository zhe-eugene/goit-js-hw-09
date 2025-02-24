const feedbackForm = document.querySelector('.feedback-form');

const LOCAL_STORAGE_KEY = 'feedback-form-state';

let formData = { email: '', message: '' };

const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  feedbackForm.email.value = formData.email || '';
  feedbackForm.message.value = formData.message || '';
}

feedbackForm.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  const isEmpty = !formData.email || !formData.message;
  console.log(isEmpty);

  if (isEmpty) {
    alert('Fill please all fields!');
    return;
  }

  console.log(formData);
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  formData = { email: '', message: '' };

  feedbackForm.reset();
});
