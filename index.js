/**
 * declares a bunch of vairbles, each one is a imported value and declared as a const
 */
const fs = require("fs");
const questions = require("./questions");
const inquirer = require("inquirer");
const maxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
const { Triangle, Square, Circle } = require("./lib/shapes");
const { SVG } = require("./lib/newSVG");

/**
 * used inquirer-maxlength-input-prompt to add a limit to how much the user can type
 */
inquirer.registerPrompt("max", maxLengthInputPrompt);

/**
 * function to write the svg file, will ask a series of questions and create you svg
 * image based on user input
 */
function writeFile() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    const color = data.shapeColor;
    let svgShape;
    const textColor = data.textColor;
    const text = data.logotitle;
    switch (data.shapes) {
      case "circle":
        svgShape = new Circle(color);
        break;
      case "triangle":
        svgShape = new Triangle(color);
        break;
      case "square":
        svgShape = new Square(color);
        break;
    }
    let newShape = svgShape.render();

    const svg = new SVG(textColor, text, newShape);

    let svgMarkDown = svg.render();

    fs.writeFile("./examples/logo.svg", svgMarkDown, (err) => {
      err ? console.log("error") : console.log("Generated logo.svg");
    });
  });
}
writeFile();//start the writeFile function
