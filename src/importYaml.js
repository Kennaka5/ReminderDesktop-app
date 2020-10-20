const fs = require("fs");
const yaml = require("js-yaml");

/**
 * 
 * parseDAta() reads the fileContents of '.reminder.yaml' and moves each object into a new set
 * Once the set is created the function loops through the new set and checks to make sure the message objects are valid
 * If any of the parameters are invalid the app will exit and specify what parameter is missing from the object, or if the parameter was not formatted corrctly  
 * 
*/
function parseData() {
  const fileContents = fs.readFileSync("./.reminder.yaml", "utf8");
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
