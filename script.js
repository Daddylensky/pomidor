document.addEventListener("DOMContentLoaded", function() {
  let timerInterval;
  let minutes;
  let seconds;
  let mySound = new Audio('audio.mp3');

  function setTime(newMinutes, newSeconds) {
    minutes = newMinutes;
    seconds = newSeconds;
    updateDisplay();
  }

  function updateDisplay() {
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  }


function updateDisplay() {
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

document.getElementById('start-button').addEventListener('click', function() {
  clearInterval(timerInterval);
  timerInterval = setInterval(function() {
    if (seconds === 0) {
      if (minutes === 0) {
        mySound.play().catch(error => console.log("Audio play failed:", error));
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
  setTime(25, 0);
});

document.getElementById('apply-settings').addEventListener('click', function() {
  let newMinutes = parseInt(document.getElementById('settings-minutes').value, 10) || 0;
  let newSeconds = parseInt(document.getElementById('settings-seconds').value, 10) || 0;
  if (newSeconds >= 60) {
    let extraMinutes = Math.floor(newSeconds / 60);
    newMinutes += extraMinutes;
    newSeconds = newSeconds % 60;
  }
  setTime(newMinutes, newSeconds);
});


document.getElementById('settings-button').addEventListener('click', function() {
  const settingsTab = document.getElementById('settings-tab');
  if (settingsTab.style.display === 'none' || settingsTab.style.display === '') {
    settingsTab.style.display = 'block';
  } else {
    settingsTab.style.display = 'none';
  }
});


setTime(25, 0);
});
