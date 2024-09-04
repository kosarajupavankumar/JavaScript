const fs = require("fs");

console.log("Before");

let data1 = fs.readFile("f1.txt", (err, data) => {
  if (err) {
    console.log(`Error occurred`, data);
    return;
  }
  console.log(`This is File 1 data ` + data);
});

console.log("end");
