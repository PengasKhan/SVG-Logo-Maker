const inquirer = require("inquirer");
const { join } = require("path");
const { writeFile } = require("fs/promises");
const { createDocument } = require("./document");

class Shape {
  constructor() {
    this.criteria = {};
  }

  async setCriteria() {
    const answers = await inquirer.createPromptModule([
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
      {
        type: "list",
        name: "shape",
        message: "choose a shape for your logo",
        choices: ['square', 'triangle', 'circle']
      },
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
    ]);
    this.criteria = answers;
  }

  generateSVG() {
    const {text, textColor} = this.criteria;
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${this.getShapeSVG()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    `
  }

  getShapeSVG() {
    throw new Error('this shoudn\'t be used by parent class')
  }
}

class Square extends Shape {
    getShapeSVG() {
        const {}
      }
}
