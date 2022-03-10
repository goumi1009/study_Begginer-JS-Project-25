import { requestQuotes } from './api.js';
import QuoteCard from './components/QuoteCard.js';
import Button from './components/Button.js';

export default function ({ targetEl }) {
  this.state = {};
  this.setState = (nextState) => {
    this.state = nextState;
    quoteCard.setState(this.state);
  };

  const quoteCard = new QuoteCard({
    targetEl,
    initialsate: this.state,
  });

  new Button({
    targetEl,
    text: 'Generate Quote',
    onclick: async () => {
      fetchQuote();
    },
  });

  const fetchQuote = async () => {
    const res = await requestQuotes();
    this.setState(res);
  };
  fetchQuote();
}
