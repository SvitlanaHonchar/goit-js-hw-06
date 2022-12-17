const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  const inputText = inputEl.value.trim();
  if (inputText.length == 6) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
});
