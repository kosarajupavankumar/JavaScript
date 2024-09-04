const fs = require("fs");

console.log("Before");

let data1 = fs.readFileSync("f1.txt");

console.log("This is File 1 data " + data1);

console.log("end");
