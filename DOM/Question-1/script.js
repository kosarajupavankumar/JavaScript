// add Item 7 at the correct position
let list = document.querySelector("ul");
let newItem = document.createElement("li");
newItem.textContent = "Item 7";
list.appendChild(newItem);
console.log(list);

let item7 = document.querySelector("li:nth-child(7)");
list.insertBefore(newItem, item7);
