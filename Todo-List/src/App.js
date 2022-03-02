import Header from './components/Header.js';
import TodoCount from './components/TodoCount.js';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';
import { createUUID } from './util.js';
import { getLocalStorage, setLocalStorage } from './storage.js';

const TODOS_STORAGE_KEY = 'todos';

export default function ({ targetEl }) {
  this.todoList = getLocalStorage(TODOS_STORAGE_KEY, []);
  this.setTodoList = (changedTodoList) => {
    this.todoList = changedTodoList;
    setLocalStorage(TODOS_STORAGE_KEY, this.todoList);
    todos.setTodos(this.todoList);
    todoCount.setState(this.todoList);
  };

  new Header({
    targetEl,
    textContent: '✔ To-do List',
  });

  new TodoForm({
    targetEl,
    onSubmit: (todoText) => {
      this.setTodoList([
        ...this.todoList,
        {
          id: createUUID(),
          isComplete: false,
          content: todoText,
        },
      ]);
    },
  });

  const todos = new TodoList({
    targetEl,
    todos: this.todoList,
    onDelete: (currentId) => {
      this.setTodoList(this.todoList.filter(({ id }) => id !== currentId));
    },
    onChangeComplete: (currentId) => {
      this.setTodoList(
        this.todoList.map((item) =>
          item.id === currentId
            ? { ...item, isComplete: !item.isComplete }
            : item
        )
      );
    },
  });

  const todoCount = new TodoCount({ targetEl, initialstate: this.todoList });
}
