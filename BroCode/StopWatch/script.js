const clock = document.getElementById("clock");
const btnStop = document.getElementById("btnStop");
const btnContinue = document.getElementById("btnContinue");
const btnReset = document.getElementById("btnReset");

let startTime = 0;
let timer = null;
let elapsedTime = 0;
let isRunning = false;

function startTimer() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateClock, 10);
    isRunning = true;
  }
}

function stopTimer() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  }
}

function resetTimer() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  clock.innerHTML = `00:00:00:00`;
}

function updateClock() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let time = new Date(elapsedTime);

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
    .toString()
    .padStart(2, 0);
  let minutes = time.getMinutes().toString().padStart(2, 0);
  let seconds = time.getSeconds().toString().padStart(2, 0);
  let milliseconds = (parseInt(time.getMilliseconds()) / 10)
    .toFixed(0)
    .toString()
    .padStart(2, 0);

  clock.innerHTML = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

btnContinue.addEventListener("click", startTimer);
btnStop.addEventListener("click", stopTimer);
btnReset.addEventListener("click", resetTimer);
