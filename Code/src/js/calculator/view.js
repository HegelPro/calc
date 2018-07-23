import Keypad from './keypad/keypad'
import Display from './display/display'
import History from './history/history'
import Theme from './theme/theme'

class View {
  constructor(elementCalc) {
    this.keypad = new Keypad(elementCalc)
    this.display = new Display(elementCalc)
    this.history = new History(elementCalc)
    this.theme = new Theme() 
  }
};

export default View;