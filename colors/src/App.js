import Button from './components/Button.js';

export default function App({ targetEl }) {
  this.state = {
    currentColor: 'crimson',
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  new Button({
    targetEl,
    initialState: this.state.colors,
    onClick: (randomColor) => {
      this.setState({
        ...this.state,
        currentColor: randomColor,
      });
    },
  });

  this.render = () => {
    targetEl.style.background = this.state.currentColor;
  };
  this.render();
}

// #app div를 배경이라고 생각해서 여기서 render를 했는데 이거 괜찮은걸까?
// 궁금하다 ㅋㅋㅋㅋㅋㅋ 이거
