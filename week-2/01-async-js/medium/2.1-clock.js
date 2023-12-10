// HH:MM::SS (Eg. 13:45:23)

setInterval(function () {
  console.log(
    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
  );
}, 1000);


