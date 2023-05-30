/**
 * import classes from other files declared as const variables
 */
const { Shape, Circle, Square, Triangle } = require("../lib/shapes");

/**
 * Used to test the 'Shape' and make sure it is running properly
 */
describe("Shape", () => {
  test("should console log color blue", () => {
    let color = "blue";
    const parentClass = new Shape(color);
    expect(parentClass.printdata()).toEqual(console.log(color));
  });
});

/**
 * Used to test the 'Circle' and make sure it is running properly
 */
describe("Circle", () => {
  test("should render properly", () => {
    let color = "blue";
    const shape = new Circle("blue");
    expect(shape.render()).toEqual(
      `<circle fill='${color}' r='100' cx='150' cy='100'></circle>`
    );
  });
});

/**
 * Used to test the 'Square' and make sure it is running properly
 */
describe("Square", () => {
  test("should render properly", () => {
    let color = "blue";
    const shape = new Square("blue");
    expect(shape.render()).toEqual(
      `<rect fill='${color}' x='0' y='0' width='300' height='200'></rect>`
    );
  });
});

/**
 * Used to test the 'Triangle' and make sure it is running properly
 */
describe("Triangle", () => {
  test("should render properly", () => {
    let color = "blue";
    const shape = new Triangle("blue");
    expect(shape.render()).toEqual(
      `<polygon fill='${color}' points='150,0 0,200 300,200'></polygon>`
    );
  });
});
