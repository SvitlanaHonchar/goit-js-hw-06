const inputEl = document.querySelector("#font-size-control");
console.dir(inputEl);
let textEl = document.querySelector("#text");

inputEl.addEventListener("input", () => {
  textEl.style.fontSize = inputEl.value + "px";
});
