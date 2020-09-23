//dependencies for project
require("dotenv").config();
const fs = require("fs");
const yaml = require("js-yaml");
const nodemailer = require("nodemailer");
var CronJob = require("cron").CronJob;
const notifier = require("node-notifier");
const desktopNotification = require('./desktop.js');

//bring in Yaml data to work with
const fileContents = fs.readFileSync("./.reminder.yaml", "utf8");
const dataFile = yaml.safeLoad(fileContents);
const data = new Set(dataFile);

const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.REMINDER_EMAIL,
    pass: process.env.REMINDER_EMAIL_PASSWORD,
  },
});

//loop through data to get notification types and Schedules
data.forEach((element) => {
  //TODO reminder element validation
  const types = element.types.split(",");
  const schedule = element.schedule;


  /// define Email Object
  const mailInfo = {
    from: process.env.REMINDER_EMAIL,
    to: process.env.REMINDER_EMAIL,
    subject: element.name,
    text: element.message,
  };
  /// define function for email notifications
  function email() {
    mailTransporter.sendMail(mailInfo, function (err, data) {
      if (err) {
        console.log("Error Occurs", err);
      } else {
        console.log("Email sent successfully");
      }
    });
  }
  //create cron job that uses schedule
  const job = new CronJob(schedule, function () {
    //EXACUTE FUNCTION BASED ON TYPE
    types.forEach(
      (e) => {
        console.log("e", e);
        if (e === "desktop") {
          desktopNotification(element.name, element.message);
        } else {
          console.log("email");
        }
      },
      null,
      true,
      "America/Los_Angeles"
    );
  });
  job.start();
});
