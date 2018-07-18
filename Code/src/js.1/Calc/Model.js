const Calc = require('./Calc.js');

class Model {
  constructor() {
    this.calc = new Calc()
  }
}

module.exports = Model