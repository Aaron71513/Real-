let alertActive = true;
let intervalIndex = 0;
const intervalOptions = ["Wave Interval", "Sunset Countdown"];

function updateWaveInterval() {
  document.getElementById("waveInterval").innerText = "Wave Interval: ~11 min";
}

function updateSunsetCountdown() {
  const now = new Date();
  const sunset = new Date();
  sunset.setHours(19, 45, 0); // Sample sunset time
  const diff = sunset - now;
  const mins = Math.floor(diff / 60000);
  document.getElementById("sunsetCountdown").innerText = `Sunset in: ${mins} min`;
}

function checkRipCurrentWarning() {
  const ripLevel = 3; // Simulated danger level (1–5)
  if (ripLevel >= 3 && alertActive) {
    document.getElementById("ripWarning").classList.remove("hidden");
  }
}

function acknowledgeAlert() {
  alertActive = false;
  document.getElementById("ripWarning").classList.add("hidden");
}

function rotateDisplay() {
  const sections = ["waveInterval", "sunsetCountdown"];
  sections.forEach(id => document.getElementById(id).style.display = "none");
  document.getElementById(sections[intervalIndex % sections.length]).style.display = "block";
  intervalIndex++;
}

updateWaveInterval();
updateSunsetCountdown();
checkRipCurrentWarning();
rotateDisplay();
setInterval(updateSunsetCountdown, 60000);
setInterval(rotateDisplay, 7000);
