let arr = [1, 2, 5, 7, 2, 6, 9, 10, 12, 15];

// return the new array which contains only even numbers

const newArray = arr.filter((value) => value % 2 == 0);

console.log(newArray);

const transcations = [1000, 3000, 4000, 2000, -80, 3800, -4500];

const creditTranscations = transcations.filter((amount) => amount > 0);

console.log(creditTranscations);
