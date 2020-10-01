const fs = require("fs");
const yaml = require("js-yaml");
const fileContents = fs.readFileSync("./.reminder.yaml", "utf8");
//bring in Yaml data to work with

function parseData() {
  const dataFile = yaml.safeLoad(fileContents);
  const data = new Set(dataFile);

  data.forEach((element) => {

    const types = element.types;
    const schedule = element.schedule;
    const name = element.name;
    const message = element.message;

    if (!types) {
      throw Error(`missing parameter type at ${JSON.stringify(element)}`);
    } else if(!types.split(",")) {
        throw Error(`missing parameter type is not formatted correctly at ${JSON.stringify(element)}`);
    }
    console.log('types:', types.split(","))
    types.split(",").forEach(e => {
        if(e !== "desktop" && e !== 'email') {
            throw Error(`invalid type ${e}`);
        }
    });


    if (!schedule) {
      throw Error(`missing parameter schedule at ${JSON.stringify(element)}`);
    }
    if (!name) {
      throw Error(`missing parameter name at ${JSON.stringify(element)}`);
    }
    if (!message) {
      throw Error(`missing parameter message at ${JSON.stringify(element)}`);
    }
  });

  return data;
}

module.exports = parseData;
