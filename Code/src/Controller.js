const Model = require('./Model.js');
const View = require('./View.js');

module.exports = {
  model: Model,
  view: View,

  start() {
    this.addEventListenersToNumbers()
    
  },

  addEventListenerToNumber(event) {
    if(View.display.display.value == 0) {
      View.display.display.value = event.target.innerText

      Model.calc.display = event.target.innerText
    } else {
      View.display.display.value += event.target.innerText

      Model.calc.display += event.target.innerText
    }
  },

  addEventListenersToNumbers() {
    for (let index = 0; index < 10; index++) {
      View.keypad['btn' + index.toString()].addEventListener('click', this.addEventListenerToNumber.bind(this))
    }
  }
};

