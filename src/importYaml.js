const fs = require("fs");
const yaml = require("js-yaml");
const fileContents = fs.readFileSync("./.reminder.yaml", "utf8");
//bring in Yaml data to work with

function parseData (fileContents) {
const dataFile = yaml.safeLoad(fileContents);
const data = new Set(dataFile);

return data
}

parseData(fileContents)






module.exports = parseData(fileContents);