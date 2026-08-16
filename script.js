// script.js

const rat = document.getElementById("rat");
const playArea = document.getElementById("playArea");
const scoreText = document.getElementById("score");
const winScreen = document.getElementById("winScreen");

let score = 0;

// Starting position
let x = 50;
let y = 50;

// Movement speed
let dx = 3;
let dy = 3;

let gameWon = false;

function moveRat() {
    if (gameWon) return;

    const areaWidth = playArea.clientWidth;
    const areaHeight = playArea.clientHeight;

    const ratWidth = rat.offsetWidth;
    const ratHeight = rat.offsetHeight;

    x += dx;
    y += dy;

    // Bounce off walls
    if (x <= 0 || x >= areaWidth - ratWidth) {
        dx = -dx;
    }

    if (y <= 0 || y >= areaHeight - ratHeight) {
        dy = -dy;
    }

    rat.style.left = x + "px";
    rat.style.top = y + "px";

    requestAnimationFrame(moveRat);
}

rat.addEventListener("click", () => {
    if (gameWon) return;

    score++;
    scoreText.textContent = score;

    // Increase speed every few clicks
    if (score === 4) {
        dx *= 1.3;
        dy *= 1.3;
    }

    if (score === 8) {
        dx *= 1.3;
        dy *= 1.3;
    }

    if (score >= 10) {
        gameWon = true;

        rat.style.display = "none";
        winScreen.classList.remove("hidden");
    }
});

moveRat();
