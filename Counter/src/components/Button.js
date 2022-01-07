export default function ({ targetEl, text, onclick }) {
  const buttonEl = document.createElement('button');
  buttonEl.textContent = text;
  targetEl.appendChild(buttonEl);
  buttonEl.addEventListener('click', () => {
    onclick();
  });
}
