const changeColor = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor() {
  const colorResult = getRandomHexColor();
  body.style.backgroundColor = colorResult;

  span.textContent = colorResult;
}

changeColor.addEventListener("click", changeBackgroundColor);

