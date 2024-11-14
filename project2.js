let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let lapCount = 1;

function start() {
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 100);
    }
}

function pause() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function reset() {
    clearInterval(timerInterval);
    timerInterval = null;
    startTime = 0;
    elapsedTime = 0;
    lapCount = 1;
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    if (timerInterval) {
        const lapTime = formatTime(elapsedTime);
        const lapItem = document.createElement("li");
        lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
        document.getElementById("laps").appendChild(lapItem);
        lapCount++;
    }
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    document.getElementById("display").textContent = formatTime(elapsedTime);
}

function formatTime(time) {
    const hours = Math.floor((time / 3600000) % 60).toString().padStart(2, "0");
    const minutes = Math.floor((time / 60000) % 60).toString().padStart(2, "0");
    const seconds = Math.floor((time / 1000) % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
}
