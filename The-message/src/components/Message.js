export default function ({ targetEl, initialSate }) {
  const messageEl = document.createElement('p');
  messageEl.classList.add('message');
  targetEl.appendChild(messageEl);

  this.state = initialSate;
  this.setState = (nextSate) => {
    this.state = nextSate;
    this.render();
  };

  this.render = () => {
    messageEl.textContent = this.state.toUpperCase();
  };
}
