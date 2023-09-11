let minutes = 25;
let seconds = 0;
let timerInterval;

// Timer Logic
document.getElementById('start-button').addEventListener('click', function() {
  clearInterval(timerInterval);
  timerInterval = setInterval(function() {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timerInterval);
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateDisplay();
  }, 1000);
});

document.getElementById('pause-button').addEventListener('click', function() {
  clearInterval(timerInterval);
});

document.getElementById('reset-button').addEventListener('click', function() {
  clearInterval(timerInterval);
  minutes = 25;
  seconds = 0;
  updateDisplay();
});

// Settings Logic
document.getElementById('settings-button').addEventListener('click', function() {
  const settingsTab = document.getElementById('settings-tab');
  settingsTab.style.display = settingsTab.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('apply-settings').addEventListener('click', function() {
  minutes = parseInt(document.getElementById('settings-minutes').value, 10);
  seconds = parseInt(document.getElementById('settings-seconds').value, 10);
  updateDisplay();
  document.getElementById('settings-tab').style.display = 'none';
});

// Update Display
function updateDisplay() {
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}
