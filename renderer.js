let isClockedIn = false;
let startTime = null;
let intervalId = null;
let totalHours = 0;

const toggleBtn = document.getElementById('toggle');
const logBox = document.getElementById('log');
const timerDisplay = document.getElementById('timerDisplay');

function clockIn() {
  startTime = new Date();
  toggleBtn.textContent = "Clock Out";
  isClockedIn = true;

  intervalId = setInterval(() => {
    const elapsed = (new Date() - startTime) / 1000 / 60 / 60;
    const rounded = Math.round(elapsed * 4) / 4;
    timerDisplay.textContent = `Current Time: ${rounded.toFixed(2)} hrs`;
  }, 250);
}

function clockOut() {
  const endTime = new Date();
  const hours = ((endTime - startTime) / 1000 / 60 / 60);
  const rounded = Math.round(hours * 4) / 4;

  totalHours += rounded;
  document.getElementById('totalDisplay').textContent = `Total: ${totalHours.toFixed(2)} hrs`;

  const log = `${startTime.toLocaleString()} - ${endTime.toLocaleString()} = ${rounded} hrs\n`;
  logBox.value += log;

  toggleBtn.textContent = "Clock In";
  isClockedIn = false;
  startTime = null;

  clearInterval(intervalId);
  timerDisplay.textContent = "";
}

toggleBtn.addEventListener('click', () => {
  if (isClockedIn) {
    clockOut();
  } else {
    clockIn();
  }
});

const resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', () => {
  isClockedIn = false;
  startTime = null;
  clearInterval(intervalId);
  intervalId = null;
  totalHours = 0;
  document.getElementById('totalDisplay').textContent = "";
  toggleBtn.textContent = "Clock In";
  timerDisplay.textContent = "";
  logBox.value = "";
});

if (!process.env.QUICK_CLOCK_NO_CLOCK_IN) {
  clockIn();
}
