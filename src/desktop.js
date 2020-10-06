const notifier = require("node-notifier");

// sends desktop notifications via node-notifier see : https://www.npmjs.com/package/node-notifier
function desktopNotification(name, message) {
  console.log("desktopNotification");
  notifier.notify({
    title: name,
    message: message,
  });
}

module.exports = desktopNotification;