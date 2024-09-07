async function readMutiplefilesSync() {
  try {
    const fs = require("fs");
    const files = ["f1.txt", "f2.txt", "f3.txt"];
    for (const file of files) {
      const data = fs.readFileSync(file, "utf8");
      console.log(data);
    }
  } catch (error) {
    console.error(error);
  }
}

readMutiplefilesSync();

async function readMutiplefilesAsync() {
    try {
      const fs = require("fs");
      const files = ["f1.txt", "f2.txt", "f3.txt"];
      
      const readPromises = files.map(file => fs.promises.readFile(file, "utf8"));
      const data = await Promise.all(readPromises);
      
      data.forEach(content => console.log(content));
    } catch (error) {
      console.error(error);
    }
  }
  
  readMutiplefilesAsync();