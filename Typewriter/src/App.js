export default function App(targetEl) {
  this.quote = '';
  this.setQuote = (nextQuote) => {
    this.quote = nextQuote;
    this.quoteRender();
  };

  this.isTyping = false;
  this.setIsTyping = (isTyping) => {
    this.isTyping = isTyping;
    this.cursorRenter();
  };

  const requestQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => this.setQuote(data.content));
  };

  const typingText = (n) => {
    if (n > this.quote.length - 1) {
      this.setIsTyping(false);
      setTimeout(() => {
        targetEl.textContent = '';
        requestQuote();
      }, 3000);
      return;
    }

    this.setIsTyping(true);
    setTimeout(() => {
      targetEl.textContent += this.quote[n];
      typingText(++n);
    }, 100);
  };

  this.quoteRender = () => {
    typingText(0);
  };

  this.cursorRenter = () => {
    if (this.isTyping) {
      targetEl.classList.remove('waiting');
    } else {
      targetEl.classList.add('waiting');
    }
  };

  this.init = () => {
    setTimeout(() => {
      requestQuote();
    }, 1000);
  };
  this.init();
}
