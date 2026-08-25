const intro = document.getElementById("intro");
const birthday = document.getElementById("birthday");
const cardButton = document.getElementById("cardButton");
const particles = document.getElementById("particles");
const musicButton = document.getElementById("musicButton");

let opened = false;
let musicOn = false;
let audioContext;
let musicTimer;

// Create the magical floating background without external image assets.
const symbols = ["✦", "✧", "•", "❀", "✿", "✦", "♡"];
for (let i = 0; i < 46; i++) {
  const p = document.createElement("span");
  p.className = "particle";
  p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  p.style.setProperty("--x", `${Math.random() * 100}%`);
  p.style.setProperty("--size", `${8 + Math.random() * 18}px`);
  p.style.setProperty("--duration", `${9 + Math.random() * 16}s`);
  p.style.setProperty("--delay", `${-Math.random() * 20}s`);
  p.style.opacity = 0.25 + Math.random() * 0.7;
  particles.appendChild(p);
}

function openCard() {
  if (opened) return;
  opened = true;
  intro.classList.add("opening");

  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.transform = "scale(.96)";
  }, 700);

  setTimeout(() => {
    intro.style.display = "none";
    birthday.classList.add("show");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 1500);
}

cardButton.addEventListener("click", openCard);
cardButton.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") openCard();
});

// A tiny synthesized lullaby-like background loop, so no MP3 is required.
// It starts only after the user presses the visible music button.
function startMusic() {
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const notes = [261.63, 329.63, 392.0, 329.63, 293.66, 349.23, 440.0, 349.23];
  let step = 0;

  function playNote() {
    if (!musicOn) return;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.type = "sine";
    osc.frequency.value = notes[step % notes.length];
    gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.055, audioContext.currentTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 1.15);
    osc.connect(gain).connect(audioContext.destination);
    osc.start();
    osc.stop(audioContext.currentTime + 1.2);
    step++;
    musicTimer = setTimeout(playNote, 650);
  }
  playNote();
}

musicButton.addEventListener("click", async () => {
  musicOn = !musicOn;
  musicButton.classList.toggle("playing", musicOn);
  musicButton.querySelector(".music-text").textContent = musicOn ? "Playing" : "Music";

  if (musicOn) {
    if (!audioContext) startMusic();
    else {
      await audioContext.resume();
      startMusic();
    }
  } else {
    clearTimeout(musicTimer);
  }
});