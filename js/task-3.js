const input = document.querySelector("#name-input");
const titleSpan = document.querySelector("#name-output");

input.addEventListener("input", (event) => {

    let trimValue = event.currentTarget.value.trim();
    titleSpan.textContent = 
    trimValue == "" ? "Anonymous" : trimValue;
});

