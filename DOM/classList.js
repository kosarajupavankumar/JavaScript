const mydiv = document.getElementById("myDiv");
console.log(mydiv.classList);

mydiv.classList.add("newClass");
console.log(mydiv.classList);

mydiv.classList.remove("newClass");
console.log(mydiv.classList);

if (mydiv.classList.contains("content")) {
  console.log("content is present");
} else {
  console.log("content is not present");
}
