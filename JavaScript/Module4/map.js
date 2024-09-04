let arr = [1, 2, 3, 4, 5];

let squareArray = [];

/* for (let i = 0; i < arr.length; i++) {
  squareArray.push(arr[i] * arr[i]);
}

console.log(squareArray); */

//map
const output = arr.map((value, index, arr) => {
  //   console.log(value, index, arr);
  return value * 2;
});

console.log(output);

const squaredArray = arr.map((value) => {
  return value * value;
});

console.log(`squaredArray --> ${squaredArray}`);

const transcations = [1000, 3000, 4000, 2000, -80, 3800, -4500];
const intToUSD = 80;

const usdMoney = transcations.map((amount) => {
  return amount / intToUSD;
});

console.log(usdMoney);
