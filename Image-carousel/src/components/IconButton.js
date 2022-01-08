export default function ({ targetEl, icon, type = 'button', onClick }) {
  const buttonEl = document.createElement('button');
  buttonEl.classList.add('icon-button');
  buttonEl.type = type;

  const iconEl = document.createElement('i');
  iconEl.dataset.feather = icon;
  buttonEl.appendChild(iconEl);

  targetEl.appendChild(buttonEl);

  buttonEl.addEventListener('click', (e) => {
    onClick();
  });
}
