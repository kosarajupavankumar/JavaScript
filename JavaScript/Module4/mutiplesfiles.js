const fs = require('fs');
const path = require('path');

// List of filenames
const files = ['f1.txt', 'f2.txt', 'f3.txt'];

// Directory where the files are located
const directoryPath = path.join(__dirname);

files.forEach((file) => {
    const filePath = path.join(directoryPath, file);

    // Reading the file asynchronously
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file ${file}:`, err);
            return;
        }
        console.log(`Contents of ${file}:`);
        console.log(data);
    });
});
