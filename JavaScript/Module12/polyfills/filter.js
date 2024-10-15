const arr = [1, 2, 3, 4, 5];

const modifiedArray = arr.filter((element, index, array) => {
  return element % 2 === 0;
});

console.log(modifiedArray); // [2, 4]

// Add a custom method 'myFilter' to the Array prototype
Array.prototype.myFilter = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  // Initialize an empty array to store the results
  const result = [];

  // Iterate over each element in the array
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  // Return the array containing the filtered elements
  return result;
};

const modifiedArray2 = arr.myFilter((element, index, array) => {
  return element % 2 === 0;
});

console.log(modifiedArray2); // [2, 4]
