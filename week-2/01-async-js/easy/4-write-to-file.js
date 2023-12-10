// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

data = "learnign JavaScript";
fs.writeFile("4-write-content.txt", data, function (err) {
  if (err) {
    console.log(error);
  } else {
    console.log("data logged successfully");
  }
});
