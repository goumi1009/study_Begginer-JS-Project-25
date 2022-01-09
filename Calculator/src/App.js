import NumberView from './components/NumberView.js';
import NumberPad from './components/NumberPad.js';
import OperatorPad from './components/OperatorPad.js';
import Button from './components/Button.js';

export default function ({ targetEl }) {
  const container = document.createElement('div');
  container.classList.add('calculator-container');

  this.state = {
    view: 0,
    leftSide: '',
    rightSide: '',
    operator: '',
  };
  this.setState = (nextState) => {
    console.log(nextState);
    this.state = nextState;
    numberView.setState(nextState.view);
  };

  const numberView = new NumberView({
    targetEl: container,
    initialstate: this.state.view,
  });

  new NumberPad({
    targetEl: container,
    onClick: (e) => {
      const target = e.target.innerText;
      if (this.state.view === 0) {
        this.setState({
          ...this.state,
          view: target,
          leftSide: target,
        });
      } else {
        if (!this.state.operator) {
          this.setState({
            ...this.state,
            view: this.state.view + target,
            leftSide: this.state.leftSide + target,
          });
        } else {
          this.setState({
            ...this.state,
            view: this.state.view + target,
            rightSide: this.state.rightSide + target,
          });
        }
      }

      if (target === 'C') {
        this.setState({
          view: 0,
          leftSide: '',
          rightSide: '',
          operator: '',
        });
      }
    },
  });

  new OperatorPad({
    targetEl: container,
    onClick: (e) => {
      const target = e.target.innerText;
      if (this.state.view === 0) return;
      this.setState({
        ...this.state,
        view: this.state.leftSide + target,
        operator: target,
      });
    },
  });

  new Button({
    targetEl: container,
    textContent: '=',
    onClick: (e) => {
      const res = calcFunc(
        this.state.leftSide,
        this.state.rightSide,
        this.state.operator
      );
      this.setState({
        view: res,
        leftSide: res,
        rightSide: '',
        operator: '',
      });
    },
  });

  function calcFunc(left, right, operator) {
    left = Number(left);
    right = Number(right);
    switch (operator) {
      case '+':
        return left + right;
      case '-':
        return left - right;
      case '*':
        return left * right;
      case '/':
        return left / right;
      default:
        console.log('잘못된 입력입니다.');
    }
  }

  targetEl.appendChild(container);
}
