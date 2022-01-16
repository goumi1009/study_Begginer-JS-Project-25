export default function ({
  targetEl,
  type = 'text',
  name,
  label,
  id,
  onChange,
}) {
  const inputEl = document.createElement('input');
  const labelEl = document.createElement('label');
  inputEl.name = name;
  inputEl.type = type;
  inputEl.id = id;
  labelEl.textContent = label;
  labelEl.htmlFor = id;
  targetEl.appendChild(labelEl);
  targetEl.appendChild(inputEl);

  inputEl.addEventListener('change', (e) => onChange(e));
}
