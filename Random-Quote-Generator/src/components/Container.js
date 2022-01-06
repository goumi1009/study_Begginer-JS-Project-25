import Button from './Button.js';
import QuoteCard from './QuoteCard.js';
import { requestQuotes } from './../api.js';

export default function ({ targetEl }) {
  const containerEl = document.createElement('div');
  containerEl.classList.add('container');

  targetEl.appendChild(containerEl);

  this.state = null;
  this.setState = (nextstate) => {
    this.state = nextstate;
    textContent.setState(nextstate);
    this.render();
  };

  this.render = () => {};

  this.render();

  const quoteCard = new QuoteCard({
    targetEl: containerEl,
    initialsate: {
      quote:
        '"Only through our connectedness to others can we really know and enhance the self. And only through working on the self can we begin to enhance our connectedness to others."',
      author: 'Harriet Lerner',
    },
  });

  new Button({
    targetEl: containerEl,
    text: 'Generate Quote',
    onclick: async () => {
      const res = await requestQuotes();
      quoteCard.setState(res);
    },
  });
}
