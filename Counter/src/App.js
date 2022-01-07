import CounterBox from './components/CounterBox.js';

export default function ({ targetEl }) {
  const appEl = document.createElement('div');
  targetEl.appendChild(appEl);

  new CounterBox({ targetEl });
}
