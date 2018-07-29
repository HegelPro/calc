import Model from '../model.js'

/**
 * @function FunctionsForEvents - нужна предоставления методов для событий нажутия на кнопри 
 * @param {Display} display 
 * @param {History} history 
 */
function FunctionsForEvents(display, history) {
  return {
    inputLeftOperRight(event) {  // [0-9]oper[0-9]
      display.addSymbel(event.target.dataset.oper)
    },

    inputOperRight(event) {  // oper[0-9]
      display.addSymbel(event.target.dataset.oper)
    },

    inputLog(event) { // log()()
      display.addSymbel(event.target.dataset.oper)
    },

    doInvertion(event) { // +/-
      display.inverseLostNumber()
    },

    inputNumber(event) { //  [0-9]
      display.addSymbel(event.target.dataset.num)
    },

    doEqually() {  // '='
      // display.setDefouldState()
      var reselt =  Model.solveExample(display.value)

      history.addElem(display.value + '=' + reselt)
      
      display.value = reselt
    },

    deleteSymbel() { // 'del'
      display.deleteSymbel()
    },

    resetDisplay() { // 'reset'
      display.resetDisplay()
    },
    
    inputBracket() { // '[()]'
      display.addSymbel(event.target.dataset.direction)
    },
    
    inputDot() { // '.'
      display.addSymbel('.')
    }
  }
}

export default FunctionsForEvents
