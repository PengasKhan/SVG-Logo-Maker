const inquirer = require("inquirer");
const fs = require("fs");

class Shape {
  constructor() {
    this.text = "";
    this.textColor = "";
    this.shapeColor = "";
  }

  async setCriteria() {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "shapeColor",
        message: "Enter a basic color name or Hex rgb for shape color",
        validate(input) {
          if (
            /#?([a-fA-F0-9]{6}|(black|silver|gray|white|maroon|red|purple|fuchsia|green|lime|olive|yellow|navy|blue|teal|aqua))/g.test(
              input
            )
          ) {
            return true;
          }

          throw Error("Please provide a basic color keyword or hex rgb value.");
        },
      },
      {
        type: "input",
        name: "text",
        message: "Enter up to 3 text characters",
        validate(input) {
          if (/.{0,3}/g.test(input)) {
            return true;
          }

          throw Error("Please provide at most 3 characters.");
        },
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter a basic color name or Hex rgb for text color",
        validate(input) {
          if (
            /#?([a-fA-F0-9]{6}|(black|silver|gray|white|maroon|red|purple|fuchsia|green|lime|olive|yellow|navy|blue|teal|aqua))/g.test(
              input
            )
          ) {
            return true;
          }

          throw Error("Please provide a basic color keyword or hex rgb value.");
        },
      },
    ]);
    this.text = answers.text;
    this.textColor = answers.textColor;
    this.shapeColor = answers.shapeColor;
  }

  render() {
    throw new Error("this shoudn't be used by parent class");
  }

  saveSVG() {
    const svg = this.render();
    fs.writeFile("output.SVG", svg, (err) =>
      err ? console.log(err) : console.log("Successfully created SVG!")
    );
  }

  async chooseShape() {
    const shapeChoice = await inquirer.prompt({
      type: "list",
      name: "shape",
      message: "Choose shape to contain logo",
      choices: ["square", "circle", "triangle"],
    });

    let shape;
    switch (shapeChoice.shape) {
      case "square":
        shape = new Square();
        break;
      case "circle":
        shape = new Circle();
        break;
      case "triangle":
        shape = new Triangle();
        break;
    }
    await shape.setCriteria();
    shape.saveSVG();
  }
}

class Square extends Shape {
  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="70" y="20" width="160" height="160" fill="${this.shapeColor}" />
        <text x="150" y="117" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
  }
}

class Circle extends Shape {
  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,0 250,0, 150,200" fill="${this.shapeColor}" />
        <text x="150" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
  }
}

exports.Shape = Shape;
exports.Triangle = Triangle;
exports.Square = Square;
exports.Circle = Circle;
