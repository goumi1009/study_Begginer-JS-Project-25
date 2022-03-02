import Header from './components/Header.js';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';

export default function ({ targetEl }) {
  this.todoList = [];
  this.setTodoList = (changedTodoList) => {
    this.todoList = changedTodoList;
    todos.setTodos(this.todoList);
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
          isComplete: false,
          content: todoText,
        },
      ]);
    },
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
