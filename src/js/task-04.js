// знаходимо відображення лічильника
const counterValueEl = document.querySelector("#value");
// ініціалізуємо лічильник
let counterValue = 0;
// знаходимо кнопки
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

// функції збільшення-зменшення
function decrementFunc() {
  counterValue -= 1;
  return (counterValueEl.textContent = counterValue);
}
function incrementFunc() {
  counterValue += 1;
  return (counterValueEl.textContent = counterValue);
}

// "слухачі"
decrementBtn.addEventListener("click", decrementFunc);
incrementBtn.addEventListener("click", incrementFunc);
