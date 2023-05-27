const questions = [
  {
    type: "max",
    name: "logotitle",
    message: "Enter a logo title cannot be more then 3 characters",
    maxLength: 3,
  },
  {
    type: "input",
    name: "textColor",
    message:
      "Enter a color for your text(can be the color or hexadecimal value)",
  },
  {
    type: "list",
    name: "shapes",
    message: "Pick which shape your want for your logo",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "Enter a color for your shape(can be the color or hexadecimal value)",
  },
];

module.exports = questions;
