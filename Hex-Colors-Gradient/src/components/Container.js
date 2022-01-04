import Button from './Button.js';
import TextContent from './TextContent.js';

export default function ({ targetEl }) {
  const containerEl = document.createElement('div');
  containerEl.classList.add('container');

  const randomColor = () =>
    `#${Math.round(Math.random() * 0xffffff).toString(16)}`;

  this.state = [randomColor(), randomColor()];
  this.setState = (nextstate) => {
    this.state = nextstate;
    textContent.setState(nextstate);
    this.render();
  };

  this.render = () => {
    containerEl.style.backgroundImage = `linear-gradient(to right, ${this.state[0]}, ${this.state[1]})`;
  };

  targetEl.appendChild(containerEl);

  const textContent = new TextContent({
    initialstate: this.state,
    containerEl,
  });

  new Button({
    containerEl,
    onclick: () => {
      this.setState([randomColor(), randomColor()]);
    },
  });

  this.render();
}
