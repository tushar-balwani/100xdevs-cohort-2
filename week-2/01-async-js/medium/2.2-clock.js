// HH:MM::SS AM/PM (Eg 01:45:23 PM)

setInterval(function () {
  console.log(
    new Date()
      .toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
      .toUpperCase()
  );
}, 1000);
