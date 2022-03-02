import { createEl } from './../util.js';

export default function ({ targetEl, textContent }) {
  const headerEl = createEl('h1');
  headerEl.textContent = textContent;
  targetEl.appendChild(headerEl);
}
