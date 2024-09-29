const container = document.querySelector(".container");
const increment = document.querySelector("#increment");

// use the event delegation pattern
container.addEventListener("click", (event) => {
  const target = event.target;
  const number = document.querySelector("#number");
  const currentValue = parseInt(number.textContent, 10);

  switch (target.id) {
    case "add":
      // read the current value of the increment input
      const incrementValue = parseInt(increment.value, 10);
      // increment the number value by the increment value
      // update the number value in the DOM
      const newValueAdd = currentValue + incrementValue;
      number.textContent = newValueAdd;
      break;
    case "subtract":
      // read the current value of the increment input
      const decrementValue = parseInt(increment.value, 10);
      // decrement the number value by the decrement value
      // update the number value in the DOM
      const newValueSubtract = currentValue - decrementValue;
      number.textContent = newValueSubtract;
      break;
    case "reset":
      // reset the number value to 0
      number.textContent = 0;
      break;
    default:
      break;
  }
});
