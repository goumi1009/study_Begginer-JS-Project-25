import MessageBox from './MessageBox.js';

export default function ({ targetEl }) {
  const containerEl = document.createElement('div');
  containerEl.classList.add('container');

  targetEl.appendChild(containerEl);

  this.state = null;
  this.setState = (nextstate) => {
    this.state = nextstate;
    textContent.setState(nextstate);
    this.render();
  };

  this.render = () => {};

  this.render();

  new MessageBox({
    targetEl: containerEl,
  });
}
