
const liItemEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${liItemEl.length}`);
liItemEl.forEach(liItemEl => console.log(`Category: ${liItemEl.firstElementChild.textContent}\nElements: ${liItemEl.lastElementChild.children.length}`));