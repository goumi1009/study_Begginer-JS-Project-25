import Button from './Button.js';

export default function ({ targetEl, onClick }) {
  const operatorEl = document.createElement('div');
  operatorEl.classList.add('calculator-operators');
  const numberArray = ['+', '-', '*', '/'];
  for (let i = 0; i < numberArray.length; i++) {
    new Button({
      targetEl: operatorEl,
      textContent: numberArray[i],
      onClick,
    });
  }

  targetEl.appendChild(operatorEl);
}
