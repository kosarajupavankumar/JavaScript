let btn = document.getElementById("btn1");

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector(".btn2");
console.log(btn2);

let allButtons = document.querySelectorAll(".btn2");
console.log(allButtons);

let button = document.querySelector("button");
console.log(button);

// Display Hello on the screen, when we click on the button

// When click then only append it
btn.addEventListener("click", (event) => {
    let divElement = document.createElement("div");
    let text = document.createTextNode("Hello World");
    divElement.appendChild(text);
    
    document.body.appendChild(divElement);
    console.log("Button clicked");
  });
