const circles = document.querySelector('.circles');
const inputs = document.querySelectorAll('.circles input');
const circle = document.querySelectorAll('.circle');
function randomColor() {
  const red = Math.round(Math.random() * 255 + 1);
  const green = Math.round(Math.random() * 255 + 1);
  const blue = Math.round(Math.random() * 255 + 1);
  const random = Math.floor(Math.random() * circle.length);
  if (circle[random] != undefined) {
    circle[random].style.backgroundColor = `rgb(${red},${green},${blue})`;
  }
  return;
}
function translateXY() {
  const random = Math.floor(Math.random() * circle.length);
  const Coords = {
    x: Math.round(Math.random() * window.innerWidth),
    y: Math.round(Math.random() * window.innerHeight),
  };

circle[random].style.transform = `translate(${Coords.x}px,${Coords.y}px)`;

  return;
}
setInterval(randomColor, 100);
setInterval(translateXY, 100);
function updateColor() {
  const red = Math.round(Math.random() * 255 + 1);
  const green = Math.round(Math.random() * 255 + 1);
  const blue = Math.round(Math.random() * 255 + 1);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    `rgb(${red},${green},${blue})`
  );
}
function handleUpdate() {
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
}
inputs.forEach((input) => input.addEventListener('change', handleUpdate));
inputs.forEach((input) => input.addEventListener('mousemove', updateColor));
