const input = document.querySelector("#input");

function debounce(func, delay = 1000) {
  let timeoutId;
  return function (event) {
    if (timeoutId != null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => func(event), delay);
  };
}

function makeNetworkCall(event) {
  console.log("Input event fired", event.target.value);
}

const debounceInputChange = debounce(makeNetworkCall);

input.addEventListener("input", debounceInputChange);
