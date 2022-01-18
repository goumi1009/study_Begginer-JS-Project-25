export default function ({ targetEl, type = 'text', onChange, label, id }) {
  const inputEl = document.createElement('input');
  const labelEl = document.createElement('label');
  inputEl.type = type;
  inputEl.id = id;
  labelEl.textContent = label;
  labelEl.htmlFor = id;
  targetEl.appendChild(labelEl);
  targetEl.appendChild(inputEl);
  inputEl.addEventListener('change', (e) => {
    onChange(e);
  });

  this.state = '';
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    inputEl.value = this.state;
  };
}
