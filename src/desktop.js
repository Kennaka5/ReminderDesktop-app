const notifier = require("node-notifier");

/* 
* using the name and message parameter this function send a desktop notification 
* See : https://www.npmjs.com/package/node-notifier
*/
function desktopNotification(name, message) {
  console.log("desktopNotification");
  notifier.notify({
    title: name,
    message: message,
  });
}

module.exports = desktopNotification;