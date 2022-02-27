import Input from './components/Input.js';

const API_END_POINT =
  'https://en.wikipedia.org/w/api.php?action=query&origin=*&pilicense=any&prop=pageimages&pithumbsize=250&format=json&gsrlimit=100&generator=search&gsrsearch=';

export default function ({ targetEl }) {
  this.resultList = [];
  this.setResultList = (nextList) => {
    this.resultList = nextList;
    this.render();
  };

  const formEl = document.createElement('form');
  const searchInput = new Input({ targetEl: formEl });
  targetEl.appendChild(formEl);

  const request = (keyword) => {
    fetch(`${API_END_POINT}${keyword}`)
      .then((response) => response.json())
      .then((data) => {
        const { pages } = data.query;
        this.setResultList(Object.values(pages));
      });
  };

  const listEl = document.createElement('ul');
  targetEl.appendChild(listEl);

  this.render = () => {
    console.log(this.resultList);
    const itemTemplete = this.resultList
      .map(
        (item) => `
      <li data-id="${item.pageid}">
        <a href="https://en.wikipedia.org/?curid=${
          item.pageid
        }" target="_blank">
          ${
            item.thumbnail
              ? `<img src="${item.thumbnail.source}" alt="" />`
              : ''
          }
          <p>${item.title}</p>
        </a>
      </li>
    `
      )
      .join('');
    listEl.innerHTML = itemTemplete;
  };

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    request(searchInput.state);
  });
}
