export default function ({ targetEl, initialState, onDelete, onSave }) {
  const cardWrapperEl = document.createElement('div');
  cardWrapperEl.className = 'card-wrapper';

  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const cardDetailTemplate = (recipe) => {
    let result = '';
    for (const [key, value] of Object.entries(recipe)) {
      if (key === 'imageSrc' || key === 'title') {
        continue;
      }
      result += `<dl>
                  <dt>${key}</dt>
                  <dd>${value}</dd>
                </dl>`;
    }
    return result;
  };

  this.render = () => {
    console.log(initialState);
    const { recipes, majorColor, currentPage } = this.state;
    if (recipes.length <= 0) {
      cardWrapperEl.innerHTML = `<p class="empty">등록된 레시피가 없습니다.</p>`;
      return;
    }
    const template = recipes
      .map(
        (recipe, index) => `
      <article class="card" data-id="${index}">
        <div class="thumbnail">
          <img
            src="${recipe.imageSrc}"
            alt=""
          />
        </div>
        <h3 style="color: ${majorColor}">${recipe.title}</h3>
        ${cardDetailTemplate(recipe)}

        <button type="button">View more</button>
        ${
          currentPage === 4
            ? `<button type="button" class="btn-save">
            <i data-feather="save"></i>
          </button>`
            : `<button type="button" class="btn-del">
          <i data-feather="trash-2"></i>
        </button>`
        }
        
      </article>
    `
      )
      .join('');
    cardWrapperEl.innerHTML = template;
  };

  this.render();
  targetEl.appendChild(cardWrapperEl);

  cardWrapperEl.addEventListener('click', (e) => {
    if (!e.target.closest('button')) {
      return;
    }
    const currentButton = e.target.closest('button');
    if (currentButton.classList.contains('btn-del')) {
      onDelete(e);
    } else if (currentButton.classList.contains('btn-save')) {
      onSave(e);
    }
  });
}
