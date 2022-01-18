export default function ({ targetEl, textContent, type = 'button', onClick }) {
  const buttonEl = document.createElement('button');
  buttonEl.textContent = textContent;
  buttonEl.type = type;

  targetEl.appendChild(buttonEl);

  buttonEl.addEventListener('click', (e) => {
    onClick(e);
  });
}
