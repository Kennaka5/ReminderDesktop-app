const notifier = require("node-notifier");

// define function for desktop notifications
function desktopNotification(name, message) {
  console.log("desktopNotification");
  notifier.notify({
    title: name,
    message: message,
  });
}

module.exports = desktopNotification;