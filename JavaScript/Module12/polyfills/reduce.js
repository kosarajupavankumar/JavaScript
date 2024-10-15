const arr = [1, 2, 3, 4, 5];

const modifiedArray = arr.reduce((accumulator, element, index, array) => {
  return accumulator + element;
});

console.log(modifiedArray); // 15


// Add a custom method 'myReduce' to the Array prototype
Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  // Check if an initialValue is provided
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  // Iterate over each element in the array
  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  // Return the final accumulated value
  return accumulator;
};

const modifiedArray2 = arr.myReduce((accumulator, element, index, array) => {
  return accumulator + element;
});

console.log(modifiedArray2); // 15