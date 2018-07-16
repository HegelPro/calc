const Keypad = require('./Calc/Keypad/Keypad');
const Display = require('./Calc/Display/Display')
const History = require('./Calc/History/History')
const Theme = require('./Calc/Theme/Theme')

class View {
  constructor(elementCalc) {
    this.keypad = new Keypad(elementCalc)
    this.display = new Display(elementCalc)
    this.history = new History(elementCalc)
    this.theme = new Theme() 
  }
};

module.exports = View;