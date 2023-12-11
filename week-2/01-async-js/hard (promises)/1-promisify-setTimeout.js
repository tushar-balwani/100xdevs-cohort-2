/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  const p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, n * 1000);
  });
  return p;
}

// wait(2).then(function (n) {
//   setTimeout(function () {}, n * 1000);
// });

module.exports = wait;
