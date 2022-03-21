import PageTitle from './PageTitle.js';
import CardList from './CardList.js';
import SearchForm from './SearchForm.js';

export default function ({ targetEl, initialState, onSubmit }) {
  const pageContentEl = document.createElement('article');
  pageContentEl.className = 'page-content';

  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    cardList.setState({
      currentPage: this.state.currentPage,
      recipes: this.state.searchRecipes,
      majorColor: this.state.majorColor,
    });
    this.render();
  };

  new PageTitle({
    targetEl: pageContentEl,
    title: 'Search recipes',
  });

  new SearchForm({
    targetEl: pageContentEl,
    onSubmit: (keyword) => {
      onSubmit(keyword);
    },
  });

  const cardList = new CardList({
    targetEl: pageContentEl,
    initialState: {
      currentPage: this.state.currentPage,
      recipes: this.state.searchRecipes,
      majorColor: this.state.majorColor,
    },
    onSave: (e) => {
      console.log(e);
    },
  });

  targetEl.appendChild(pageContentEl);
}
