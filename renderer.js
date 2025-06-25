let isClockedIn = false;
let startTime = null;
let intervalId = null;

const toggleBtn = document.getElementById('toggle');
const logBox = document.getElementById('log');
const timerDisplay = document.getElementById('timerDisplay');

toggleBtn.addEventListener('click', () => {
  const now = new Date();

  if (!isClockedIn) {
    startTime = now;
    toggleBtn.textContent = "Clock Out";
    isClockedIn = true;

    intervalId = setInterval(() => {
      const elapsed = (new Date() - startTime) / 1000 / 60 / 60;
      const rounded = Math.round(elapsed * 4) / 4;
      timerDisplay.textContent = `Current Time: ${rounded.toFixed(2)} hrs`;    }, 250);

  } else {
    const endTime = now;
    const hours = ((endTime - startTime) / 1000 / 60 / 60);
    const rounded = Math.round(hours * 4) / 4;

    const log = `${startTime.toLocaleString()} - ${endTime.toLocaleString()} = ${rounded} hrs\n`;
    logBox.value += log;

    toggleBtn.textContent = "Clock In";
    isClockedIn = false;
    startTime = null;

    clearInterval(intervalId);
    timerDisplay.textContent = "";
  }
});
