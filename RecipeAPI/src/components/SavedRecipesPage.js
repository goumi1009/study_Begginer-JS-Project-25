import CardList from './CardList.js';
import PageTitle from './PageTitle.js';

export default function ({ targetEl, initialState }) {
  const pageContentEl = document.createElement('article');
  pageContentEl.className = 'page-content';

  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    cardList.setState({
      currentPage: this.state.currentPage,
      recipes: this.state.savedRecipes,
      majorColor: this.state.majorColor,
    });
    this.render();
  };

  new PageTitle({
    targetEl: pageContentEl,
    title: 'Saved recipes',
  });

  const cardList = new CardList({
    targetEl: pageContentEl,
    initialState: {
      currentPage: this.state.currentPage,
      recipes: this.state.savedRecipes,
      majorColor: this.state.majorColor,
    },
    onSave: (e) => {
      console.log(e);
    },
  });

  targetEl.appendChild(pageContentEl);
}
