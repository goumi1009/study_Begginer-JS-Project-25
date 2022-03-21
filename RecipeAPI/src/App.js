// 라우터 처리
// add recipe 페이지 기능 구현
// my recipes 페이지 기능구현
import Header from './components/Header.js';
import MyRecipesPage from './components/MyRecipesPage.js';
import SavedRecipesPage from './components/SavedRecipesPage.js';
import SearchRecipes from './components/SearchRecipesPage.js';

export default function App({ targetEl }) {
  this.state = {
    majorColor: '#7b68ee',
    currentPage: 1,
    myRecipes: [],
    searchRecipes: [],
    savedRecipes: [],
  };
  this.setState = (nextState) => {
    this.state = nextState;

    header.setState({
      majorColor: this.state.majorColor,
      currentPage: this.state.currentPage,
    });

    this.render();
  };

  const header = new Header({
    targetEl,
    initialState: {
      majorColor: this.state.majorColor,
      currentPage: this.state.currentPage,
    },
    onLinkClick: (e) => {
      const link = e.target.closest('a');
      const { id } = link.dataset;
      history.pushState(null, null, link.getAttribute('href'));
      this.setState({
        ...this.state,
        currentPage: Number(id),
      });
    },
    onColorChange: (color) => {
      this.setState({
        ...this.state,
        majorColor: color,
      });
    },
  });

  const pageContainerEl = document.createElement('main');
  pageContainerEl.className = 'app-contents container';
  targetEl.appendChild(pageContainerEl);

  this.render = () => {
    const { pathname } = location;
    const [, , pageName] = pathname.split('/');
    pageContainerEl.innerHTML = '';
    if (pageName === 'MyRecipes' || pageName === '') {
      new MyRecipesPage({
        targetEl: pageContainerEl,
        initialState: {
          currentPage: this.state.currentPage,
          myRecipes: this.state.myRecipes,
          majorColor: this.state.majorColor,
        },
      });
    } else if (pageName === 'AddRecipe') {
      pageContainerEl.innerHTML = pageName;
    } else if (pageName === 'SavedRecipes') {
      new SavedRecipesPage({
        targetEl: pageContainerEl,
        initialState: {
          currentPage: this.state.currentPage,
          savedRecipes: this.state.savedRecipes,
          majorColor: this.state.majorColor,
        },
      });
    } else if (pageName === 'SearchRecipes') {
      new SearchRecipes({
        targetEl: pageContainerEl,
        initialState: {
          currentPage: this.state.currentPage,
          searchRecipes: this.state.searchRecipes,
          majorColor: this.state.majorColor,
        },
        onSubmit: (keyword) => {
          // todo 검색요청
          console.log(keyword);
        },
      });
    }

    feather.replace();
  };
  this.render();
}
