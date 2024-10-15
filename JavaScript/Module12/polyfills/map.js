let arr = [1, 2, 3, 4, 5];

const modifiedArray = arr.map((element, index, array) => {
  return element * element;
});

console.log(modifiedArray); // [1, 4, 9, 16, 25]

// Add a custom method 'myMap' to the Array prototype
Array.prototype.myMap = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  
  // Initialize an empty array to store the results
  const result = [];

  // Iterate over each element in the array
  for (let i = 0; i < this.length; i++) {
    // Apply the callback function to the current element, its index, and the entire array
    // Push the result of the callback function into the result array
    result.push(callback(this[i], i, this));
  }

  // Return the array containing the results of the callback function
  return result;
};

const modifiedArray2 = arr.myMap((element, index, array) => {
  return element * element;
});

console.log(modifiedArray2); // [1, 4, 9, 16, 25]
