// знаходимо інпут і аутпут
const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

// присвоєння
nameInputEl.addEventListener("input", () => {
  if (nameInputEl.value === "") {
    nameOutputEl.textContent = "Anonymous";
    return;
  }

  return (nameOutputEl.textContent = nameInputEl.value.trim());
});
