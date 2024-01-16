"use strict";
var levelSpeeds;
(function (levelSpeeds) {
    levelSpeeds[levelSpeeds["Normal"] = 2] = "Normal";
    levelSpeeds[levelSpeeds["Easy"] = 5] = "Easy";
    levelSpeeds[levelSpeeds["Medium"] = 15] = "Medium";
    levelSpeeds[levelSpeeds["Hard"] = 25] = "Hard";
})(levelSpeeds || (levelSpeeds = {}));
let speed = levelSpeeds.Normal;
let speedSelect = document.querySelector('select');
let gameAreaSpans = document.querySelectorAll('.game_area span');
speedSelect.addEventListener('change', updateSpeed);
function updateSpeed() {
    speed = levelSpeeds[speedSelect.value];
    console.log(speed);
    gameAreaSpans.forEach((span) => {
        const animationDuration = `${(1 / speed) * 5}s`;
        console.log(animationDuration);
        span.style.animationDuration = animationDuration;
    });
}
