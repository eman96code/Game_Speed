enum levelSpeeds {
  Normal = 2,
  Easy = 5,
  Medium = 15,
  Hard = 25,
}

let speed: levelSpeeds = levelSpeeds.Normal;
let speedSelect = document.querySelector('select') as HTMLSelectElement;
let gameAreaSpans = document.querySelectorAll(
  '.game_area span'
) as NodeListOf<HTMLSpanElement>;

speedSelect.addEventListener('change', updateSpeed);

function updateSpeed() {
  speed = levelSpeeds[speedSelect.value as keyof typeof levelSpeeds];
  console.log(speed);
  gameAreaSpans.forEach((span) => {
    const animationDuration = `${(1 / speed) * 5}s`;
    console.log(animationDuration);
    span.style.animationDuration = animationDuration;
  });
}
