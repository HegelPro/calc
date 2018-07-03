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
    var pastDisplay = View.display.value
    var persentMode = (Model.calc.persentOn) ? '%': '';

    Model.calc[Model.calc.nextOperation.func](View.display.value);

    View.display.value = Model.calc.result
    View.display.switchDisplay(Model.calc)
    Model.calc.persentOn = false

    View.history.addElem(pastResult + Model.calc.operationMap[Model.calc.nextOperation.func] + pastDisplay + persentMode + '=' + Model.calc.result)
  },

  changeValue(btnValue) {
    View.display.addNumberDisplay(btnValue, Model.calc);
  },

  deleteDisplay() {
    View.display.deleteValue(Model.calc)

    Model.calc.persentOn = false
  },

  resetValue() {
    View.history.addHr()

    Model.calc.switchNextOperation("start")

    View.display.deleteValue(Model.calc)

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
    this.changeValue(event.target.innerText)
  },

  addEventListenersToNumbers() {
    for (let index = 0; index < 10; index++) {
      View.keypad['btn' + index.toString()].addEventListener('click', this.addEventListenerToNumber.bind(this))
    }

    View.keypad.btnDot.addEventListener('click', this.addEventListenerToNumber.bind(this))
    View.keypad.btnPercent.addEventListener('click', this.addEventListenerToNumber.bind(this))
  },

  addEventListenersToOperators() {
    View.keypad.btnPlus.addEventListener("click", ()=>{
      if(Model.calc.nextOperation.func === "start") {
        Model.calc.result = Number(View.display.value)

        View.history.addElem(Model.calc.result)
      }

      Model.calc.switchNextOperation("plus")

      View.display.switchDisplay(Model.calc)
    })

    View.keypad.btnMinus.addEventListener("click", ()=>{
      if(Model.calc.nextOperation.func === "start") {
        Model.calc.result = Number(View.display.value)

        View.history.addElem(Model.calc.result)
      }

      Model.calc.switchNextOperation("minus")

      View.display.switchDisplay(Model.calc)
    })

    View.keypad.btnMult.addEventListener("click", ()=>{
      if(Model.calc.nextOperation.func === "start") {
        Model.calc.result = Number(View.display.value);

        View.history.addElem(Model.calc.result)
      }

      Model.calc.switchNextOperation("mult")

      View.display.switchDisplay(Model.calc)
    })

    View.keypad.btnDivide.addEventListener("click", ()=>{
      if(Model.calc.nextOperation.func === "start") {
        Model.calc.result = Number(View.display.value);

        View.history.addElem(Model.calc.result)
      }
      Model.calc.switchNextOperation("divide")

      View.display.switchDisplay(Model.calc)
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
    });

    View.theme.btnScientificTheme.addEventListener("click", (event)=>{
      View.theme.btnNormalTheme.style.display = "block";
      View.theme.btnScientificTheme.style.display = "none";

      View.theme.switchOnScientific()
    });

    View.theme.btnNormalTheme.addEventListener("click", (event)=>{
      View.theme.btnNormalTheme.style.display = "none";
      View.theme.btnScientificTheme.style.display = "block";

      View.theme.switchOnNormal()
    });
  }
};

