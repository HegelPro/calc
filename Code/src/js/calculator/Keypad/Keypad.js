// запоменает расположение всех кнопок калькулятора
class Keypad {
  constructor(elementCalc) {
    this.btnsNum = elementCalc.querySelectorAll(".btn-num");
    
    this.btnLeftOperRight = elementCalc.querySelectorAll(".btn-left-oper-right");
    this.btnsOperRight = elementCalc.querySelectorAll(".btn-oper-right");
    this.btnLog = elementCalc.querySelector(".btn-log")

    this.btnEqually = elementCalc.querySelector(".btn-equally");
    
    this.btnDelete = elementCalc.querySelector(".btn-delete");
    this.btnsBracket = elementCalc.querySelectorAll(".btn-bracket");
    this.btnReset = elementCalc.querySelector(".btn-reset");
    
    this.btnDot = elementCalc.querySelector(".btn-dot");
    this.btnInvertion = elementCalc.querySelector(".btn-inversion");
  }
}

export default Keypad