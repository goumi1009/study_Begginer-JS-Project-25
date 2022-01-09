export default function ({ targetEl, onSubmit }) {
  const formEl = document.createElement('form');
  formEl.classList.add('add-form');
  const inputEl = document.createElement('input');
  formEl.appendChild(inputEl);
  targetEl.appendChild(formEl);

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    onSubmit(inputEl.value);
    inputEl.value = '';
  });
}
