const fs = require("fs").promises;
const path = require("path");

// List of filenames
const files = ["f1.txt", "f2.txt", "f3.txt"];

// Directory where the files are located
const directoryPath = path.join(__dirname);

// Function to read files serially
async function readFilesSerially() {
  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    try {
      const data = await fs.readFile(filePath, "utf8");
      console.log(`Contents of ${file}:`);
      console.log(data);
    } catch (err) {
      console.error(`Error reading file ${file}:`, err);
    }
  }
}

// Execute the function
readFilesSerially();
