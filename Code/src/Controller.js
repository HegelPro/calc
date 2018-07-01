const Model = require('./Model.js');
const View = require('./View.js');


module.exports = {
  model: Model,
  view: View,

  start() {
    this.addEventListenersToNumbers()
    this.addEventListenerToDelete()
    this.addEventListenerToReset()
    this.addEventListenersToOperators()
    this.addEventListenerToEqually()
    
    this.addEventListenerToThemeBtns()
  },

  doOperation() {
    var pastResult = Model.calc.result
    var pastDisplay = View.display.display.value

    Model.calc[Model.calc.nextOperation.func](View.display.display.value);
    View.display.display.value = 0;

    View.history.addElem(pastResult + Model.calc.operationMap[Model.calc.nextOperation.func] + pastDisplay + '=' + Model.calc.result)
  },

  changeValue(btnValue) {
    if(Model.calc.nextOperation.used) {
      View.display.display.value = btnValue
      Model.calc.nextOperation.used = false
    } else if(View.display.display.value === "0") {
      if(btnValue === ".") {
        View.display.display.value = "0."
      } else {
        View.display.display.value = btnValue
      }
    } else {
      View.display.display.value += btnValue
    }
  },

  deleteDisplay() {
    View.display.display.value = '0'    
  },

  resetValue() {
    View.history.addHr()

    Model.calc.nextOperation.used = false
    Model.calc.nextOperation.func = "start";

    View.display.display.value = '0'

    Model.calc.result = 0
  },

  addEventListenerToEqually() {
    View.keypad.btnEqually.addEventListener("click", this.doOperation)  
  },

  addEventListenerToDelete() {
    View.keypad.btnDelete.addEventListener("click", this.deleteDisplay)
  },

  addEventListenerToReset() {
    View.keypad.btnReset.addEventListener("click", this.resetValue)
  },

  addEventListenerToNumber(event) {
    this.changeValue(event.target.innerText);
  },

  addEventListenersToNumbers() {
    for (let index = 0; index < 10; index++) {
      View.keypad['btn' + index.toString()].addEventListener('click', this.addEventListenerToNumber.bind(this))
    }

    View.keypad.btnDot.addEventListener('click', this.addEventListenerToNumber.bind(this))
  },

  addEventListenersToOperators() {
    View.keypad.btnPlus.addEventListener("click", ()=>{
      if(Model.calc.nextOperation.func === "start") {
        Model.calc.result = Number(View.display.display.value);

        View.history.addElem(Model.calc.result)
      }
      Model.calc.nextOperation.used = true
      Model.calc.nextOperation.func = "plus";
    })

    View.keypad.btnMinus.addEventListener("click", ()=>{
      if(Model.calc.nextOperation.func === "start") {
        Model.calc.result = Number(View.display.display.value);

        View.history.addElem(Model.calc.result)
      }
      Model.calc.nextOperation.used = true
      Model.calc.nextOperation.func = "minus";
    })

    View.keypad.btnMult.addEventListener("click", ()=>{
      if(Model.calc.nextOperation.func === "start") {
        Model.calc.result = Number(View.display.display.value);

        View.history.addElem(Model.calc.result)
      }
      Model.calc.nextOperation.used = true
      Model.calc.nextOperation.func = "mult";
    })

    View.keypad.btnDivide.addEventListener("click", ()=>{
      if(Model.calc.nextOperation.func === "start") {
        Model.calc.result = Number(View.display.display.value);

        View.history.addElem(Model.calc.result)
      }
      Model.calc.nextOperation.used = true
      Model.calc.nextOperation.func = "divide";
    })
  },

  addEventListenerToThemeBtns() {
    View.theme.btnDarkTheme.addEventListener("click", (event)=>{
      View.theme.btnLightTheme.style.display = "block";
      View.theme.btnDarkTheme.style.display = "none";

      View.theme.switchOnDark()
    });
    

    View.theme.btnLightTheme.addEventListener("click", (event)=>{
      View.theme.btnLightTheme.style.display = "none";
      View.theme.btnDarkTheme.style.display = "block";
      
      View.theme.switchOnLight()
    })
  }
};

