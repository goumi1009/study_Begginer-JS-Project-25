import PageTitle from './PageTitle.js';

export default function ({ targetEl, initialState }) {
  const pageContentEl = document.createElement('article');
  pageContentEl.className = 'page-content';

  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  new PageTitle({ targetEl: pageContentEl, title: 'My recipes' });

  this.render = () => {
    pageContentEl.innerHTML = `
      <h2>${this.state}</h2>
    
    `;
  };

  this.render();
  targetEl.appendChild(pageContentEl);
}
