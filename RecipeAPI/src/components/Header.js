export default function ({
  targetEl,
  initialState,
  onLinkClick,
  onColorChange,
}) {
  const pages = [
    {
      id: 1,
      icon: 'book',
      pageName: 'MyRecipes',
    },
    {
      id: 2,
      icon: 'feather',
      pageName: 'AddRecipe',
    },
    {
      id: 3,
      icon: 'bookmark',
      pageName: 'SavedRecipes',
    },
    {
      id: 4,
      icon: 'search',
      pageName: 'SearchRecipes',
    },
  ];
  const headerEl = document.createElement('header');
  headerEl.className = 'app-header';
  const containerEl = document.createElement('div');
  containerEl.className = 'container';
  headerEl.appendChild(containerEl);

  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    containerEl.innerHTML = `
    <div class="top">
      <h1>Recipeboard<span style="color: ${
        this.state.majorColor
      };">.</span></h1>
      <div>
        <input type="color" value="${this.state.majorColor}" />
      </div>
    </div>
    <div class="side-nav">
      <article class="profile">
        <i data-feather="user"></i>
        <p style="color: ${this.state.majorColor};">Goumi009</p>
      </article>
      <nav>
        ${pages
          .map(
            ({ pageName, icon, id }) => `
          <a href="/RecipeAPI/${pageName}" data-id="${id}" style="background-color:${
              this.state.currentPage === id
                ? this.state.majorColor
                : 'transparent'
            };">
            <i data-feather="${icon}"></i>
            <p>${pageName.replace('R', ' r')}</p>
            </a>
        `
          )
          .join('')}
      </nav>
    </div>
    `;
    feather.replace();
  };

  this.render();
  targetEl.appendChild(headerEl);

  containerEl.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      e.preventDefault();
      onLinkClick(e);
    }
  });

  containerEl.addEventListener('change', (e) => {
    if (e.target.type === 'color') {
      onColorChange && onColorChange(e.target.value);
    }
  });
}
