const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// створюємо масив елементів списку
const ingredientElements = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.classList.add("item");
  ingredientItem.textContent = ingredient;

  return ingredientItem;
});

// шукаємо ul і додаємо елементи в список
const ingredientList = document.querySelector("#ingredients");
ingredientList.append(...ingredientElements);
