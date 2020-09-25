const fs = require("fs");
const yaml = require("js-yaml");

//bring in Yaml data to work with
const fileContents = fs.readFileSync("./.reminder.yaml", "utf8");
const dataFile = yaml.safeLoad(fileContents);
const data = new Set(dataFile);


module.exports = data;