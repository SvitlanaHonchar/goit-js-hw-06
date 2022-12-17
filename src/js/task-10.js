function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// знаходимо елементи
const inputEl = document.querySelector("input");
const divListEl = document.querySelector("#boxes");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");

// створення елементів
function createBoxes(amount) {
  amount = Number(inputEl.value);

  let addSize = 0;
  for (let i = 0; i < amount; i += 1) {
    const newEl = document.createElement("div");
    newEl.style.width = `${30 + addSize}px`;
    newEl.style.height = `${30 + addSize}px`;
    newEl.style.backgroundColor = getRandomHexColor();

    divListEl.append(newEl);
    addSize += 10;
  }
}

// знищення елементів
function destroyBoxes() {
  divListEl.innerHTML = "";
}

// подія
createBtnEl.addEventListener("click", createBoxes);
destroyBtnEl.addEventListener("click", destroyBoxes);
