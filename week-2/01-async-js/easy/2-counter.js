// Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function counter() {
  setTimeout(function () {
    console.log("Welcome");
    counter();
  }, 1000);
}

counter();

// (Hint: setTimeout)
