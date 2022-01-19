export default function ({ targetEl, initialstate }) {
  const listEl = document.createElement('ul');

  targetEl.appendChild(listEl);
  this.state = initialstate;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const cardListHTML = this.state
      .map(
        (card) => `<li>
        <p class="question">${card.question}</p>
        <p class="answer" style="display: ${card.visible ? 'block' : 'none'}">${
          card.answer
        }</p>
      </li>`
      )
      .join('');
    listEl.innerHTML = cardListHTML;
  };

  listEl.addEventListener('click', (e) => {
    const selectCard = e.target.closest('li');
    // 근데 이렇게 dom을 바로 조작하는게 맞나? ... state를 바꿔줘야 할거 같은데
    selectCard.querySelector('.answer').style.display === 'block'
      ? (selectCard.querySelector('.answer').style.display = 'none')
      : (selectCard.querySelector('.answer').style.display = 'block');
  });
}
