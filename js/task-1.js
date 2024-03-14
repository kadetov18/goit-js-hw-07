const categoriesUl = document.getElementById("categories");
const categoriesCount = categoriesUl.querySelectorAll("li.item", `h2`).length;
console.log(`Number of categories: ${categoriesCount}`);

const categoriesItems = categoriesUl.querySelectorAll("li.item");
categoriesItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector("h2").textContent;
  const categoryItemCount = categoryItem.querySelectorAll("li").length;

  console.log(`Category: ${categoryTitle} Elements: ${categoryItemCount}`);
});
