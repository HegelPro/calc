const Calc = require('./Calc/Calc.js');

class Model {
  constructor() {
    this.calc = new Calc()
  }
}

module.exports = Model