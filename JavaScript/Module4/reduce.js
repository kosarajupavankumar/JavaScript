let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let chunkSize = 3;

// Function to break array into chunks
function chunkArray(array, size) {
  let result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

// Breaking the array into chunks
let chunks = chunkArray(arr, chunkSize);

// Applying reduce on each chunk to sum the elements
let sumOfChunks = chunks.map((chunk) => {
  return chunk.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
});

console.log(sumOfChunks); // Output: [6, 15, 24]
