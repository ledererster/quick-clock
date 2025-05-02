let isClockedIn = false;
let startTime = null;

const toggleBtn = document.getElementById('toggle');
const logBox = document.getElementById('log');

toggleBtn.addEventListener('click', () => {
  const now = new Date();

  if (!isClockedIn) {
    startTime = now;
    toggleBtn.textContent = "Clock Out";
    isClockedIn = true;
  } else {
    const endTime = now;
    const hours = ((endTime - startTime) / 1000 / 60 / 60);
    const rounded = Math.round(hours * 4) / 4;

    const log = `${startTime.toLocaleString()} - ${endTime.toLocaleString()} = ${rounded} hrs\n`;
    logBox.value += log;

    toggleBtn.textContent = "Clock In";
    isClockedIn = false;
    startTime = null;
  }
});

