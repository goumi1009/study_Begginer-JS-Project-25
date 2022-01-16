import Button from './Button.js';
import Input from './Input.js';
import Select from './Select.js';

export default function ({ targetEl, onSubmit }) {
  const formEl = document.createElement('form');

  this.state = {
    amount: '',
    guests: '',
    quality: '',
  };

  this.setState = (nextState) => {
    this.state = nextState;
  };

  new Input({
    targetEl: formEl,
    type: 'number',
    name: 'amount',
    id: 'amount',
    label: 'Bill Amount',
    onChange: (e) => {
      this.setState({
        ...this.state,
        amount: e.target.value,
      });
    },
  });

  new Input({
    targetEl: formEl,
    type: 'number',
    name: 'guests',
    id: 'guests',
    label: 'Number of Guests',
    onChange: (e) => {
      this.setState({
        ...this.state,
        guests: e.target.value,
      });
    },
  });

  new Select({
    targetEl: formEl,
    label: 'Service Quality',
    id: 'service-quality',
    onChange: (e) => {
      this.setState({
        ...this.state,
        quality: e.target.value,
      });
    },
    options: [
      {
        disabled: true,
        selected: true,
        value: 0,
        text: 'Choose...',
      },
      {
        value: 0.3,
        text: '30% - Outstanding',
      },
      {
        value: 0.2,
        text: '20% - Good',
      },
      {
        value: 0.15,
        text: '15% - It was ok',
      },
      {
        value: 0.1,
        text: '10% - Bad',
      },
      {
        value: 0.05,
        text: '5% - Terrible',
      },
    ],
  });

  new Button({
    targetEl: formEl,
    textContent: 'Calculate',
    type: 'submit',
    onClick: (e) => {},
  });

  targetEl.appendChild(formEl);

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    onSubmit(e, this.state);
  });
}
