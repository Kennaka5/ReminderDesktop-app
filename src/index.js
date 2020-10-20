//dependencies for project
require("dotenv").config();
var CronJob = require("cron").CronJob;
const desktopNotification = require('./desktop.js');
const email = require("./email.js");
const parseData = require("./importYaml.js");


/* 
forEach loop below loops through the validated data from parseData()
 and checks the type to determine if the message will be sent via Email or Desktop
*/
 parseData().forEach((element) => {
 //reminder element validation
  const types = element.types.split(",");
  const schedule = element.schedule;

  //create cron job that uses schedule
  const job = new CronJob(schedule, function () {
    //EXACUTE FUNCTION BASED ON TYPE
    types.forEach(
      (e) => {
        if (e === "desktop") {
          // desktopNotification(element.name, element.message);
          console.log("desktop");
        } else {
          // email(element.name, element.message)
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

