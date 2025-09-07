
    let [hours, minutes, seconds] = [0, 0, 0];
    let [lapH, lapM, lapS] = [0, 0, 0]; // lap timer
    let timer = null;
    let lapTimer = null;
    let running = false;

    const display = document.getElementById("display");
    const startStopBtn = document.getElementById("startStopBtn");
    const resetBtn = document.getElementById("resetBtn");
    const lapBtn = document.getElementById("lapBtn");
    const laps = document.getElementById("laps");

    function formatTime(h, m, s) {
      let hh = h < 10 ? "0" + h : h;
      let mm = m < 10 ? "0" + m : m;
      let ss = s < 10 ? "0" + s : s;
      return `${hh}:${mm}:${ss}`;
    }

    function updateDisplay() {
      display.innerText = formatTime(hours, minutes, seconds);
    }

    function runTimer() {
      seconds++;
      if (seconds === 60) { seconds = 0; minutes++; }
      if (minutes === 60) { minutes = 0; hours++; }
      updateDisplay();
    }

    function runLapTimer() {
      lapS++;
      if (lapS === 60) { lapS = 0; lapM++; }
      if (lapM === 60) { lapM = 0; lapH++; }
    }

    startStopBtn.addEventListener("click", () => {
      if (!running) {
        timer = setInterval(runTimer, 1000);
        lapTimer = setInterval(runLapTimer, 1000);
        startStopBtn.innerText = "Stop";
        running = true;
      } else {
        clearInterval(timer);
        clearInterval(lapTimer);
        startStopBtn.innerText = "Start";
        running = false;
      }
    });

    resetBtn.addEventListener("click", () => {
      clearInterval(timer);
      clearInterval(lapTimer);
      [hours, minutes, seconds] = [0, 0, 0];
      [lapH, lapM, lapS] = [0, 0, 0];
      updateDisplay();
      startStopBtn.innerText = "Start";
      laps.innerHTML = "";
      running = false;
    });

    lapBtn.addEventListener("click", () => {
      if (running) {
        let li = document.createElement("li");
        li.innerText = "Lap: " + formatTime(lapH, lapM, lapS);
        laps.appendChild(li);
        // reset lap timer
        [lapH, lapM, lapS] = [0, 0, 0];
      }
    });

    updateDisplay();