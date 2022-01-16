import CalcForm from './components/CalcForm.js';
import TipText from './components/TipText.js';

export default function ({ targetEl }) {
  const titleEl = document.createElement('h1');
  titleEl.textContent = 'Tip Calculator';
  targetEl.appendChild(titleEl);

  new CalcForm({
    targetEl,
    onSubmit: (e, state) => {
      const { amount, quality, guests } = state;
      const tip = ((amount * quality) / Number(guests)).toFixed(2);
      tipText.setState(`Tip $${tip} each`);
    },
  });

  const tipText = new TipText({
    targetEl,
    text: 'Tip $0 each',
  });
}
