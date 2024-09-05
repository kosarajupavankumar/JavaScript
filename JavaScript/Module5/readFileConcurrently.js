const fs = require("fs");

console.log(`Before`);

const readFilePromise = fs.promises.readFile("f1.txt");

readFilePromise
  .then((result) => {
    console.log("File 1 data" + result);
    return fs.promises.readFile("f2.txt");;
  })
  .then((result) => {
    console.log("File 2 data" + result);
    return fs.promises.readFile("f3.txt");;
  })
  .then((result) => {
    console.log("File 3 data" + result);
  })
  .catch((error) => {
    console.log(`unable to read the file`, error);
  });

console.log("end");
