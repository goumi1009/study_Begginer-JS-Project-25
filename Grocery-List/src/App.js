import GroceryList from './components/GroceryList.js';
import Input from './components/Input.js';

export default function ({ targetEl }) {
  const titleEl = document.createElement('h1');
  titleEl.textContent = '장보기 리스트';
  targetEl.appendChild(titleEl);

  this.state = [];
  this.setState = (nextState) => {
    console.log(nextState);
    this.state = nextState;
    groceryList.setState(nextState);
  };

  new Input({
    targetEl,
    onSubmit: (value) => {
      this.setState([
        ...this.state,
        {
          text: value,
          isComplete: false,
        },
      ]);
    },
  });

  const groceryList = new GroceryList({
    targetEl,
    initialState: this.state,
    onClick: (e) => {
      const idx = e.target.dataset.idx;
      const completeState = this.state.map((item, i) =>
        i === Number(idx) ? { ...item, isComplete: !item.isComplete } : item
      );
      this.setState([...completeState]);
    },
  });
}
