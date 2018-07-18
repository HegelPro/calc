const Keypad = require('./keypad/keypad');
const Display = require('./display/display')
const History = require('./history/history')
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