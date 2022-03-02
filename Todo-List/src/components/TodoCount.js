import { createEl } from './../util.js';

export default function ({ targetEl, initialstate }) {
  const countEl = createEl('p');
  targetEl.appendChild(countEl);

  this.state = initialstate;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const completeCount = this.state.filter(
      ({ isComplete }) => isComplete
    ).length;
    const totalCount = this.state.length;
    countEl.textContent = `${completeCount} / ${totalCount}`;
  };
  this.render();
}
