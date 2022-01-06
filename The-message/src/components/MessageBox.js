import MessageForm from './MessageForm.js';
import Message from './Message.js';

export default function ({ targetEl }) {
  const boxEl = document.createElement('div');
  boxEl.classList.add('message-box');
  targetEl.appendChild(boxEl);

  boxEl.innerHTML = `
    <h1>Pass The message</h1>
    <p>Enter a message</p>
  `;

  this.state = '';
  this.setState = (nextSate) => {
    this.state = nextSate;
    message.setState(this.state);
  };

  new MessageForm({
    targetEl: boxEl,
    onSubmit: (msg) => {
      this.setState(msg);
    },
  });

  const message = new Message({
    targetEl: boxEl,
    initialState: this.state,
  });
}
