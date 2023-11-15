const { Triangle } = require("../lib/shapes");

describe("Triangle", () => {
  test("should make a blue triangle", () => {
    const shape = new Triangle();
    shape.text = "OOO";
    shape.textColor = "red";
    shape.shapeColor = "blue";
    expect(shape.render()).toEqual(
      `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,0 250,0, 150,200" fill="blue" />
        <text x="150" y="100" font-size="60" text-anchor="middle" fill="red">OOO</text>
        </svg>`
    );
  });
});
