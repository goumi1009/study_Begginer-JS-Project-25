export default function ({ targetEl, onSubmit }) {
  const formEl = document.createElement('form');
  targetEl.appendChild(formEl);

  this.render = () => {
    formEl.innerHTML = `
      <div>
        <input type="text" autocompolete="off" name="message" />
      </div>
      <button type="submit">Submit</button>
    `;
  };
  this.render();

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const messageInput = document.querySelector('input[name=message]');
    const message = messageInput.value;

    if (message.length > 1) {
      messageInput.value = '';
      onSubmit(message);
    }
  });
}
