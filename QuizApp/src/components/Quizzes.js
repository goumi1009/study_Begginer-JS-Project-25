export default function ({ targetEl, initialstate, onSubmit, onChange }) {
  const quizzesEl = document.createElement('form');
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
        
      <article class="card" data-question-id="${index}">
        <h2>
          <em>Question ${index + 1}</em>
          <br /><strong>${question}</strong>
        </h2>

        <ul>
          ${answers
            .map(
              (answer, i) => `
            <li>
              <input type="radio" data-answer-id="${i}" name="q${index}answers" id="q${index}answer${i}" ${
                this.state.submission[index] === i ? 'checked' : ''
              } />
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
      <button style="display: ${this.state.isTake ? 'block' : 'none'}" ${
      this.state.isSubmit ? 'disabled' : ''
    }>Submit Quiz</button>`;
  };
  this.render();

  targetEl.appendChild(quizzesEl);

  quizzesEl.addEventListener('submit', (e) => {
    e.preventDefault();
    onSubmit && onSubmit(e);
  });

  quizzesEl.addEventListener('change', (e) => {
    const { questionId } = e.target.closest('.card').dataset;
    const { answerId } = e.target.dataset;
    onChange({
      questionId,
      answerId,
    });
  });
}
