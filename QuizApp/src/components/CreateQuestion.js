export default function ({ targetEl, onSubmit, onDelete, onTake }) {
  const createFormWrapperEl = document.createElement('article');
  createFormWrapperEl.className = 'create-section';

  this.state = {
    question: '',
    answers: [
      {
        isCorrect: false,
        text: '',
      },
      {
        isCorrect: false,
        text: '',
      },
      {
        isCorrect: false,
        text: '',
      },
      {
        isCorrect: false,
        text: '',
      },
    ],
  };
  this.setState = (nextState) => {
    this.state = nextState;
    console.log(this.state);
  };

  this.render = () => {
    createFormWrapperEl.innerHTML = `
      <h2>Create Quiz</h2>
      <form class="create-quiz-form">
        <h3>Question</h3>
        <div class="form-row">
          <label for="question">?</label>
          <input type="text" id="question" />
        </div>
        <h3>Answers</h3>
        <div class="form-row" data-answer-id="0">
          <input type="radio" name="answers" />
          <input type="text" />
        </div>
        <div class="form-row" data-answer-id="1">
          <input type="radio" name="answers" />
          <input type="text" />
        </div>
        <div class="form-row" data-answer-id="2">
          <input type="radio" name="answers" />
          <input type="text" />
        </div>
        <div class="form-row" data-answer-id="3">
          <input type="radio" name="answers" />
          <input type="text" />
        </div>
        <button type="submit">Add Another</button>
        <button class="button-take" type="submit">Add/Take Quiz</button>
        <hr />
        <button class="button-delete" type="button">Delete Quiz</button>
      </form>
    `;
  };
  this.render();

  targetEl.appendChild(createFormWrapperEl);

  createFormWrapperEl.addEventListener('submit', (e) => {
    e.preventDefault();
    onSubmit && onSubmit(this.state);
  });

  createFormWrapperEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('button-take')) {
      onTake && onTake(e);
    } else if (e.target.classList.contains('button-delete')) {
      onDelete && onDelete(e);
    }
  });

  createFormWrapperEl.addEventListener('change', (e) => {
    if (e.target.id === 'question') {
      this.setState({
        ...this.state,
        question: e.target.value,
      });
    } else if (e.target.type === 'radio') {
      const { answerId } = e.target.closest('.form-row').dataset;
      const nextState = this.state.answers.map((answer, i) =>
        answerId == i
          ? { ...answer, isCorrect: true }
          : { ...answer, isCorrect: false }
      );
      this.setState({
        ...this.state,
        answers: nextState,
      });
    } else if (e.target.type === 'text') {
      const nextState = this.state.answers.map((answer) => ({
        ...answer,
        text: e.target.value,
      }));
      this.setState({
        ...this.state,
        answers: nextState,
      });
    }
  });
}

// form.... 어렵다. 여러input의 값들을 어떻게 state로 관리해야하는걸까.
// 또 이 state의 vaildate는 어떻게 체크해야하는걸까.
