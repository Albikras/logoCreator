const fs = require("fs");
const shapes = require("./lib/shapes");
const question = require("./questions");
const inquirer = require("inquirer");

function writeFile(file) {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
  });
}
