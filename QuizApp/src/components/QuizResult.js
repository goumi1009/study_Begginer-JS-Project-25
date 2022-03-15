export default function ({ targetEl, initialState, onRetake }) {
  const quizResultEl = document.createElement('article');
  quizResultEl.className = 'card';

  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    quizResultEl.style.display = this.state.isSubmit ? 'block' : 'none';
    quizResultEl.innerHTML = `
        <h2>
          <em>Results</em>
        </h2>
        <ul>
          ${this.state.quizzes
            .map(
              ({ correctIndex, answers }, index) =>
                `<li>
              Question${index + 1}: ${
                  this.state.submission[index] === Number(correctIndex)
                    ? 'Correct'
                    : `Incorrect / Answer is ${answers[correctIndex]}`
                } 
            </li>`
            )
            .join('')}
        </ul>
        <button type="button" class="button-retake">Retake</button>
      `;
  };
  this.render();

  targetEl.appendChild(quizResultEl);

  quizResultEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('button-retake')) {
      onRetake && onRetake(e);
    }
  });
}
