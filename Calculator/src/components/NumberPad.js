import Button from './Button.js';

export default function ({ targetEl, onClick }) {
  const numberPadEl = document.createElement('div');
  numberPadEl.classList.add('calculator-numbers');
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, 'C'];
  for (let i = 0; i < numberArray.length; i++) {
    new Button({
      targetEl: numberPadEl,
      textContent: numberArray[i],
      onClick,
    });
  }

  targetEl.appendChild(numberPadEl);
}
