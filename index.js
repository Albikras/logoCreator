const fs = require("fs");
// const shapes = require("./lib/shapes");
const questions = require("./questions");
const inquirer = require("inquirer");
const maxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
const logoGenerator = require("./lib/shapes");

inquirer.registerPrompt("max", maxLengthInputPrompt);

function writeFile() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);

    const logoContent = logoGenerator(data);

    fs.writeFile("./examples/logo.svg", logoContent, (err) => {
      err ? console.log("error") : console.log("Generated logo.svg");
    });
  });
}

writeFile();
