import SyntaxAlalisator from "./brain/syntax-alalisator"

class Model {
  constructor() {}

  static solveExample(str) {
    return SyntaxAlalisator.analysSyntax(str)
  }
}

export default Model