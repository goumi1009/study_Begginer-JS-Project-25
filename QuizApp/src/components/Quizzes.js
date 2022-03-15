export default function ({ targetEl, initialstate }) {
  const quizzesEl = document.createElement('form');
  quizzesEl.className = 'question-section';

  const submitButtonEl = document.createElement('button');
  submitButtonEl.textContent = 'Submit Quiz';

  this.state = initialstate;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    quizzesEl.innerHTML = `${this.state.quizzes
      .map(
        ({ question, answers }, index) => `
        
      <article class="question">
        <h2>
          <em>Question ${index + 1}</em>
          <br /><strong>${question}</strong>
        </h2>

        <ul>
          ${answers
            .map(
              (answer, i) => `
            <li>
              <input type="radio" name="q${index}answers" id="q${index}answer${i}" />
              <label for="q${index}answer${i}">${answer}</label>
            </li>
          `
            )
            .join('')}
        </ul>
      </article>
    `
      )
      .join('')}
      <button style="display: ${
        this.state.isTake ? 'block' : 'none'
      }">Submit Quiz</button>`;
  };
  this.render();

  targetEl.appendChild(quizzesEl);

  quizzesEl.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}
