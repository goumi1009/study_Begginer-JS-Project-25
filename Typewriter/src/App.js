export default function App(targetEl) {
  this.quote = '';
  this.setQuote = (nextQuote) => {
    this.quote = nextQuote;
    this.render();
  };

  const requestQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => this.setQuote(data.content));
  };

  const typingText = (n) => {
    if (n > this.quote.length - 1) {
      setTimeout(() => {
        targetEl.textContent = '';
        requestQuote();
      }, 2000);
      retrun;
    }

    setTimeout(() => {
      targetEl.textContent += this.quote[n];
      // n += 1;
      // 민자쓰 팁
      typingText(++n);
    }, 100);
  };

  this.render = () => {
    typingText(0);
  };

  this.init = () => {
    setTimeout(() => {
      requestQuote();
    }, 1000);
  };
  this.init();
}
