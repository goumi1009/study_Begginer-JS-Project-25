export default function ({ targetEl }) {
  this.time = {
    min: 0,
    sec: 0,
    msec: 0,
    time: 0,
  };

  this.setTime = (time) => {
    this.time = time;
    this.render();
  };

  this.timerState = false;

  this.setTimerState = (state) => {
    this.timerState = state;
  };

  const formattingTime = (time) => {
    if (time < 10) {
      return '0' + time;
    }
    return time;
  };

  let timerInterval;
  const startTimer = () => {
    let time = this.time.time;
    timerInterval = setInterval(() => {
      time += 10;
      this.setTime({
        min: Math.floor((time / (1000 * 60)) % 60),
        sec: Math.floor((time / 1000) % 60),
        msec: (time / 10) % 100,
        time: time,
      });
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(timerInterval);
  };

  const resetTimer = () => {
    this.setTime({
      min: 0,
      sec: 0,
      msec: 0,
      time: 0,
    });
  };

  const timerEl = document.createElement('div');
  timerEl.classList.add('timer');

  this.render = () => {
    let { min, sec, msec } = this.time;
    min = formattingTime(min);
    sec = formattingTime(sec);
    msec = formattingTime(msec);
    timerEl.textContent = `${min} : ${sec} : ${msec}`;
  };

  this.render();

  targetEl.appendChild(timerEl);

  timerEl.addEventListener('click', () => {
    if (this.timerState) {
      stopTimer();
    } else {
      startTimer();
    }
    this.setTimerState(!this.timerState);
  });

  timerEl.addEventListener('dblclick', () => {
    resetTimer();
  });
}
