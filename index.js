const fs = require("fs");
const questions = require("./questions");
const inquirer = require("inquirer");
const maxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
const { Triangle, Square, Circle } = require("./lib/shapes");
const { SVG } = require("./lib/newSVG");

inquirer.registerPrompt("max", maxLengthInputPrompt);

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
    let x = svgShape.render();

    const svg = new SVG(textColor, text, x);

    let y = svg.render();

    fs.writeFile("./examples/logo.svg", y, (err) => {
      err ? console.log("error") : console.log("Generated logo.svg");
    });
  });
}
writeFile();
