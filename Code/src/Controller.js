const Model = require('./Model.js');
const View = require('./View.js');

class Controller {
  constructor(elementCalc) {
    const {calc} = new Model(); // данные
    const {display, keypad, history, theme} = new View(elementCalc);  // отображение данных
    
    initEvents()  // запуск

  // функция иницилизации всех событий
    function initEvents() {
      addEventListenersToNumbers()
      addEventListenerToDelete()
      addEventListenerToReset()
      addEventListenersToOperators()
      addEventListenerToEqually()

      addEventListenerToThemeBtns()

      addEventListenerToInversionBtn()    
    }

  // действия для операций равенства
    function doOperation(equallyMode) {
      
  // выполнение операции
      if(equallyMode === 'sqrt') {  
        calc.result = display.value
        var pastDisplay = display.value
      
        calc['sqrt'](display.value)
      } else if(equallyMode === 'factorial') {
        calc.result = display.value
        var pastDisplay = display.value

        calc['factorial'](display.value)
      } else if(equallyMode === 'percent') {
        var pastResult = calc.result
        var pastDisplay = display.value

        calc.persentOn = true
        calc[calc.nextOperation.func](display.value);
        calc.persentOn = false
      } else {
        var pastResult = calc.result
        var pastDisplay = display.value

        calc[calc.nextOperation.func](display.value);
      }

  // запись значения импута в calc result
      display.value = calc.result
      display.switchDisplay(calc)

  // для записи чисел при наборе клавиатувы
      calc.nextOperation.used = true

  // для отключения режима точка
      calc.dotOn = false

  // вывод истории
      if(calc.nextOperation.func === "sqrtByBase") {
        history.addElem(`${pastDisplay}${calc.operationMap[calc.nextOperation.func]}${pastResult}=${calc.result}`)
      } else if(calc.nextOperation.func === "log") {
        history.addElem(`${calc.operationMap[calc.nextOperation.func]}${pastDisplay}(${pastResult})=${calc.result}`)
      } else if(equallyMode === 'sqrt') {
        history.addElem(`√${pastDisplay}=${calc.result}`)
      } else if(equallyMode === 'factorial') {
        history.addElem(`!${pastDisplay}=${calc.result}`)
      } else {
        history.addElem(`${pastResult}${calc.operationMap[calc.nextOperation.func]}${pastDisplay}=${calc.result}`)
      }
    }

  // функция для смены значения на дисплее
    function changeValue(btnValue) {
      display.addNumberDisplay(btnValue, calc);
    }

  // дейсткие очистки данных
    function deleteDisplay() {
      display.deleteValue(calc)
    }

    function resetValue() {
      history.addHr()

      calc.switchNextOperation('start')

      display.deleteValue(calc)

      calc.result = 0
    }

  // события работающие как равенство
    function addEventListenerToEqually() {
      keypad.btnEqually.addEventListener('click', () => { 
        doOperation('equally')
      })
      
      keypad.btnPercent.addEventListener('click', () => {
        doOperation('percent')
      })
      
      keypad.btnSqrt.addEventListener('click', () => {
        doOperation('sqrt')
      })

      keypad.btnFactorial.addEventListener('click', () => {
        doOperation('factorial')
      })
    }

  // события отчистки данных
    function addEventListenerToDelete() {
      keypad.btnDelete.addEventListener('click', deleteDisplay)
    }
    function addEventListenerToReset() {
      keypad.btnReset.addEventListener('click', resetValue)
    }

  // действие при вводе кнопками
    function addEventListenerToNumber(event) {
      changeValue(event.target.innerText)
    }

  // событие кнопок ввода
    function addEventListenersToNumbers() {
      for (let index = 0; index < 10; index++) {
        keypad['btn' + index.toString()].addEventListener('click', addEventListenerToNumber.bind(this))
      }

      keypad.btnDot.addEventListener('click', addEventListenerToNumber.bind(this))
    }

  // события операций
    function addEventListenersToOperators() {
      keypad.btnPlus.addEventListener('click', () => {
        if(calc.nextOperation.func === 'start') calc.result = Number(display.value)

        calc.switchNextOperation('plus')
        display.switchDisplay(calc)
      })

      keypad.btnMinus.addEventListener('click', () => {
        if(calc.nextOperation.func === 'start') calc.result = Number(display.value)

        calc.switchNextOperation('minus')
        display.switchDisplay(calc)
      })

      keypad.btnMult.addEventListener('click', () => {
        if(calc.nextOperation.func === 'start') calc.result = Number(display.value)

        calc.switchNextOperation('mult')
        display.switchDisplay(calc)
      })

      keypad.btnDivide.addEventListener('click', () => {
        if(calc.nextOperation.func === 'start') calc.result = Number(display.value)

        calc.switchNextOperation('divide')
        display.switchDisplay(calc)
      })

      keypad.btnPow.addEventListener('click', () => {
        if(calc.nextOperation.func === 'start') calc.result = Number(display.value)

        calc.switchNextOperation('pow')
        display.switchDisplay(calc)
      })

      keypad.btnSqrtByBase.addEventListener('click', () => {
        if(calc.nextOperation.func === 'start') calc.result = Number(display.value)

        calc.switchNextOperation('sqrtByBase')
        display.switchDisplay(calc)
      })

      keypad.btnLog.addEventListener('click', () => {
        if(calc.nextOperation.func === 'start') calc.result = Number(display.value)
        
        calc.switchNextOperation('log')
        display.switchDisplay(calc)
      })
    }

    // Событие инверсия

    function addEventListenerToInversionBtn() {
      keypad.btnInversion.addEventListener('click', () => {
        display.inversion(calc)
      
        calc.inversion()
      })
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

module.exports = Controller