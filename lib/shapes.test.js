/**
 * import classes from other files declared as const variables
 */
const { Circle, Square, Triangle } = require("./shapes");
const { SVG } = require("./newSVG");

/**
 * Used to test the 'Circle' and make sure it is running properly
 */
describe("Circle", () => {
  test("should print out a circle with color blue", () => {
    const shape = new Circle();
    var color = "blue";
    expect(
      shape
        .render()
        .toEqual(`<circle fill='${color}' r='100' cx='150' cy='100'></circle>`)
    );
  });
});

/**
 * Used to test the 'Square' and make sure it is running properly
 */
describe("Square", () => {
  test("should print out a circle with color blue", () => {
    const shape = new Circle();
    var color = "blue";
    expect(
      shape
        .render()
        .toEqual(
          `<rect fill='${color}' x='0' y='0' width='300' height='200'></rect>`
        )
    );
  });
});

/**
 * Used to test the 'Triangle' and make sure it is running properly
 */
describe("Triangle", () => {
  test("should print out a circle with color blue", () => {
    const shape = new Circle();
    var color = "blue";
    expect(
      shape
        .render()
        .toEqual(
          `<polygon fill='${color}' points='150,0 0,200 300,200'></polygon>`
        )
    );
  });
});

/**
 * Used to test the 'newSVG' and make sure it is running properly
 */
describe("newSVG", () => {
  test("Should print out text 123 and color blue", () => {
    const svgTest = new SVG();
    var color = "blue";
    var textTest = "123";
    expect(
      svgTest
        .render()
        .toEqual(
          `<text fill="${color}" text-anchor="middle" x="150" y="125" font-size="60">${textTest}</text>`
        )
    );
  });
});
