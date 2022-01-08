import Clock from './components/Clock.js';

export default function ({ targetEl }) {
  const container = document.createElement('div');
  container.classList.add('container');

  targetEl.appendChild(container);

  new Clock({ targetEl: container });
}
