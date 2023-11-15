const { Circle } = require("../lib/shapes");

describe("Circle", () => {
  test("should make a blue circle", () => {
    const shape = new Circle();
    shape.text = "OOO";
    shape.textColor = "red";
    shape.shapeColor = "blue";
    expect(shape.render()).toEqual(
      `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="blue" />
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="red">OOO</text>
        </svg>`
    );
  });
});
