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
        (card) => `<li id="card-${i}" class="${card.visible ? 'view' : 'none'}">
        <p class="question">${card.question}</p>
        <p class="answer" style="opacity: ${card.visible ? `1` : '0'}">${
          card.answer
        }</p>
      </li>`
      )
      .join('');
    listEl.innerHTML = cardListHTML;
  };

  listEl.addEventListener('click', (e) => {
    const selectCard = e.target.closest('li');
    console.log(selectCard);
    // 아니.. 어떻게 찾아야 하는거여 .. 왜 null로 나오지 ?
    // .classlist.add('view');
    // e.target.closest('.answer').style.display = 'block';
  });
}
