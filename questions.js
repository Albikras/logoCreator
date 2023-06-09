/**
 * questions array, used to keep the questions in one place and are the question that
 * will be asked to the user
 */
const questions = [
  {
    type: "max",
    name: "logotitle",
    message: "Enter a logo title cannot be more then 3 characters",
    maxLength: 3,
    default: "SVG",
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

module.exports = questions; //used to import questions array
