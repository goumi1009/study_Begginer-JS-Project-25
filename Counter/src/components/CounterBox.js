import Button from './Button.js';

export default function ({ targetEl }) {
  const boxEl = document.createElement('div');
  boxEl.classList.add('counter-box');
  targetEl.appendChild(boxEl);

  const titleEl = document.createElement('h1');
  titleEl.textContent = 'counter';
  boxEl.appendChild(titleEl);

  const countEl = document.createElement('p');
  countEl.classList.add('count');
  boxEl.appendChild(countEl);

  this.state = 0;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    countEl.textContent = this.state;
  };

  this.render();

  const increaseButton = new Button({
    targetEl: boxEl,
    text: 'Increase',
    onclick: () => {
      this.setState(this.state + 1);
    },
  });

  const decreaseButton = new Button({
    targetEl: boxEl,
    text: 'Decrease',
    onclick: () => {
      this.setState(this.state - 1);
    },
  });
}
