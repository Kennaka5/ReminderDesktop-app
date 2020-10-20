const nodemailer = require("nodemailer");

const userName = process.env.REMINDER_EMAIL;
const passWord = process.env.REMINDER_EMAIL_PASSWORD;

if (!userName) {
  throw Error("missing REMINDER_EMAIL env variable.");
}
if (!passWord) {
  throw Error("missing REMINDER_EMAIL_PASSWORD env variable.");
}
///Creates Mailer object to be used in sendMAil() see: https://nodemailer.com/
const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: userName,
    pass: passWord,
  },
});

/**
 *  Defines tha mail object and sends it thought sendMail.
 */
function email(name, message) {
  /// define Email Object
  const mailInfo = {
    from: userName,
    to: userName,
    subject: name,
    text: message,
  };
  //sends email via "nodemailer's library"
  mailTransporter.sendMail(mailInfo, function (err, data) {
    if (err) {
      console.log("Error Occurs", err);
    } else {
      console.log("Email sent successfully");
    }
  });
}

module.exports = email;
