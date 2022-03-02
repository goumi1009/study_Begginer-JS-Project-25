import Button from './components/Button.js';
import Header from './components/Header.js';
import TodoList from './components/TodoList.js';
import { createEl } from './util.js';

export default function ({ targetEl }) {
  this.todoList = [];
  this.setTodoList = (changedTodoList) => {
    this.todoList = changedTodoList;
    todos.setTodos(this.todoList);
  };

  new Header({ targetEl, textContent: '✔ To-do List' });

  const formEl = createEl('form');
  const inputEl = createEl('input');
  formEl.appendChild(inputEl);
  new Button({
    targetEl: formEl,
    textContent: 'ADD',
    type: 'submit',
    onClick: () => {},
  });
  targetEl.appendChild(formEl);

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoInput = e.target.querySelector('input');
    if (!todoInput.value) {
      alert('입력된 값이 없습니다. 값을 입력 해 주세요.');
      return;
    }
    this.setTodoList([
      ...this.todoList,
      {
        isComplete: false,
        content: todoInput.value,
      },
    ]);

    todoInput.value = '';
  });

  const todos = new TodoList({
    targetEl,
    todos: this.todoList,
    onDelete: (e, currentId) => {
      const changedTodoList = this.todoList.filter(
        (item, i) => i !== Number(currentId)
      );

      this.setTodoList(changedTodoList);
    },
    onChangeComplete: (e, currentId) => {
      const changedTodoList = this.todoList.map((item, i) =>
        i === Number(currentId)
          ? { ...item, isComplete: !item.isComplete }
          : item
      );
      console.log(changedTodoList, currentId);
      this.setTodoList(changedTodoList);
    },
  });
}
