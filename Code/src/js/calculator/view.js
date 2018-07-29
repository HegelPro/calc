import Keypad from './keypad/keypad'
import Display from './display/display'
import History from './history/history'

/**
 * Внешняя структура калькулятора
 * 
 * @class View
 */
class View {
  constructor(elementCalc) {
    /**
     * Иницилизация клавиатура
     * 
     * @public
     */
    this.keypad = new Keypad(elementCalc)
    /**
     * Иницилизация дисплей
     * 
     * @public
     */
    this.display = new Display(elementCalc)
    /**
     * Иницилизация истории
     * 
     * @public
     */
    this.history = new History(elementCalc)
  }
};

export default View;