export default function ({ targetEl, initialstate }) {
  const questionsEl = document.createElement('section');
  questionsEl.className = 'question-section';

  this.state = initialstate;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    questionsEl.innerHTML = this.state
      .map(
        (question, index) => `
      <article class="question">
        <h2>
          <em>Question ${index + 1}</em>
          <br /><strong>${question.question}</strong>
        </h2>

        <ul>
          ${question.answers
            .map(
              (answer, i) => `
            <li data-is-correct="${answer.isCorrect}">
              <input type="radio" name="q${index}answers" id="q${index}answer${i}" />
              <label for="q${index}answer${i}">${answer.text}</label>
            </li>
          `
            )
            .join('')}
        </ul>
      </article>
    `
      )
      .join('');
  };
  this.render();

  targetEl.appendChild(questionsEl);
}
