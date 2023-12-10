// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

// read write opetaion
fs.readFile("1-file-cleaner-read-data.txt", "utf-8", function (err, data) {
  if (err) {
    console.log("error in reading file \n" + err);
  } else {
    console.log("file read successfully");
    const pattern = /\s\s+/g;
    const newData = data.replaceAll(pattern, " ").trim();

    fs.writeFile("1-file-cleaner-write-data.txt", newData, function (err) {
      if (err) {
        console.log("error in writing file \n" + err);
      } else {
        console.log("file written successfully");
      }
    });
  }
});
