const btn = document.querySelector("#toggle-button");
const sidebar = document.querySelector("#sidebar");
const mainContent = document.querySelector("#main-content");

// add or remove class for every click
btn.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar");
  mainContent.classList.toggle("main-content");
});
