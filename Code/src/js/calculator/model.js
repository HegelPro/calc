import SyntaxAnalisator from "./brain/syntax-analisator"

/**
 * Внутреняя реализация калькулятора
 * 
 * @class Model
 */
class Model {
  constructor() {}

  /**
   * @method solveExample - выполняет решение примера
   * @param {String} str - пример
   */
  static solveExample(str) {
    return SyntaxAnalisator.analysSyntax(str)
  }
}

export default Model