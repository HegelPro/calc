const SyntaxAlalisator = require("./brain/syntax-alalisator")

class Model {
  constructor() {}

  static solveExample(str) {
    return SyntaxAlalisator.analysSyntax(str)
  }
}

module.exports = Model