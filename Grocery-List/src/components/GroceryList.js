export default function ({ targetEl, initialState, onClick }) {
  const listEl = document.createElement('ul');
  targetEl.appendChild(listEl);
  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    listEl.innerHTML = `
    ${this.state
      .map(
        (item, i) => `
        <li data-idx=${i} data-is-complete="${item.isComplete}">${item.text}</li>
      `
      )
      .join('')}
    `;
  };

  listEl.addEventListener('click', (e) => {
    onClick(e);
  });

  this.render();
}
