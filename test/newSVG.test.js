/**
 * import classes from other files declared as const variables
 */
const { SVG } = require("../lib/newSVG");
/**
 * Used to test the 'newSVG' and make sure it is running properly
 */
describe("newSVG", () => {
  test("Should print out text 123 and color blue", () => {
    let shapeTest = "circle";
    let color = "blue";
    let textTest = "123";
    const svgTest = new SVG(color, textTest, shapeTest);
    expect(svgTest.render()).toEqual(
      `<svg xmlns="http://www.w3.org/2000/svg" version='1.1' width='300' hieght='200'>
            ${shapeTest}
            <text fill="${color}" text-anchor="middle" x="150" y="125" font-size="60">${textTest}</text>
            </svg>`
    );
  });
});
