export default function ({ targetEl }) {
  const dateEl = document.createElement('p');
  dateEl.classList.add('clock');

  function getTime() {
    const newDate = new Date();
    const dayNameArray = ['일', '월', '화', '수', '목', '금', '토'];
    const day = dayNameArray[newDate.getDay()];
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    const isPm = hours >= 12;
    return {
      day,
      hours,
      minutes,
      isPm,
    };
  }

  targetEl.appendChild(dateEl);

  this.state = getTime();
  this.setState = (nextSate) => {
    this.state = nextSate;
    this.render();
  };

  setInterval(() => {
    this.setState(getTime());
  }, 1000);

  this.render = () => {
    const { day, hours, minutes, isPm } = this.state;
    const hoursCalc = () => {
      let res = hours;
      isPm && (res = res % 12);
      res === 0 && (res = 12);
      res < 10 && (res = '0' + res);
      return res;
    };
    dateEl.textContent = `
      ${day} 
      ${hoursCalc()} : 
      ${minutes < 10 ? '0' + minutes : minutes} : 
      ${isPm ? 'PM' : 'AM'}
    `;
  };

  this.render();
}
