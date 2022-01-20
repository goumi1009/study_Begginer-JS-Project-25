/**
 * TODO
 * 투두 추가
 * - [] 투두 입력 인풋에 내용을 입력하고 submit 버튼을 누르면 새로운 투두가 추가 된다.
 * - [x] 사용자 입력값이 빈 값이라면 추가 되지 않는다.
 * - [x] 추가되고 나면 인풋이 빈값으로 초기화 된다.
 * 투두 완료
 * - [] 투두 완료 버튼을 누르면 투두의 완료 상태가 토글 된다.
 * 투두 삭제
 * - [] 투두 삭제 버튼을 누르면 해당 투두가 삭제 된다.
 *
 */

import Button from './components/Button.js';
import TodoList from './components/TodoList.js';

export default function ({ targetEl }) {
  this.todoList = [];
  this.setTodoList = (changedTodoList) => {
    this.todoList = changedTodoList;
    todos.setTodos(this.todoList);
  };

  const createEl = (element) => document.createElement(element);
  const headerEl = createEl('h1');
  headerEl.textContent = '✔ To-do List';
  targetEl.appendChild(headerEl);

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
