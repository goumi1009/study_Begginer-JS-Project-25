export default function ({ targetEl, onSubmit }) {
  const searchFormEl = document.createElement('form');
  searchFormEl.className = 'search-form';

  this.render = () => {
    searchFormEl.innerHTML = `
    <label for="search-input" class="hidden">검색</label>
    <input type="text" placeholder="search-recipes..." id="search-input" />
    `;
  };

  this.render();
  targetEl.appendChild(searchFormEl);

  searchFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const keyword = document.querySelector('#search-input').value;
    onSubmit(keyword);
  });
}
