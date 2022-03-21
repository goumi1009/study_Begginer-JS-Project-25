import PageTitle from './PageTitle.js';
import CardList from './CardList.js';

export default function ({ targetEl, initialState }) {
  const pageContentEl = document.createElement('article');
  pageContentEl.className = 'page-content';

  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    cardList.setState({
      currentPage: this.state.currentPage,
      myRecipes: this.state.myRecipes,
      majorColor: this.state.majorColor,
    });
    this.render();
  };

  new PageTitle({
    targetEl: pageContentEl,
    title: 'My recipes',
  });

  const cardList = new CardList({
    targetEl: pageContentEl,
    initialState: {
      currentPage: this.state.currentPage,
      recipes: this.state.myRecipes,
      majorColor: this.state.majorColor,
    },
    onDelete: (e) => {
      console.log(e);
    },
  });

  targetEl.appendChild(pageContentEl);
}
