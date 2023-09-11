let minutes = 25;
let seconds = 0;
let timer;

// Function to change timer based on input
function changeTimer(event) {
  if (event.keyCode === 13) {  // Enter key
    const str = event.target.value;
    if (!isNaN(parseInt(str))) {
      minutes = parseInt(str);
      seconds = 0;
      document.getElementById('timer').innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
  }
}

// Timer function
function startTimer() {
  timer = setInterval(function () {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timer);
        return;
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }
    
    document.getElementById('timer').innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function reset() {
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    document.getElementById('timer').innerHTML = `25:00`;
}

// Attach event
document.getElementById('start-button').addEventListener('click', function() {
  clearInterval(timer);
  startTimer();
});

document.getElementById('pause-button').addEventListener('click', pauseTimer);

document.getElementById('reset-button').addEventListener('click', reset);

// Attach event to capture "Enter" key press
document.getElementById('timerInput').addEventListener('keypress', changeTimer);
