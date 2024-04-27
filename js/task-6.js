function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const arrayDivs = [];
  let widthDiv = 30;
  let heightDiv = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = widthDiv + "px";
    div.style.height = heightDiv + "px";
    div.style.backgroundColor = getRandomHexColor();
    widthDiv = widthDiv + 10;
    heightDiv = heightDiv + 10;
    arrayDivs.push(div);

  };

  boxes.append(...arrayDivs);
}

function destroyBoxes(){
  boxes.innerHTML = "";
};

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("div#controls input");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click",() => { 
  destroyBoxes();
 const inputValue = Number.parseInt(input.value);
 if (inputValue >= Number.parseInt(input.min) && inputValue <= Number.parseInt(input.max)) {
  createBoxes(inputValue);
 };

 input.value = "";

});

btnDestroy.addEventListener("click", destroyBoxes);
