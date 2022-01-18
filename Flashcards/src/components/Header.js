import Button from './Button.js';

export default function ({ targetEl, clickAddCard, clickDelCard }) {
  const headerEl = document.createElement('header');
  targetEl.appendChild(headerEl);

  const container = document.createElement('div');
  container.classList.add('container');
  headerEl.appendChild(container);

  const title = document.createElement('h1');
  title.textContent = 'Flashcards';
  container.appendChild(title);

  const addButton = new Button({
    targetEl: container,
    textContent: 'Add Card',
    onClick: () => {
      clickAddCard();
    },
  });

  const delButton = new Button({
    targetEl: container,
    textContent: 'Del Card',
    onClick: () => {
      clickDelCard();
    },
  });
}
