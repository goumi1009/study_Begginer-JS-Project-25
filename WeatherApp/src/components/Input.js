export default function ({ targetEl, labelText, type = 'text' }) {
  this.state = '';
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const inputEl = document.createElement('input');
  const labelEl = document.createElement('label');
  labelEl.textContent = labelText;

  targetEl.appendChild(labelEl);
  targetEl.appendChild(inputEl);

  inputEl.addEventListener('keyup', (e) => {
    this.setState(e.target.value);
  });

  this.render = () => {
    inputEl.value = this.state;
  };
}
