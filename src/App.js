import Card from './components/Card.js';
import cardData from './projectList.json' assert { type: 'json' };

export default function (targetEl) {
  const headerTitle = document.createElement('h1');
  headerTitle.textContent = '25 Beginner JavaScript Project Ideas';

  const cardsWrapper = document.createElement('div');
  cardsWrapper.classList.add('cards-wrapper');
  cardData.forEach((itemData) => {
    new Card({ targetEl: cardsWrapper, itemData });
  });
  this.render = () => {
    targetEl.appendChild(headerTitle);
    targetEl.appendChild(cardsWrapper);
  };

  this.render();
}
