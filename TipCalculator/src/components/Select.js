export default function ({ targetEl, label, id, options, onChange }) {
  const selectEl = document.createElement('select');
  const labelEl = document.createElement('label');
  selectEl.id = id;
  labelEl.textContent = label;
  labelEl.htmlFor = id;

  targetEl.appendChild(labelEl);
  targetEl.appendChild(selectEl);

  this.render = () => {
    const optionHTML = options
      .map(
        ({ value, text, selected, disabled }) =>
          `<option value="${value}" ${selected ? 'selected' : ''} ${
            disabled ? 'disabled' : ''
          } >${text}</option>`
      )
      .join('');
    selectEl.innerHTML = optionHTML;
  };

  selectEl.addEventListener('change', (e) => {
    onChange(e);
  });

  this.render();
}
