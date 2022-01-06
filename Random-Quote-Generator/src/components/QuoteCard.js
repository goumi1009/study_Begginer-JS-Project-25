export default function ({ targetEl, initialsate }) {
  const quoteCardEl = document.createElement('div');
  quoteCardEl.classList.add('quote-card');
  const quoteEl = document.createElement('p');
  const authorEl = document.createElement('p');

  targetEl.appendChild(quoteCardEl);
  quoteCardEl.appendChild(quoteEl);
  quoteCardEl.appendChild(authorEl);

  this.state = initialsate;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    quoteEl.textContent = `${this.state.quote}`;
    authorEl.textContent = `- ${this.state.author}`;
  };

  this.render();
}
