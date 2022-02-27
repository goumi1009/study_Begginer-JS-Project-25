export default function ({ targetEl, type = 'text' }) {
  this.state = '';
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const inputEl = document.createElement('input');
  targetEl.appendChild(inputEl);

  inputEl.addEventListener('keyup', (e) => {
    this.setState(e.target.value);
  });

  this.render = () => {
    inputEl.value = this.state;
  };
}
