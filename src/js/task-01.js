// знаходимо кількість категорій
const categoriesList = document.querySelector("#categories");
const categoriesNum = categoriesList.children.length;
console.log(`Number of categories: ${categoriesNum}`);

// знаходимо заголовок категорій і кількість елементів
const items = document.querySelectorAll(".item");

items.forEach(function (item) {
  //   заголовок
  const title = item.firstElementChild;
  console.log(title.textContent);

  // кількість елементів
  const elementsList = item.querySelectorAll("li");
  const elementsNum = elementsList.length;
  console.log(`Elements: ${elementsNum}`);
});
