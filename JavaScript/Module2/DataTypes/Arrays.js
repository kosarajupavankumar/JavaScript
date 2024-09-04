// Arrays
let arr = [];

let arr1 = [1, 2, 3, 4, 5, 6];

let arr2 = [1, "scaler", true, undefined, null, [5, 6, 7]];

// Accessing the array elements
console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[2]);
console.log(arr2[3]);
console.log(arr2[4]);
console.log(arr2[5]);
console.log(arr2[6]);

console.log(typeof arr);
console.log(arr2);

arr2.push("Hello"); // push at an end of the array

arr2.pop() // delete the element at the end of an array

// unshift and shift 

arr2.unshift("Urs"); // adds the element at the start of an array
arr2.shift(); // remove the first element of an array

