/**
 * import classes from other files declared as const variables
 */
const { SVG } = require("./newSVG");
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
