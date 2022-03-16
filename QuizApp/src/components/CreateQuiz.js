export default function ({
  targetEl,
  initialState,
  onSubmit,
  onChange,
  onDelete,
  onTake,
}) {
  const createFormWrapperEl = document.createElement('article');
  createFormWrapperEl.className = 'create-section';
  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { newQuestion, isTake } = this.state;

    createFormWrapperEl.innerHTML = `
      <h2>Create Quiz</h2>
      <form class="create-quiz-form">
        <h3>Question</h3>
        <div class="form-row">
          <label for="question">?</label>
          <input type="text" id="question" ${isTake ? 'disabled' : ''} value="${
      newQuestion.question
    }" />
        </div>
        <h3>Answers</h3>
        ${newQuestion.answers
          .map(
            (answer, i) => `
          <div class="form-row" data-answer-id="${i}">
            <input type="radio" name="answers" ${isTake ? 'disabled' : ''} ${
              Number(newQuestion.correctIndex) === i ? 'checked' : ''
            } />
            <input type="text" value="${answer}" ${isTake ? 'disabled' : ''} />
          </div>
        `
          )
          .join('')}
        <div class="button-wrapper">
          <button type="submit" ${isTake ? 'disabled' : ''}>Add Another</button>
          <button class="button-take" type="button" ${
            isTake ? 'disabled' : ''
          }>Add/Take Quiz</button>
          <hr />
          <button class="button-delete" type="button">Delete Quiz</button>
        </div>
      </form>
    `;
  };
  this.render();

  targetEl.appendChild(createFormWrapperEl);

  createFormWrapperEl.addEventListener('submit', (e) => {
    e.preventDefault();
    onSubmit && onSubmit(this.state.newQuestion);
  });

  createFormWrapperEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('button-take')) {
      const resultSubmit = onSubmit(this.state.newQuestion);
      if (resultSubmit) {
        onTake && onTake(e);
      }
    } else if (e.target.classList.contains('button-delete')) {
      onDelete && onDelete(e);
    }
  });

  createFormWrapperEl.addEventListener('change', (e) => {
    onChange && onChange(e);
  });
}

// form.... 어렵다. 여러input의 값들을 어떻게 state로 관리해야하는걸까.
// 또 이 state의 vaildate는 어떻게 체크해야하는걸까.
// newQuestion 상태없이 isTake상태만 관리하고 form 값은 dom에 접근해서 submit할때 전달하는 방식으로 하는거 어떨까?
