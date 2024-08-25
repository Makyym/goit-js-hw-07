const listEl = document.getElementById(`categories`);
const listItemsEl = listEl.querySelectorAll(`.item`);
console.log(`Number of categories: ${listItemsEl.length}`);
listItemsEl.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
});