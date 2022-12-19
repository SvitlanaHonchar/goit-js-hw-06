function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// знаходимо елементи
const buttonEl = document.querySelector("button");
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector("span");

// функція
function onChangeColorBtnElClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = bodyEl.style.backgroundColor;
}

// відстеження кліку
buttonEl.addEventListener("click", onChangeColorBtnElClick);
