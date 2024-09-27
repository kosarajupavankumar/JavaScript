const grandparent = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

grandparent.addEventListener("click", (e) => {
  console.log("Grandparent clicked");
  console.log(e.target, e.currentTarget);
}, true);

parent.addEventListener("click", (e) => {
  console.log("Parent clicked");
  console.log(e.target, e.currentTarget);
  e.stopPropagation();
}, false);

child.addEventListener("click", (e) => {
  console.log("Child clicked");
  console.log(e.target, e.currentTarget);
}, false);
