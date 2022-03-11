export default function ({ targetEl, textContent }) {
  const headerEl = document.createElement('header');
  headerEl.className = 'header';

  this.state = textContent;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    headerEl.innerHTML = `
      <div class="container">
        <h1>${this.state}</h1>
      </div>
    `;
  };
  this.render();

  targetEl.appendChild(headerEl);
}
