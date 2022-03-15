import CreateQuestion from './components/CreateQuiz.js';
import Header from './components/Header.js';
import Quizzes from './components/Quizzes.js';

export default function ({ targetEl }) {
  const contentWrapperEl = document.createElement('section');
  contentWrapperEl.className = 'container';

  this.state = {
    pageTitle: 'Quiz Pro',
    quizzes: [],
    newQuestion: {
      question: '',
      answers: Array(4).fill(''),
      correctIndex: null,
    },
    isTake: false,
  };

  new Header({
    targetEl,
    textContent: this.state.pageTitle,
  });

  targetEl.appendChild(contentWrapperEl);

  const createQuestion = new CreateQuestion({
    targetEl: contentWrapperEl,
    initialState: {
      isTake: this.state.isTake,
      newQuestion: this.state.newQuestion,
    },
    onSubmit: (newQuestion) => {
      if (!newQuestion.correctIndex) {
        alert('정답을 체크해주세요.');
        return;
      }

      if (!newQuestion.question) {
        alert('form을 모두 작성해주세요.');
        return;
      }

      this.setState({
        ...this.state,
        quizzes: [...this.state.quizzes, newQuestion],
        newQuestion: {
          question: '',
          answers: Array(4).fill(''),
          correctIndex: null,
        },
      });

      return true;
    },
    onChange: (e) => {
      if (e.target.id === 'question') {
        this.setState({
          ...this.state,
          newQuestion: {
            ...this.state.newQuestion,
            question: e.target.value,
          },
        });
      } else if (e.target.type === 'radio') {
        const { answerId } = e.target.closest('.form-row').dataset;
        this.setState({
          ...this.state,
          newQuestion: {
            ...this.state.newQuestion,
            correctIndex: answerId,
          },
        });
      } else if (e.target.type === 'text') {
        const { answerId } = e.target.closest('.form-row').dataset;
        const nextState = this.state.newQuestion.answers.map((answer, i) =>
          parseInt(answerId) === i ? e.target.value : answer
        );
        this.setState({
          ...this.state,
          newQuestion: {
            ...this.state.newQuestion,
            answers: nextState,
          },
        });
      }
    },
    onDelete: (e) => {
      this.setState({
        ...this.state,
        quizzes: [],
        isTake: false,
      });
    },
    onTake: (e) => {
      this.setState({
        ...this.state,
        isTake: true,
      });
    },
  });

  const quizzes = new Quizzes({
    targetEl: contentWrapperEl,
    initialstate: {
      quizzes: this.state.quizzes,
      isTake: this.state.isTake,
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;
    createQuestion.setState({
      newQuestion: this.state.newQuestion,
      isTake: this.state.isTake,
    });
    quizzes.setState({
      quizzes: this.state.quizzes,
      isTake: this.state.isTake,
    });
  };
}
