import Button from './Button.js';
import Input from './Input.js';

export default function ({ targetEl, clickCardSave }) {
  const formEl = document.createElement('form');
  const h2El = document.createElement('h2');
  h2El.textContent = 'Create Flashcard';
  formEl.appendChild(h2El);

  this.state = {
    isForm: false,
    visible: false,
    question: '',
    answer: '',
  };

  this.setState = (nextState) => {
    this.state = nextState;
    questionInput.setState(nextState.question);
    answerInput.setState(nextState.answer);
    this.render();
  };

  const questionInput = new Input({
    targetEl: formEl,
    label: 'Question',
    id: 'question',
    onChange: (e) => {
      this.setState({
        ...this.state,
        question: e.target.value,
      });
    },
  });

  const answerInput = new Input({
    targetEl: formEl,
    label: 'Answer',
    id: 'answer',
    onChange: (e) => {
      this.setState({
        ...this.state,
        answer: e.target.value,
      });
    },
  });

  new Button({
    targetEl: formEl,
    textContent: 'Save',
    type: 'submit',
    onClick: (e) => {},
  });
  new Button({
    targetEl: formEl,
    textContent: 'Close',
    onClick: (e) => {
      this.setState({
        ...this.state,
        isForm: false,
      });
    },
  });

  targetEl.appendChild(formEl);

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    clickCardSave(this.state);
    this.setState({
      ...this.state,
      question: '',
      answer: '',
    });
  });

  this.render = () => {
    this.state.isForm
      ? (formEl.style.display = 'block')
      : (formEl.style.display = 'none');
    this;
  };

  this.render();
}
