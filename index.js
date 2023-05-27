const fs = require("fs");
// const shapes = require("./lib/shapes");
const questions = require("./questions");
const inquirer = require("inquirer");
const maxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

inquirer.registerPrompt("max", maxLengthInputPrompt);

function writeFile(file) {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
  });
}

writeFile();
