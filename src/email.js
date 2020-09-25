const nodemailer = require("nodemailer");

const userName = process.env.REMINDER_EMAIL;
const passWord = process.env.REMINDER_EMAIL_PASSWORD;

if (!userName) {
  throw Error("missing REMINDER_EMAIL env variable.");
}
if (!passWord) {
  throw Error("missing REMINDER_EMAIL_PASSWORD env variable.");
}

const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: userName,
    pass: passWord,
  },
});

//loop through data to get notification types and Schedules
function email(name, message) {
  /// define Email Object
  const mailInfo = {
    from: userName,
    to: userName,
    subject: name,
    text: message,
  };
  mailTransporter.sendMail(mailInfo, function (err, data) {
    if (err) {
      console.log("Error Occurs", err);
    } else {
      console.log("Email sent successfully");
    }
  });
}

module.exports = email;
