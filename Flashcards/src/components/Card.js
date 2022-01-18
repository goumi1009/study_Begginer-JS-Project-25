export default function ({ targetEl, question, answer }) {
  const cardEl = document.createElement('li');
  const questionEl = document.createElement('p');
  const answerEl = document.createElement('p');
  questionEl.textContent = question;
  answerEl.textContent = answer;
  cardEl.appendChild(questionEl);
  cardEl.appendChild(answerEl);

  targetEl.appendChild(cardEl);
}
