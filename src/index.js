require('dotenv').config()
const fs = require('fs');
const yaml = require('js-yaml');

let fileContents = fs.readFileSync('./.reminder.yaml', 'utf8');
let data = yaml.safeLoad(fileContents);

console.log(data)