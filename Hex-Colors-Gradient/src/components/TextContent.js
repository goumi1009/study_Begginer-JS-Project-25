export default function ({ containerEl, initialstate }) {
  const textEl = document.createElement('p');
  const colorTextEl = document.createElement('p');
  containerEl.appendChild(textEl);
  textEl.textContent = `CLICK THE BUTTON BELLOW TO GENERATE A RANDOM GRADIENT HEX COLOR COMBINATION`;
  containerEl.appendChild(colorTextEl);
  this.state = initialstate;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    colorTextEl.textContent = `backGroundImage: linear-gradient(to right, ${this.state})`;
  };
  this.render();
}
