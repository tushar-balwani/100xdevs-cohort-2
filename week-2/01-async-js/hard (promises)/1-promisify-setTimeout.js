/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  const p = new Promise(function (resolve) {
    resolve(n);
  });
  return p;
}

wait(2).then(function (n) {
  setTimeout(function () {
    console.log("Hello to JavaScript Promise");
  }, n * 1000);
});
