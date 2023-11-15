const { Square } = require("../lib/shapes");

describe("Square", () => {
  test("should make a blue square", () => {
    const shape = new Square();
    shape.text = "OOO";
    shape.textColor = "red";
    shape.shapeColor = "blue";
    expect(shape.render()).toEqual(
      `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="70" y="20" width="160" height="160" fill="blue" />
        <text x="150" y="117" font-size="60" text-anchor="middle" fill="red">OOO</text>
        </svg>`
    );
  });
});
