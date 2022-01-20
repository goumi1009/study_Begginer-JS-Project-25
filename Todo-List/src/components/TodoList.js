export default function ({ targetEl, todos = [], onDelete, onChangeComplete }) {
  const ulEl = document.createElement('ul');

  this.todos = todos;
  this.setTodos = (nextTodos) => {
    this.todos = nextTodos;
    this.render();
  };

  this.render = () => {
    const listHTML = this.todos
      .map(
        (todo, i) => `
      <li id="${i}">
        <p>${todo.content}</p>
        <input type="checkbox" ${todo.isComplete && 'checked'} />
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
      onDelete(e, currentId);
    }

    if (e.target === checkComplete) {
      onChangeComplete(e, currentId);
    }
  });
}
