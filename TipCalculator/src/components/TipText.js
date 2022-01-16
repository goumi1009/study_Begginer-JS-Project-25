export default function ({ targetEl, text }) {
  const pEl = document.createElement('p');
  targetEl.appendChild(pEl);

  this.state = text;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    pEl.textContent = this.state;
  };
  this.render();
}
