export default function ({ targetEl, itemData }) {
  const cardEl = document.createElement('div');
  cardEl.classList.add('card');
  cardEl.innerHTML = `
    <a href="${itemData.url}">
      <img src="./src/assets/image ${itemData.id}.png" alt="" />
      <span>Test it!</span>
    </a>
    <dl>
      <dt><a href="${itemData.url}">${itemData.title}</a></dt>
      <dd>${itemData.description}</dd>
    </dl>
  `;

  targetEl.appendChild(cardEl);
}
