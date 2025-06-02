// Variables
const startBtn = document.getElementById("quiz-start-button");
const playBtn = document.getElementById("play-button");

// EventListener
startBtn.addEventListener("click", () => {
    window.location="host.html";
});

playBtn.addEventListener("click", () => {
    window.location="player.html";
});