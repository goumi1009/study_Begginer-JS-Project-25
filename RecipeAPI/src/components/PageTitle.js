export default function ({ targetEl, title }) {
  const titleEl = document.createElement('h2');
  titleEl.textContent = title;
  targetEl.appendChild(titleEl);
}
