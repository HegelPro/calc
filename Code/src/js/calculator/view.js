import Keypad from './keypad/keypad'
import Display from './display/display'
import History from './history/history'
import Theme from './theme/theme'


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
    /**
     * Иницилизация возможности переключать тему
     * 
     * @public
     */
    this.theme = new Theme() 
  }
};

export default View;