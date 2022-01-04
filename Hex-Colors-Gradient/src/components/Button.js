export default function ({ containerEl, onclick }) {
  const buttonEl = document.createElement('button');
  buttonEl.textContent = 'Change Gradient!';
  containerEl.appendChild(buttonEl);
  buttonEl.addEventListener('click', () => {
    onclick();
  });
}
