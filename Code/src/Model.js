const classCalc = require('./Calc/Calc.js');

function Model() {
  this.calc = new classCalc()
}

module.exports = Model