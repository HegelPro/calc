const Keypad = require('./Calc/Keypad/Keypad');
const Display = require('./Calc/Display/Display')
const History = require('./Calc/History/History')
const Theme = require('./Calc/Theme/Theme')


module.exports = {
  keypad: Keypad,
  display: Display,
  history: History,
  theme: Theme
};