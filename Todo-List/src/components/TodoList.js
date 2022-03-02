import { createEl } from './../util.js';
export default function ({ targetEl, todos = [], onDelete, onChangeComplete }) {
  const ulEl = createEl('ul');

  this.todos = todos;
  this.setTodos = (nextTodos) => {
    this.todos = nextTodos;
    this.render();
  };

  this.render = () => {
    const listHTML = this.todos
      .map(
        ({ id, isComplete, content }) => `
      <li id="${id}">
        <input type="checkbox" ${isComplete && 'checked'} />
        <p>${content}</p>
        <button type="button">삭제</button>
      </li>
    `
      )
      .join('');
    ulEl.innerHTML = listHTML;
  };

  this.render();

  targetEl.appendChild(ulEl);

  ulEl.addEventListener('click', (e) => {
    const delButton = e.target.closest('button');
    const checkComplete = e.target.closest('input');
    const currentId = e.target.closest('li').id;

    if (e.target === delButton) {
      onDelete(currentId);
    }

    if (e.target === checkComplete) {
      onChangeComplete(currentId);
    }
  });
}
