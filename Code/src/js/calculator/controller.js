const Model = require('./model.js');
const View = require('./view');

class Controller {
  constructor(elementCalc) {

    const {} = new Model(); // данные
    const {display, keypad, history, theme} = new View(elementCalc);  // отображение данных

    initEvents()  // запуск

  // функция иницилизации всех событий
    function initEvents() {
      addEventListenersToNumbers()
      
      addEventListenersToLeftOperRight()
      addEventListenersToOperRight()
      
      addEventListenerToEqually()
      
      addEventListenerToDelete()
      addEventListenerToReset()

      addEventListenerToBrackets()
      addEventListenerToDot()

      addEventListenerToThemeBtns()
    }

    function inputLeftOperRight(event) {  // [0-9]oper[0-9]
      display.addSymbel(event.target.dataset.oper)
    }

    function addEventListenersToLeftOperRight() {
      keypad.btnLeftOperRight.forEach(element => {
        element.addEventListener('click', inputLeftOperRight)
      });
    }    

    function inputOperRight(event) {  // oper[0-9]
      display.addSymbel(event.target.dataset.oper)
    }

    function addEventListenersToOperRight() {
      keypad.btnsOperRight.forEach(element => {
        element.addEventListener('click', inputOperRight)
      });
    }  

    function inputNumber(event) { //  [0-9]
      display.addSymbel(event.target.dataset.num)
    }

    function addEventListenersToNumbers() { 
      keypad.btnsNum.forEach(element => {
        element.addEventListener('click', inputNumber)
      });
    }

    function doEqually() {  // '='
      var reselt =  Model.solveExample(display.value)

      history.addElem(display.value + '=' + reselt)
      
      display.value = reselt
    }

    function addEventListenerToEqually() {
      keypad.btnEqually.addEventListener('click', doEqually)
    }

    function deleteSymbel() { // 'del'
      display.deleteSymbel()
    }
    
    function addEventListenerToDelete() {
      keypad.btnDelete.addEventListener('click', deleteSymbel)
    }

    function resetDisplay() { // 'reset'
      display.resetDisplay()
    }
    
    function addEventListenerToReset() {
      keypad.btnReset.addEventListener('click', resetDisplay)
    }
    
    function inputBracket() { // '[()]'
      display.addSymbel(event.target.dataset.direction)
    }
    
    function addEventListenerToBrackets() {
      keypad.btnsBracket.forEach(element => {
        element.addEventListener('click', inputBracket)
      });
    }

    function inputDot() { // '.'
      display.addSymbel('.')
    }
    
    function addEventListenerToDot() {
      keypad.btnDot.addEventListener('click', inputDot);
    }

    // событие смены режимов калькуляторов
    function addEventListenerToThemeBtns() {
      theme.btnDarkTheme.addEventListener('click', () => {
        theme.btnLightTheme.style.display = 'block';
        theme.btnDarkTheme.style.display = 'none';

        theme.switchOnDark()
      });

      theme.btnLightTheme.addEventListener('click', () => {
        theme.btnLightTheme.style.display = 'none';
        theme.btnDarkTheme.style.display = 'block';
        
        theme.switchOnLight()
      });

      theme.btnScientificTheme.addEventListener('click', () => {
        theme.btnNormalTheme.style.display = 'block';
        theme.btnScientificTheme.style.display = 'none';

        theme.switchOnScientific()
      });

      theme.btnNormalTheme.addEventListener('click', () => {
        theme.btnNormalTheme.style.display = 'none';
        theme.btnScientificTheme.style.display = 'block';

        theme.switchOnNormal()
      });
    }
  }  
};

// console.log( Calculator.solveExample('2*(4+3)+!(1+2)') ); // exemple

module.exports = Controller