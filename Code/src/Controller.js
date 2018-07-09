const classModel = require('./Model.js');
const classView = new require('./View.js');

function Controller(elementCalc) {
  const Model = new classModel(); // данные
  const View = new classView(elementCalc);  // отображение данных
  
  initEvents()  // запуск

// функция иницилизации всех событий
  function initEvents() {
    addEventListenersToNumbers()
    addEventListenerToDelete()
    addEventListenerToReset()
    addEventListenersToOperators()
    addEventListenerToEqually()

    addEventListenerToThemeBtns()
  }

// действие для операций равенства
  function doOperation() {
    var pastResult = Model.calc.result
    var pastDisplay = View.display.value

    Model.calc[Model.calc.nextOperation.func](View.display.value);

    View.display.value = Model.calc.result
    View.display.switchDisplay(Model.calc)

    Model.calc.nextOperation.used = true

    if(Model.calc.nextOperation.func === "sqrtByBase") {
      View.history.addElem(pastDisplay + Model.calc.operationMap[Model.calc.nextOperation.func] + pastResult + '=' + Model.calc.result)
    
      return
    }
    if(Model.calc.nextOperation.func === "log") {
      View.history.addElem(Model.calc.operationMap[Model.calc.nextOperation.func] + pastDisplay + '(' + pastResult + ')' + '=' + Model.calc.result)
    
      return
    }

    View.history.addElem(pastResult + Model.calc.operationMap[Model.calc.nextOperation.func] + pastDisplay + '=' + Model.calc.result)
  }
  function doOperationWithPercent() {
    var pastResult = Model.calc.result
    var pastDisplay = View.display.value

    Model.calc.persentOn = true
    Model.calc[Model.calc.nextOperation.func](View.display.value);
    Model.calc.persentOn = false

    View.display.value = Model.calc.result
    View.display.switchDisplay(Model.calc)

    Model.calc.nextOperation.used = true

    View.history.addElem(pastResult + Model.calc.operationMap[Model.calc.nextOperation.func] + pastDisplay + '%' + '=' + Model.calc.result)
  }
  function doOperationWithSqrt() {
    Model.calc.result = View.display.value
    var pastDisplay = View.display.value

    Model.calc['sqrt']();

    View.display.value = Model.calc.result
    View.display.switchDisplay(Model.calc)

    Model.calc.nextOperation.used = true

    View.history.addElem('√' + pastDisplay + '=' + Model.calc.result)
  }
  function doOperationWithFactorial() {
    Model.calc.result = View.display.value
    var pastDisplay = View.display.value

    Model.calc['factorial'](View.display.value);

    View.display.value = Model.calc.result
    View.display.switchDisplay(Model.calc)

    Model.calc.nextOperation.used = true

    View.history.addElem('!' + pastDisplay + '=' + Model.calc.result)
  }

// функция для смены значения на дисплее
  function changeValue(btnValue) {
    View.display.addNumberDisplay(btnValue, Model.calc);
  }

// дейсткие очистки данных
  function deleteDisplay() {
    View.display.deleteValue(Model.calc)
  }
  function resetValue() {
    View.history.addHr()

    Model.calc.switchNextOperation('start')

    View.display.deleteValue(Model.calc)

    Model.calc.result = 0
  }

// события работающие как равенство
  function addEventListenerToEqually() {
    View.keypad.btnEqually.addEventListener('click', doOperation)
    
    View.keypad.btnPercent.addEventListener('click', doOperationWithPercent)
    
    View.keypad.btnSqrt.addEventListener('click', doOperationWithSqrt)

    View.keypad.btnFactorial.addEventListener('click', doOperationWithFactorial)
  }

// события отчистки данных
  function addEventListenerToDelete() {
    View.keypad.btnDelete.addEventListener('click', deleteDisplay)
  }
  function addEventListenerToReset() {
    View.keypad.btnReset.addEventListener('click', resetValue)
  }

// действие при вводе кнопками
  function addEventListenerToNumber(event) {
    changeValue(event.target.innerText)
  }

// событие кнопок ввода
  function addEventListenersToNumbers() {
    for (let index = 0; index < 10; index++) {
      View.keypad['btn' + index.toString()].addEventListener('click', addEventListenerToNumber.bind(this))
    }

    View.keypad.btnDot.addEventListener('click', addEventListenerToNumber.bind(this))
  }

// события операций
  function addEventListenersToOperators() {
    View.keypad.btnPlus.addEventListener('click', ()=>{
      if(Model.calc.nextOperation.func === 'start') Model.calc.result = Number(View.display.value)

      Model.calc.switchNextOperation('plus')
      View.display.switchDisplay(Model.calc)
    })

    View.keypad.btnMinus.addEventListener('click', ()=>{
      if(Model.calc.nextOperation.func === 'start') Model.calc.result = Number(View.display.value)

      Model.calc.switchNextOperation('minus')
      View.display.switchDisplay(Model.calc)
    })

    View.keypad.btnMult.addEventListener('click', ()=>{
      if(Model.calc.nextOperation.func === 'start') Model.calc.result = Number(View.display.value)

      Model.calc.switchNextOperation('mult')
      View.display.switchDisplay(Model.calc)
    })

    View.keypad.btnDivide.addEventListener('click', ()=>{
      if(Model.calc.nextOperation.func === 'start') Model.calc.result = Number(View.display.value)

      Model.calc.switchNextOperation('divide')
      View.display.switchDisplay(Model.calc)
    })

    View.keypad.btnPow.addEventListener('click', ()=>{
      if(Model.calc.nextOperation.func === 'start') Model.calc.result = Number(View.display.value)

      Model.calc.switchNextOperation('pow')
      View.display.switchDisplay(Model.calc)
    })

    View.keypad.btnSqrtByBase.addEventListener('click', ()=>{
      if(Model.calc.nextOperation.func === 'start') Model.calc.result = Number(View.display.value)

      Model.calc.switchNextOperation('sqrtByBase')
      View.display.switchDisplay(Model.calc)
    })

    View.keypad.btnLog.addEventListener('click', ()=>{
      if(Model.calc.nextOperation.func === 'start') Model.calc.result = Number(View.display.value)
      
      Model.calc.switchNextOperation('log')
      View.display.switchDisplay(Model.calc)
    })
  }

// событие смены режимов калькуляторов
  function addEventListenerToThemeBtns() {
    View.theme.btnDarkTheme.addEventListener('click', (event)=>{
      View.theme.btnLightTheme.style.display = 'block';
      View.theme.btnDarkTheme.style.display = 'none';

      View.theme.switchOnDark()
    });

    View.theme.btnLightTheme.addEventListener('click', (event)=>{
      View.theme.btnLightTheme.style.display = 'none';
      View.theme.btnDarkTheme.style.display = 'block';
      
      View.theme.switchOnLight()
    });

    View.theme.btnScientificTheme.addEventListener('click', (event)=>{
      View.theme.btnNormalTheme.style.display = 'block';
      View.theme.btnScientificTheme.style.display = 'none';

      View.theme.switchOnScientific()
    });

    View.theme.btnNormalTheme.addEventListener('click', (event)=>{
      View.theme.btnNormalTheme.style.display = 'none';
      View.theme.btnScientificTheme.style.display = 'block';

      View.theme.switchOnNormal()
    });
  }
};

module.exports = Controller