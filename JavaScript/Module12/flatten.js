// Problem : 1
// Implement the 'flatten' function that takes a multi-dimensional array as an argument and returns a single-dimensional array.

// The 'flatten' function should be able to handle multiple levels of nested arrays.

const arr = [1, 2, [3, 4, [5, 6]], [7, 8], 9];

Array.prototype.flatten = function () {
  return this.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(val.flatten()) : acc.concat(val), []);
};

const flattenedArray = arr.flatten();
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
