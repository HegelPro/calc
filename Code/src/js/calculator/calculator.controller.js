import View from './view'
import WebSocketSender from './brain/web-socket-sender'
import FunctionsForEvents from './brain/functions-for-events'
import themeSwitcher from './theme/theme-switcher'
import Display from './display/display';
import Keypad from './keypad/keypad';

/**
 * Управляющий файл. Организует взаимодействие между модулями Model и View
 * @constructor
 * @param {Object} Model - внутренее устройство калькулятора
 * @param {Object} View - внешний вид калькулятора
 */
class Controller {
  constructor(elementCalc) {
    var elementCalc = document.querySelector(elementCalc)

    const {display, history, keypad} = new View(elementCalc);  // отображение данных

    this.initEvents(elementCalc, display, history, keypad)  // запуск
  }  

  /**
   * 
   * @param {String} elementCalc - ip элемента
   * @param {Display} display - дисплей
   * @param {History} history - список с историей
   * @param {Keypad} keypad - Клавиатура
   */
  initEvents(elementCalc, display, history, keypad) {
    const functionsForEvents = new FunctionsForEvents(display, history)

    keypad.btnLeftOperRight.forEach(element => {  // [0-9]oper[0-9]
      element.addEventListener('click', functionsForEvents.inputLeftOperRight)
    });

    keypad.btnsOperRight.forEach(element => { // oper[0-9]
      element.addEventListener('click', functionsForEvents.inputOperRight)
    });
    
    keypad.btnLog.addEventListener('click', functionsForEvents.inputLog) // log()()

    keypad.btnInvertion.addEventListener('click', functionsForEvents.doInvertion) // +/-

    keypad.btnsNum.forEach(element => { //  [0-9]
      element.addEventListener('click', functionsForEvents.inputNumber)
    });

    keypad.btnEqually.addEventListener('click', functionsForEvents.doEqually) // '='

    keypad.btnDelete.addEventListener('click', functionsForEvents.deleteSymbel) // 'del'

    keypad.btnReset.addEventListener('click', functionsForEvents.resetDisplay)  // 'reset'
    
    keypad.btnsBracket.forEach(element => { // '[()]'
      element.addEventListener('click', functionsForEvents.inputBracket)
    });

    keypad.btnDot.addEventListener('click', functionsForEvents.inputDot); // '.'

    // Специальные возможности
    new WebSocketSender(elementCalc, display) // добавляет событие для кнопки с зайцем(число фибоначи)
    themeSwitcher() // добавляет событие для смены тем
  }
};

export default Controller