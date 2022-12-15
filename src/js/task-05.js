// знаходимо інпут і аутпут
const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

// присвоєння
nameInputEl.addEventListener("input", () => {
  return (nameOutputEl.textContent = nameInputEl.value);
});
