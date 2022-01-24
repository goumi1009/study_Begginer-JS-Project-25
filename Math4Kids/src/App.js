export default function ({ targetEl }) {
  const createEl = (el) => document.createElement(el);
  const randomNumber = (max) => Math.floor(Math.random() * max);
  const createAddQuestion = () => {
    this.setQuestion({
      operator: '+',
      num1: randomNumber(20),
      num2: randomNumber(20),
    });
  };
  const createAddAnswer = () => {
    this.setAnswer([
      this.question.num1 + this.question.num2,
      randomNumber(40),
      randomNumber(40),
    ]);
  };
  const createSubtractQuestion = () => {
    const num1 = randomNumber(20);
    const num2 = randomNumber(num1);
    this.setQuestion({
      operator: '-',
      num1,
      num2,
    });
  };
  const createSubtractAnswer = () => {
    this.setAnswer([
      this.question.num1 - this.question.num2,
      randomNumber(20),
      randomNumber(20),
    ]);
  };
  const createDivideQuestion = () => {
    const num1 = randomNumber(20);
    const num2 = randomNumber(num1);
    this.setQuestion({
      operator: '/',
      num1,
      num2,
    });
  };
  const createDivideAnswer = () => {
    this.setAnswer([
      this.question.num1 / this.question.num2,
      randomNumber(20),
      randomNumber(20),
    ]);
  };
  const createMultiplyQuestion = () => {
    const num1 = randomNumber(20);
    const num2 = randomNumber(num1);
    this.setQuestion({
      operator: '*',
      num1,
      num2,
    });
  };
  const createMultiplyAnswer = () => {
    this.setAnswer([
      this.question.num1 * this.question.num2,
      randomNumber(400),
      randomNumber(400),
    ]);
  };
  const changeOperator = (operator) => {
    switch (operator) {
      case '+':
        createAddQuestion();
        createAddAnswer();
        return;
      case '-':
        createSubtractQuestion();
        createSubtractAnswer();
        return;
      case '*':
        createMultiplyQuestion();
        createMultiplyAnswer();
        return;
      case '/':
        createDivideQuestion();
        createDivideAnswer();
        return;
    }
  };
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const randomPosition = Math.floor(Math.random() * (i + 1));

      const temp = array[i];
      array[i] = array[randomPosition];
      array[randomPosition] = temp;
    }
    return array;
  };
  const init = () => {
    createAddQuestion();
    createAddAnswer();
  };

  this.question = {};
  this.setQuestion = (question) => {
    this.question = question;
    this.questionRender();
  };

  this.answers = {};
  this.setAnswer = (answers) => {
    this.answers = answers;
    this.answersRender();
  };

  const headerEl = createEl('h1');
  headerEl.textContent = 'MATH 4 KIDS';

  const navEl = createEl('nav');
  navEl.innerHTML = `
    <a href="#" data-operator="+">ADD</a>
    <a href="#" data-operator="-">SUBTRACT</a>
    <a href="#" data-operator="*">MULTIPLY</a>
    <a href="#" data-operator="/">DIVIDE</a>
  `;

  const questionEl = createEl('div');
  this.questionRender = () => {
    questionEl.innerHTML = `${this.question.num1} ${this.question.operator} ${this.question.num2} = ?`;
  };

  const answersEl = createEl('div');
  this.answersRender = () => {
    const answers = this.answers.map((answer) => answer);
    const answersHTML = shuffleArray(answers)
      .map(
        (answer) => `
      <button class="answer">${answer}</button>
    `
      )
      .join('');
    answersEl.innerHTML = answersHTML;
  };

  const beepAudioEl = document.createElement('audio');
  beepAudioEl.src = './src/assets/wrong-sound.MP3';

  targetEl.appendChild(headerEl);
  targetEl.appendChild(navEl);
  targetEl.appendChild(questionEl);
  targetEl.appendChild(answersEl);

  navEl.addEventListener('click', (e) => {
    e.preventDefault();
    const operator = e.target.closest('a').dataset.operator;
    changeOperator(operator);
  });

  answersEl.addEventListener('click', (e) => {
    const buttonEl = e.target.closest('button');
    if (!buttonEl) return;
    const userAnswer = buttonEl.textContent * 1;
    if (userAnswer === this.answers[0]) {
      changeOperator(this.question.operator);
    } else {
      beepAudioEl.play();
    }
  });

  init();
}
