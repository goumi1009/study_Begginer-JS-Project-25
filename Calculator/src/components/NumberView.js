export default function ({ targetEl, initialstate }) {
  const viewEl = document.createElement('div');
  viewEl.classList.add('calculator-view');
  targetEl.appendChild(viewEl);

  this.state = initialstate;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    viewEl.textContent = this.state;
  };
  this.render();
}
