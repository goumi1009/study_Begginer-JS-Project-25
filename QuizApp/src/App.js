import CreateQuestion from './components/CreateQuestion.js';
import Header from './components/Header.js';
import Questions from './components/Questions.js';

export default function ({ targetEl }) {
  const contentWrapperEl = document.createElement('section');
  contentWrapperEl.className = 'container';

  this.state = {
    title: 'Quiz Pro',
    questions: [
      {
        id: 1,
        question: '질문',
        answers: [
          {
            isCorrect: false,
            text: '답변1',
          },
          {
            isCorrect: false,
            text: '답변2',
          },
          {
            isCorrect: true,
            text: '답변3',
          },
          {
            isCorrect: false,
            text: '답변4',
          },
        ],
      },
      {
        id: 2,
        question: '질문2',
        answers: [
          {
            isCorrect: true,
            text: '답변1',
          },
          {
            isCorrect: false,
            text: '답변2',
          },
          {
            isCorrect: false,
            text: '답변3',
          },
          {
            isCorrect: false,
            text: '답변4',
          },
        ],
      },
    ],
  };

  this.setState = (nextState) => {
    this.state = nextState;
    questions.setState(this.state.questions);
  };

  new Header({
    targetEl,
    textContent: this.state.title,
  });

  targetEl.appendChild(contentWrapperEl);

  new CreateQuestion({
    targetEl: contentWrapperEl,
    onSubmit: () => {
      console.log('질문추가');
    },
    onDelete: (e) => {
      this.setState({
        ...this.state,
        questions: [],
      });
    },
    onTake: (e) => {
      console.log('풀자');
    },
  });

  const questions = new Questions({
    targetEl: contentWrapperEl,
    initialstate: this.state.questions,
  });
}
