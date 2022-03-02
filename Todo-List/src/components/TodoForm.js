import { createEl } from './../util.js';
import Button from './Button.js';

export default function ({ targetEl, onSubmit }) {
  const formEl = createEl('form');

  const inputEl = createEl('input');
  inputEl.placeholder = '할일 입력';
  inputEl.title = '할일 입력';
  formEl.appendChild(inputEl);

  new Button({
    targetEl: formEl,
    textContent: 'ADD',
    type: 'submit',
  });
  targetEl.appendChild(formEl);

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoInput = e.target.querySelector('input');
    const todoText = todoInput.value;

    if (todoText.length > 1) {
      onSubmit && onSubmit(todoText);
      todoInput.value = '';
    }
  });
}
