const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

const timer = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    const startTime = Date.now();

    updateClockface(0);

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;

      updateClockface(deltaTime);
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActive = false;
    updateClockface(0);
  },
};

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateClockface(time) {
  /**
   * Копипаста со стека 💩
   */
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}
