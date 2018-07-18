const Keypad = require('./Keypad/Keypad');
const Display = require('./Display/Display')
const History = require('./History/History')
const Theme = require('./Theme/Theme')

class View {
  constructor(elementCalc) {
    this.keypad = new Keypad(elementCalc)
    this.display = new Display(elementCalc)
    this.history = new History(elementCalc)
    this.theme = new Theme() 
  }
};

module.exports = View;