const Model = require('./Model.js');
const View = require('./View.js');

module.exports = {
  start() {
    
    console.log(Model.calc.result);

    Model.calc.plus(10);

    console.log(Model.calc.result);
    Model.calc.minus(5);

    console.log(Model.calc.result);
    Model.calc.divide("s43")

    console.log(Model.calc.result);
    
  }
};

